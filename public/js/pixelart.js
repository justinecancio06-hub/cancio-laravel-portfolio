(function () {
  'use strict';

  var canvas = document.getElementById('pixelCanvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');

  var GRID = 16;
  var CELLS = GRID * GRID;
  var EMPTY = '#FFFFFF';
  var DISPLAY = 480;
  var EXPORT = 512;
  var DISPLAY_DPR = Math.min(window.devicePixelRatio || 1, 2);

  var grid = new Array(CELLS);
  var tool = 'pencil';
  var previousTool = 'pencil';
  var color = '#1A1A1A';
  var drawing = false;
  var lastIndex = -1;
  var ownerId = null;

  var history = [];
  var MAX_HISTORY = 20;
  var undoBtn = document.getElementById('pixelUndo');

  function setCanvasSize() {
    canvas.width = Math.round(DISPLAY * DISPLAY_DPR);
    canvas.height = Math.round(DISPLAY * DISPLAY_DPR);
  }

  function cellSize() {
    return canvas.width / GRID;
  }

  function render() {
    var cs = cellSize();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = EMPTY;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < CELLS; i++) {
      var c = grid[i];
      if (!c) continue;
      var x = (i % GRID) * cs;
      var y = Math.floor(i / GRID) * cs;
      ctx.fillStyle = c;
      ctx.fillRect(x, y, cs, cs);
    }

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.14)';
    ctx.lineWidth = Math.max(1, DISPLAY_DPR);
    ctx.beginPath();
    for (var g = 1; g < GRID; g++) {
      var p = Math.round(g * cs) + 0.5;
      ctx.moveTo(p, 0);
      ctx.lineTo(p, canvas.height);
      ctx.moveTo(0, p);
      ctx.lineTo(canvas.width, p);
    }
    ctx.stroke();
  }

  function pushHistory() {
    history.push(grid.slice());
    if (history.length > MAX_HISTORY) history.shift();
    syncUndo();
  }

  function syncUndo() {
    if (undoBtn) undoBtn.setAttribute('aria-disabled', history.length === 0 ? 'true' : 'false');
  }

  function undo() {
    if (history.length === 0) return;
    grid = history.pop();
    render();
    syncUndo();
  }

  function indexFromEvent(e) {
    var rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return -1;
    var cx = Math.floor((e.clientX - rect.left) / rect.width * GRID);
    var cy = Math.floor((e.clientY - rect.top) / rect.height * GRID);
    if (cx < 0 || cy < 0 || cx >= GRID || cy >= GRID) return -1;
    return cy * GRID + cx;
  }

  function floodFill(index) {
    var target = grid[index];
    var replacement = color;
    if (target === replacement) return false;

    var stack = [index];
    var seen = new Uint8Array(CELLS);
    while (stack.length) {
      var i = stack.pop();
      if (seen[i]) continue;
      if (grid[i] !== target) continue;
      seen[i] = 1;
      grid[i] = replacement;

      var x = i % GRID;
      var y = Math.floor(i / GRID);
      if (x > 0) stack.push(i - 1);
      if (x < GRID - 1) stack.push(i + 1);
      if (y > 0) stack.push(i - GRID);
      if (y < GRID - 1) stack.push(i + GRID);
    }
    return true;
  }

  function paintIndex(i) {
    if (i < 0) return;
    if (tool === 'fill') {
      if (floodFill(i)) render();
      return;
    }
    var value = tool === 'eraser' ? null : color;
    if (grid[i] === value) return;
    grid[i] = value;
    render();
  }

  function start(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    var i = indexFromEvent(e);
    if (i < 0) return;
    e.preventDefault();
    if (tool === 'eyedropper') {
      var hex = grid[i] || EMPTY;
      setColor(hex, swatchForColor(hex));
      var back = document.querySelector('.pixel-tool[data-tool="' + previousTool + '"]');
      if (back) selectTool(back);
      return;
    }
    pushHistory();
    if (canvas.setPointerCapture) {
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    }
    ownerId = e.pointerId;
    if (tool === 'fill') {
      paintIndex(i);
      return;
    }
    drawing = true;
    lastIndex = -1;
    if (i !== lastIndex) {
      lastIndex = i;
      paintIndex(i);
    }
  }

  function move(e) {
    if (!drawing || e.pointerId !== ownerId) return;
    var i = indexFromEvent(e);
    if (i < 0 || i === lastIndex) return;
    e.preventDefault();
    lastIndex = i;
    paintIndex(i);
  }

  function end(e) {
    if (e && e.pointerId != null && e.pointerId !== ownerId) return;
    if (!drawing && ownerId === null) return;
    drawing = false;
    lastIndex = -1;
    ownerId = null;
    if (e && e.pointerId != null && canvas.releasePointerCapture) {
      try {
        if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
  }

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', function (e) {
    if (!canvas.hasPointerCapture || !canvas.hasPointerCapture(e.pointerId)) end(e);
  });
  canvas.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  var pickrInstance = null;
  var customWrap = document.getElementById('pixelCustomWrap');
  var currentSwatch = document.getElementById('pixelCurrent');

  function swatchForColor(hex) {
    var target = String(hex).toLowerCase();
    var all = document.querySelectorAll('.pixel-swatch');
    for (var i = 0; i < all.length; i++) {
      if (String(all[i].getAttribute('data-color') || '').toLowerCase() === target) return all[i];
    }
    return null;
  }

  function setColor(hex, sourceEl) {
    color = hex;
    if (pickrInstance) pickrInstance.setColor(hex, true);
    if (currentSwatch) currentSwatch.style.setProperty('--pixel-current', hex);
    var all = document.querySelectorAll('.pixel-swatch');
    for (var i = 0; i < all.length; i++) {
      var active = all[i] === sourceEl;
      all[i].classList.toggle('is-active', active);
      all[i].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    if (customWrap) customWrap.classList.toggle('is-active', !sourceEl);
  }

  function selectTool(btn) {
    tool = btn.getAttribute('data-tool');
    if (tool !== 'eyedropper') previousTool = tool;
    canvas.style.cursor = tool === 'fill' ? 'pointer' : 'crosshair';
    var all = document.querySelectorAll('.pixel-tool');
    for (var i = 0; i < all.length; i++) {
      var active = all[i] === btn;
      all[i].classList.toggle('is-active', active);
      all[i].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
  }

  var swatches = document.querySelectorAll('.pixel-swatch');
  for (var i = 0; i < swatches.length; i++) {
    swatches[i].addEventListener('click', function () {
      setColor(this.getAttribute('data-color'), this);
    });
  }

  var pickrMount = document.getElementById('pixelCustomPickr');
  if (pickrMount && window.Pickr) {
    pickrInstance = Pickr.create({
      el: pickrMount,
      theme: 'monolith',
      default: color,
      swatches: null,
      components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: {
          hex: true,
          rgba: false,
          hsla: false,
          input: true,
          clear: false,
          save: false
        }
      }
    });
    pickrInstance.on('change', function (c) {
      if (c) setColor(c.toHEXA().toString(), null);
    });
  }

  var tools = document.querySelectorAll('.pixel-tool');
  for (var k = 0; k < tools.length; k++) {
    tools[k].addEventListener('click', function () { selectTool(this); });
  }

  var clearBtn = document.getElementById('pixelClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      pushHistory();
      grid = new Array(CELLS);
      render();
    });
  }

  if (undoBtn) {
    undoBtn.addEventListener('click', function () {
      if (undoBtn.getAttribute('aria-disabled') === 'true') return;
      undo();
    });
  }

  window.addEventListener('keydown', function (e) {
    if (e.target && e.target.closest && e.target.closest('input, textarea')) return;
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      undo();
    }
  });

  var saveBtn = document.getElementById('pixelSave');
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      var src = document.createElement('canvas');
      src.width = GRID;
      src.height = GRID;
      var sctx = src.getContext('2d');
      sctx.fillStyle = EMPTY;
      sctx.fillRect(0, 0, GRID, GRID);
      for (var i = 0; i < CELLS; i++) {
        if (!grid[i]) continue;
        sctx.fillStyle = grid[i];
        sctx.fillRect(i % GRID, Math.floor(i / GRID), 1, 1);
      }

      var out = document.createElement('canvas');
      out.width = EXPORT;
      out.height = EXPORT;
      var octx = out.getContext('2d');
      octx.imageSmoothingEnabled = false;
      octx.drawImage(src, 0, 0, GRID, GRID, 0, 0, EXPORT, EXPORT);

      var a = document.createElement('a');
      a.href = out.toDataURL('image/png');
      a.download = 'cancio-pixel-' + Date.now() + '.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  setCanvasSize();
  syncUndo();
  render();
})();
