/* ---------- Shared background effects: constellation + wet drops ----------
   Keep in sync with the matching sections at the end of main.js. */

/* ---------- Stardust particles drifting over the galaxy ---------- */
(function () {
  var canvas = document.getElementById('stardust');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var rafId = 0;
  var running = false;
  var w = 0, h = 0, dpr = 1;
  var stars = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init();
  }

  function init() {
    stars = [];
    for (var i = 0; i < 600; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.6,
        amp: 20 + Math.random() * 30,
        offset: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var now = Date.now();
    var seconds = now / 1000;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var x = s.x + Math.sin(seconds * s.speed + s.phase) * s.amp;
      var y = s.y + Math.cos(seconds * s.speed * 0.8 + s.phase) * s.amp * 0.6;
      var alpha = 0.45 + Math.sin(now * 0.002 + s.offset) * 0.35;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function loop() {
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    loop();
  }
  function stop() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  window.addEventListener('resize', function () {
    resize();
  }, { passive: true });

  resize();
  if (!reduceMotion.matches) {
    start();
  }
  reduceMotion.addEventListener('change', function () {
    if (!reduceMotion.matches) {
      start();
    } else {
      stop();
      ctx.clearRect(0, 0, w, h);
    }
  });
})();

/* ---------- Constellation background (dark mode only) ---------- */
(function () {
  var canvas = document.getElementById('constellation');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  var GLOW_RADIUS = 250;
  var LINK_DIST = 155;
  var PURPLE = '168,85,247';

  var stars = [];
  var pairs = [];
  var frameCount = 0;
  var glowT = [];
  var mouse = { x: -9999, y: -9999 };
  var moveOn = false;
  var rafId = 0;
  var w = 0;
  var h = 0;
  var accent = '255,87,34';
  var glowAccent = '255,129,89';
  var accentSprite;
  var purpleSprite;

  function readAccent() {
    var value = '255,87,34';
    try {
      var accentVal = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      var hex = /^#([0-9a-f]{6})$/i.exec(accentVal);
      if (hex) {
        var n = parseInt(hex[1], 16);
        value = ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
      } else {
        var rgb = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(accentVal);
        if (rgb) value = rgb[1] + ',' + rgb[2] + ',' + rgb[3];
      }
    } catch (e) {}
    return value;
  }

  function makeGlowSprite(rgb) {
    var size = 128;
    var sprite = document.createElement('canvas');
    sprite.width = size;
    sprite.height = size;
    var spriteCtx = sprite.getContext('2d');
    if (!spriteCtx) return sprite;
    var mid = size / 2;
    var gradient = spriteCtx.createRadialGradient(mid, mid, 0, mid, mid, mid);
    gradient.addColorStop(0, 'rgba(' + rgb + ',0.95)');
    gradient.addColorStop(0.18, 'rgba(' + rgb + ',0.62)');
    gradient.addColorStop(0.45, 'rgba(' + rgb + ',0.22)');
    gradient.addColorStop(0.75, 'rgba(' + rgb + ',0.06)');
    gradient.addColorStop(1, 'rgba(' + rgb + ',0)');
    spriteCtx.fillStyle = gradient;
    spriteCtx.fillRect(0, 0, size, size);
    return sprite;
  }

  var glowPurple = PURPLE.split(',');
  for (var pi = 0; pi < 3; pi++) {
    glowPurple[pi] = Math.min(255, Math.round(Number(glowPurple[pi]) + (255 - Number(glowPurple[pi])) * 0.25));
  }
  glowPurple = glowPurple.join(',');
  purpleSprite = makeGlowSprite(glowPurple);

  // Re-read the theme accent so dark-mode toggles keep the orange/purple mix.
  function refreshPalette() {
    var nextAccent = readAccent();
    if (nextAccent === accent && accentSprite) return;
    accent = nextAccent;
    var glowParts = accent.split(',');
    for (var gi = 0; gi < 3; gi++) {
      glowParts[gi] = Math.min(255, Math.round(Number(glowParts[gi]) + (255 - Number(glowParts[gi])) * 0.25));
    }
    glowAccent = glowParts.join(',');
    accentSprite = makeGlowSprite(glowAccent);
  }

  function isDark() {
    var el = document.documentElement;
    return el.getAttribute('data-theme') === 'dark' || el.classList.contains('dark-theme');
  }

  function staticMode() {
    return !finePointer.matches;
  }

  function generate() {
    var count = Math.round((w * h) / 16000);
    if (count < 40) count = 40;
    if (count > 110) count = 110;

    stars = [];
    for (var i = 0; i < count; i++) {
      var isAccent = Math.random() < 0.6;
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1.1 + Math.random() * 1.7,
        base: 0.72 + Math.random() * 0.2,
        isAccent: isAccent
      });
    }

    pairs = [];
    for (var a = 0; a < stars.length; a++) {
      for (var b = a + 1; b < stars.length; b++) {
        var dx = stars[a].x - stars[b].x;
        var dy = stars[a].y - stars[b].y;
        if (dx * dx + dy * dy <= LINK_DIST * LINK_DIST) pairs.push(a, b);
      }
    }
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generate();
  }

  function starGlow(sx, sy) {
    var dx = sx - mouse.x;
    var dy = sy - mouse.y;
    var d2 = dx * dx + dy * dy;
    if (d2 >= GLOW_RADIUS * GLOW_RADIUS) return 0;
    var t = 1 - Math.sqrt(d2) / GLOW_RADIUS;
    return t * t * (3 - 2 * t);
  }

  function drawField(offY) {
    var i;
    for (i = 0; i < stars.length; i++) glowT[i] = starGlow(stars[i].x, stars[i].y + offY);

    ctx.lineWidth = 1;
    for (i = 0; i < pairs.length; i += 2) {
      var t = glowT[pairs[i]] > glowT[pairs[i + 1]] ? glowT[pairs[i]] : glowT[pairs[i + 1]];
      ctx.strokeStyle = 'rgba(' + PURPLE + ',' + (0.30 + t * 0.45).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(stars[pairs[i]].x, stars[pairs[i]].y + offY);
      ctx.lineTo(stars[pairs[i + 1]].x, stars[pairs[i + 1]].y + offY);
      ctx.stroke();
    }

    ctx.globalCompositeOperation = 'lighter';
    for (i = 0; i < stars.length; i++) {
      var s = stars[i];
      var sy = s.y + offY;
      var g = glowT[i];
      var haloR = s.r * 5 + g * 12;
      var sprite = s.isAccent ? accentSprite : purpleSprite;
      ctx.globalAlpha = 0.55 + g * 0.45;
      ctx.drawImage(sprite, s.x - haloR, sy - haloR, haloR * 2, haloR * 2);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    for (i = 0; i < stars.length; i++) {
      var core = stars[i];
      var coreY = core.y + offY;
      var coreGlow = glowT[i];
      var coreR = core.r + coreGlow * 0.5;
      var coreColor = core.isAccent ? accent : PURPLE;
      ctx.fillStyle = 'rgba(' + coreColor + ',' + (core.base + coreGlow * (1 - core.base)).toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(core.x, coreY, coreR, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,' + (0.55 + coreGlow * 0.45).toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(core.x, coreY, coreR * 0.38, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(8, 2, 15, 0.5)';
    ctx.fillRect(0, 0, w, h);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.x += 0.05;
      s.y += 0.02;
      if (s.x > w) s.x = 0;
      if (s.x < 0) s.x = w;
      if (s.y > h) s.y = 0;
      if (s.y < 0) s.y = h;
    }
    if (frameCount % 30 === 0) {
      var dynamicLinkDist = LINK_DIST + Math.sin(Date.now() * 0.001) * 30;
      pairs = [];
      for (var a = 0; a < stars.length; a++) {
        for (var b = a + 1; b < stars.length; b++) {
          var dx = stars[a].x - stars[b].x;
          var dy = stars[a].y - stars[b].y;
          if (dx * dx + dy * dy <= dynamicLinkDist * dynamicLinkDist) pairs.push(a, b);
        }
      }
    }
    frameCount++;
    var offY = staticMode() ? 0 : -(window.scrollY * 0.5) % h;
    drawField(offY);
    if (offY !== 0) drawField(offY + h);
  }

  function loop() {
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function stopLoop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  function drawOnce(next) {
    stopLoop();
    rafId = requestAnimationFrame(function () {
      draw();
      rafId = 0;
      if (next) next();
    });
  }

  function startLoop() {
    if (rafId || document.hidden) return;
    rafId = requestAnimationFrame(loop);
  }

  function onMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function setTrack(on) {
    if (on === moveOn) return;
    moveOn = on;
    if (on) {
      window.addEventListener('mousemove', onMove, { passive: true });
    } else {
      window.removeEventListener('mousemove', onMove);
      mouse.x = -9999;
      mouse.y = -9999;
    }
  }

  function sync() {
    var dark = isDark();
    setTrack(dark && !staticMode());
    stopLoop();
    if (!dark) {
      ctx.clearRect(0, 0, w, h);
      return;
    }
    refreshPalette();
    drawOnce(function () {
      if (isDark() && !staticMode()) startLoop();
    });
  }

  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      sync();
    }, 150);
  }, { passive: true });

  window.addEventListener('visibilitychange', function () {
    if (document.hidden) stopLoop();
    else sync();
  });

  if (window.MutationObserver) {
    new MutationObserver(sync).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });
  }

  function onMediaChange() { sync(); }
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', onMediaChange);
    finePointer.addEventListener('change', onMediaChange);
  } else if (reduceMotion.addListener) {
    reduceMotion.addListener(onMediaChange);
    finePointer.addListener(onMediaChange);
  }

  resize();
  sync();
})();

/* ---------- Wet Drops overlay ---------- */
(function () {
  var canvas = document.getElementById('wet-drops');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var rafId = 0;
  var running = false;
  var w = 0, h = 0, dpr = 1;
  var drops = [];
  var MAX_DROPS = 30;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function randomDrop() {
    return {
      x: Math.random() * w,
      y: -50,
      vy: 0.5 + Math.random() * 1.5,
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.2,
      trail: 20 + Math.random() * 40,
      accel: 0.02 + Math.random() * 0.05
    };
  }

  function initDrops() {
    drops = [];
    var count = Math.floor((w * h) / 200000);
    if (count < 5) count = 5;
    if (count > MAX_DROPS) count = MAX_DROPS;
    for (var i = 0; i < count; i++) {
      var d = randomDrop();
      d.y = Math.random() * h;
      drops.push(d);
    }
  }

  function drawDrop(d) {
    ctx.save();
    ctx.globalAlpha = d.opacity;
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    var tx = d.x;
    var ty = d.y + d.trail;
    var tg = ctx.createLinearGradient(d.x, d.y, tx, ty);
    tg.addColorStop(0, 'rgba(255,255,255,0)');
    tg.addColorStop(1, 'rgba(255,255,255,' + (d.opacity * 0.3) + ')');
    ctx.strokeStyle = tg;
    ctx.lineWidth = d.size * 0.5;
    ctx.beginPath();
    ctx.moveTo(d.x, d.y + d.size);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.restore();
  }

  function update() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < drops.length; i++) {
      var d = drops[i];
      d.y += d.vy;
      d.vy += d.accel;
      if (d.y > h + 50) {
        d.opacity -= 0.01;
        if (d.opacity <= 0) {
          drops[i] = randomDrop();
          drops[i].y = -50;
        }
      } else {
        drawDrop(d);
      }
    }
  }

  function loop() {
    update();
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    loop();
  }
  function stop() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  window.addEventListener('resize', function () {
    resize();
    initDrops();
  }, { passive: true });

  resize();
  initDrops();

  if (!reduced.matches) {
    start();
  }
  reduced.addEventListener('change', function () {
    if (!reduced.matches) {
      start();
    } else {
      stop();
      ctx.clearRect(0, 0, w, h);
    }
  });
})();

/* ---------- Meteor showers ---------- */
(function () {
  var canvas = document.getElementById('meteors');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var rafId = 0;
  var running = false;
  var w = 0, h = 0, dpr = 1;
  var meteors = [];
  var SPAWN_MS = 5000;
  var lastSpawn = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnMeteor() {
    var x = Math.random() * w;
    var y = Math.random() * (h * 0.3);
    var length = 40 + Math.random() * 80;
    var speed = 2.5 + Math.random() * 4;
    var angle = 0.7 + Math.random() * 0.4;
    var life = 1;
    var fade = 0.02 + Math.random() * 0.04;

    meteors.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: 150,
      life: life,
      fade: fade,
      width: 1 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.3
    });
  }

  function spawnBurst() {
    for (var i = 0; i < 3; i++) {
      spawnMeteor();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var now = Date.now();
    if (now - lastSpawn >= SPAWN_MS) {
      spawnBurst();
      lastSpawn = now;
    }

    for (var i = meteors.length - 1; i >= 0; i--) {
      var m = meteors[i];
      m.x += m.vx;
      m.y += m.vy;
      m.life -= m.fade;

      if (m.life <= 0 || m.x < 0 || m.x > w || m.y < 0 || m.y > h) {
        meteors.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = m.opacity * m.life;

      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00ffff';
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.width * 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      var tailX = m.x - m.vx * m.length;
      var tailY = m.y - m.vy * m.length;
      var gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = m.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      ctx.restore();
    }
  }

  function loop() {
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    lastSpawn = Date.now();
    loop();
  }
  function stop() {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  window.addEventListener('resize', function () {
    resize();
  }, { passive: true });

  resize();
  if (!reduced.matches) {
    start();
  }
  reduced.addEventListener('change', function () {
    if (!reduced.matches) {
      start();
    } else {
      stop();
      ctx.clearRect(0, 0, w, h);
    }
  });
})();
