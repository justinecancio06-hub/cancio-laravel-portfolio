(function () {
  'use strict';

  var canvas = document.getElementById('sketchCanvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var PAPER = '#FAFAF7';
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  var brushColor = '#1A1A1A';
  var penSize = 5;
  var eraserSize = 5;
  var size = 5;
  var strokeSize = 5;
  var opacity = 1;
  var tool = 'pen';
  var previousTool = 'pen';
  var drawing = false;
  var prev = null;
  var prevMid = null;

  var locked = false;
  var challengeState = 'idle';
  var challengeSeconds = 180;
  var challengeIntervalId = null;

  var history = [];
  var MAX_HISTORY = 20;
  var restoring = false;
  var undoBtn = null;

  var cssW = 0;
  var cssH = 0;

  function paintPaper() {
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.restore();
  }

  function sizeCanvas() {
    var rect = canvas.getBoundingClientRect();
    var w = Math.max(1, Math.round(rect.width));
    var h = Math.max(1, Math.round(rect.height));
    if (w === cssW && h === cssH) return;
    cssW = w;
    cssH = h;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    paintPaper();
    history = [];
    syncUndo();
  }

  function applyStyle() {
    var drawColor = tool === 'eraser' ? PAPER : brushColor;
    ctx.strokeStyle = drawColor;
    ctx.fillStyle = drawColor;
    ctx.lineWidth = strokeSize;
    ctx.globalAlpha = opacity;
  }

  function hexToRgb(hex) {
    hex = String(hex).replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var n = parseInt(hex, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  function rgbToHex(r, g, b) {
    function pad(v) {
      var s = v.toString(16);
      return s.length === 1 ? '0' + s : s;
    }
    return '#' + pad(r) + pad(g) + pad(b);
  }

  function swatchForColor(hex) {
    var target = String(hex).toLowerCase();
    var all = document.querySelectorAll('.sketch-swatch');
    for (var i = 0; i < all.length; i++) {
      if (String(all[i].getAttribute('data-color') || '').toLowerCase() === target) return all[i];
    }
    return null;
  }

  function floodFill(cssX, cssY) {
    var w = canvas.width;
    var h = canvas.height;
    var px = Math.min(w - 1, Math.max(0, Math.floor(cssX * dpr)));
    var py = Math.min(h - 1, Math.max(0, Math.floor(cssY * dpr)));

    var img = ctx.getImageData(0, 0, w, h);
    var data = img.data;
    var start = (py * w + px) * 4;
    var tr = data[start], tg = data[start + 1], tb = data[start + 2];

    var fill = hexToRgb(brushColor);
    var fr = fill.r, fg = fill.g, fb = fill.b;
    var tol = 30;
    var LIMIT = 500000;

    var visited = new Uint8Array(w * h);
    var stack = [px, py];
    var count = 0;
    var aborted = false;

    function match(i) {
      return Math.abs(data[i] - tr) <= tol &&
             Math.abs(data[i + 1] - tg) <= tol &&
             Math.abs(data[i + 2] - tb) <= tol;
    }

    function pushRun(ny, xl, xr) {
      var off = ny * w;
      var inRun = false;
      for (var x = xl; x <= xr; x++) {
        var vi = off + x;
        var ok = !visited[vi] && match(vi * 4);
        if (ok && !inRun) { stack.push(x, ny); inRun = true; }
        else if (!ok) { inRun = false; }
      }
    }

    while (stack.length) {
      if (count > LIMIT) { aborted = true; break; }
      var y = stack.pop();
      var x = stack.pop();
      var row = y * w;
      if (visited[row + x] || !match((row + x) * 4)) continue;

      var xl = x;
      while (xl > 0 && !visited[row + xl - 1] && match((row + xl - 1) * 4)) xl--;
      var xr = x;
      while (xr < w - 1 && !visited[row + xr + 1] && match((row + xr + 1) * 4)) xr++;

      for (var i = xl; i <= xr; i++) {
        var v = row + i;
        visited[v] = 1;
        var d = v * 4;
        if (opacity >= 1) {
          data[d] = fr; data[d + 1] = fg; data[d + 2] = fb;
        } else {
          data[d]     = Math.round(fr * opacity + data[d] * (1 - opacity));
          data[d + 1] = Math.round(fg * opacity + data[d + 1] * (1 - opacity));
          data[d + 2] = Math.round(fb * opacity + data[d + 2] * (1 - opacity));
        }
        data[d + 3] = 255;
        count++;
      }

      if (y > 0) pushRun(y - 1, xl, xr);
      if (y < h - 1) pushRun(y + 1, xl, xr);
    }

    if (aborted) {
      console.warn('Sketch fill too large — skipped.');
      return;
    }
    ctx.putImageData(img, 0, 0);
  }

  function pointFrom(e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.min(rect.width, Math.max(0, e.clientX - rect.left)),
      y: Math.min(rect.height, Math.max(0, e.clientY - rect.top))
    };
  }

  function start(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (locked) { e.preventDefault(); return; }
    e.preventDefault();
    if (tool === 'eyedropper') {
      var ep = pointFrom(e);
      var px = Math.min(canvas.width - 1, Math.max(0, Math.floor(ep.x * dpr)));
      var py = Math.min(canvas.height - 1, Math.max(0, Math.floor(ep.y * dpr)));
      var data = ctx.getImageData(px, py, 1, 1).data;
      var hex = rgbToHex(data[0], data[1], data[2]);
      setColor(hex, swatchForColor(hex));
      var back = document.querySelector('.sketch-tool[data-tool="' + previousTool + '"]');
      if (back) selectTool(back);
      return;
    }
    pushHistory();
    if (tool === 'bucket') {
      var bp = pointFrom(e);
      floodFill(bp.x, bp.y);
      return;
    }
    drawing = true;
    strokeSize = size;
    if (canvas.setPointerCapture) {
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    }
    var p = pointFrom(e);
    prev = p;
    prevMid = p;
    applyStyle();
    ctx.beginPath();
    ctx.arc(p.x, p.y, strokeSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function move(e) {
    if (!drawing || !prev) return;
    e.preventDefault();
    var p = pointFrom(e);
    var mid = { x: (prev.x + p.x) / 2, y: (prev.y + p.y) / 2 };
    applyStyle();
    ctx.beginPath();
    ctx.moveTo(prevMid.x, prevMid.y);
    ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
    ctx.stroke();
    prev = p;
    prevMid = mid;
  }

  function end(e) {
    if (!drawing) return;
    drawing = false;
    prev = null;
    prevMid = null;
    if (e && e.pointerId != null && canvas.releasePointerCapture) {
      try {
        if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      } catch (_) {}
    }
  }

  function pushHistory() {
    if (locked) return;
    history.push(canvas.toDataURL('image/png'));
    if (history.length > MAX_HISTORY) history.shift();
    syncUndo();
  }

  function syncUndo() {
    if (!undoBtn) return;
    var disabled = restoring || history.length === 0 || challengeState === 'running';
    undoBtn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  }

  function undo() {
    if (restoring) return;
    if (challengeState === 'running') return;
    if (history.length === 0) return;
    var snap = history.pop();
    restoring = true;
    syncUndo();
    var img = new Image();
    img.onload = function () {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      ctx.restore();
      restoring = false;
      syncUndo();
    };
    img.onerror = function () {
      restoring = false;
      syncUndo();
    };
    img.src = snap;
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
  var customWrap = document.getElementById('sketchCustomWrap');

  function setColor(hex, sourceEl) {
    brushColor = hex;
    if (pickrInstance) pickrInstance.setColor(hex, true);
    var all = document.querySelectorAll('.sketch-swatch');
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
    canvas.style.cursor = tool === 'bucket' ? 'pointer' : (tool === 'eraser' ? 'cell' : 'crosshair');
    size = tool === 'eraser' ? eraserSize * 2 : penSize;
    var all = document.querySelectorAll('.sketch-tool');
    for (var i = 0; i < all.length; i++) {
      var active = all[i] === btn;
      all[i].classList.toggle('is-active', active);
      all[i].setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    var colorGroup = document.querySelector('.sketch-color');
    if (colorGroup) colorGroup.classList.toggle('is-muted', tool === 'eraser');
    syncSizeSlider();
  }

  function syncSizeSlider() {
    if (!sizeRange) return;
    var v = tool === 'eraser' ? eraserSize : penSize;
    sizeRange.value = v;
    if (sizeLabel) sizeLabel.textContent = 'Size: ' + v;
  }

  var timerEl = document.getElementById('sketchTimer');
  var overlayEl = document.getElementById('sketchOverlay');
  var challengeBtn = document.getElementById('sketchChallenge');
  var restartBtn = document.getElementById('sketchRestart');

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function formatTime(s) {
    return pad(Math.floor(s / 60)) + ':' + pad(s % 60);
  }

  function renderTimer() {
    if (!timerEl) return;
    timerEl.textContent = '⏱ ' + formatTime(challengeSeconds);
    timerEl.classList.toggle('is-urgent', challengeSeconds <= 30);
  }

  function clearChallengeTimer() {
    if (challengeIntervalId !== null) {
      window.clearInterval(challengeIntervalId);
      challengeIntervalId = null;
    }
  }

  function syncChallengeButton() {
    if (!challengeBtn) return;
    if (challengeState === 'running') {
      challengeBtn.textContent = 'Stop Challenge';
      challengeBtn.setAttribute('aria-label', 'Stop challenge');
    } else if (challengeState === 'ended') {
      challengeBtn.textContent = 'Restart Challenge';
      challengeBtn.setAttribute('aria-label', 'Restart challenge');
    } else {
      challengeBtn.textContent = '⏱ Challenge';
      challengeBtn.setAttribute('aria-label', 'Start 3 minute challenge');
    }
  }

  function showTimer(show) { if (timerEl) timerEl.hidden = !show; }
  function showOverlay(show) { if (overlayEl) overlayEl.hidden = !show; }

  function unlockCanvas() {
    locked = false;
    canvas.style.pointerEvents = '';
    drawing = false;
    prev = null;
    prevMid = null;
  }

  function lockCanvas() {
    locked = true;
    canvas.style.pointerEvents = 'none';
    drawing = false;
    prev = null;
    prevMid = null;
  }

  function tick() {
    challengeSeconds--;
    if (challengeSeconds <= 0) {
      challengeSeconds = 0;
      renderTimer();
      endChallenge();
      return;
    }
    renderTimer();
  }

  function startChallenge() {
    clearChallengeTimer();
    challengeState = 'running';
    challengeSeconds = 180;
    unlockCanvas();
    paintPaper();
    history = [];
    renderTimer();
    showTimer(true);
    showOverlay(false);
    syncChallengeButton();
    syncUndo();
    challengeIntervalId = window.setInterval(tick, 1000);
  }

  function stopChallenge() {
    clearChallengeTimer();
    challengeState = 'idle';
    unlockCanvas();
    showTimer(false);
    showOverlay(false);
    if (timerEl) timerEl.classList.remove('is-urgent');
    syncChallengeButton();
    syncUndo();
    if (challengeBtn) challengeBtn.focus();
  }

  function endChallenge() {
    clearChallengeTimer();
    challengeState = 'ended';
    lockCanvas();
    renderTimer();
    showTimer(true);
    showOverlay(true);
    syncChallengeButton();
    syncUndo();
    if (restartBtn) restartBtn.focus();
  }

  if (challengeBtn) {
    challengeBtn.addEventListener('click', function () {
      if (challengeState === 'running') { stopChallenge(); }
      else { startChallenge(); }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', function () { startChallenge(); });
  }

  window.addEventListener('beforeunload', clearChallengeTimer);

  var swatches = document.querySelectorAll('.sketch-swatch');
  for (var i = 0; i < swatches.length; i++) {
    swatches[i].addEventListener('click', function () { setColor(this.getAttribute('data-color'), this); });
  }

  var pickrMount = document.getElementById('sketchCustomPickr');
  if (pickrMount && window.Pickr) {
    pickrInstance = Pickr.create({
      el: pickrMount,
      theme: 'monolith',
      default: brushColor,
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

  var tools = document.querySelectorAll('.sketch-tool');
  for (var k = 0; k < tools.length; k++) {
    tools[k].addEventListener('click', function () { selectTool(this); });
  }

  var sizeRange = document.getElementById('sketchSize');
  var sizeLabel = document.getElementById('sketchSizeLabel');
  if (sizeRange) {
    var initSize = parseInt(sizeRange.value, 10) || 5;
    if (tool === 'eraser') { eraserSize = initSize; } else { penSize = initSize; }
    size = tool === 'eraser' ? eraserSize * 2 : penSize;
    syncSizeSlider();
    sizeRange.addEventListener('input', function () {
      var v = parseInt(this.value, 10) || 5;
      if (tool === 'eraser') { eraserSize = v; } else { penSize = v; }
      size = tool === 'eraser' ? eraserSize * 2 : penSize;
      if (sizeLabel) sizeLabel.textContent = 'Size: ' + v;
    });
  }

  var opacityRange = document.getElementById('sketchOpacity');
  var opacityLabel = document.getElementById('sketchOpacityLabel');
  if (opacityRange) {
    opacity = parseFloat(opacityRange.value) || 1;
    if (opacityLabel) opacityLabel.textContent = 'Opacity: ' + Math.round(opacity * 100) + '%';
    opacityRange.addEventListener('input', function () {
      opacity = parseFloat(this.value) || 1;
      if (opacityLabel) opacityLabel.textContent = 'Opacity: ' + Math.round(opacity * 100) + '%';
    });
  }

  var clearBtn = document.getElementById('sketchClear');
  if (clearBtn) clearBtn.addEventListener('click', function () { pushHistory(); paintPaper(); });

  undoBtn = document.getElementById('sketchUndo');
  if (!undoBtn && clearBtn && clearBtn.parentNode) {
    undoBtn = document.createElement('button');
    undoBtn.type = 'button';
    undoBtn.id = 'sketchUndo';
    undoBtn.className = 'btn btn--ghost sketch-action sketch-undo tool-icon';
    undoBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="20" height="20"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>';
    undoBtn.setAttribute('aria-label', 'Undo last action');
    undoBtn.setAttribute('title', 'Undo last action');
    clearBtn.parentNode.insertBefore(undoBtn, clearBtn);
  }
  if (undoBtn) {
    undoBtn.addEventListener('click', function () {
      if (undoBtn.getAttribute('aria-disabled') === 'true') return;
      undo();
    });
  }
  syncUndo();

  window.addEventListener('keydown', function (e) {
    if (e.target && e.target.closest && e.target.closest('input, textarea')) return;
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      undo();
    }
  });

  var saveBtn = document.getElementById('sketchSave');
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      var a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'cancio-sketch-' + Date.now() + '.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  var resizeRaf = null;
  window.addEventListener('resize', function () {
    if (resizeRaf) return;
    resizeRaf = window.requestAnimationFrame(function () {
      resizeRaf = null;
      sizeCanvas();
    });
  });

  sizeCanvas();
})();
