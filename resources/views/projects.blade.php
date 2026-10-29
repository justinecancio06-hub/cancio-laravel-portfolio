<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="All projects by Justine Cancio — Capstone RPG, RSVP website, Bangued-Ka-Fuel, and Artflow." />
  <title>All Projects — Justine Cancio</title>
  <link rel="icon" type="image/png" href="images/profile/JC_logo.png?v=2" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
  <script>
    (function () {
      var theme = localStorage.getItem('theme');
      if (theme !== 'light' && theme !== 'dark') {
        theme = 'dark';
      }
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.classList.toggle('dark-theme', theme === 'dark');
      document.documentElement.classList.toggle('light-theme', theme === 'light');
    })();
  </script>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <div class="bg-gradient" aria-hidden="true"></div>
  <canvas id="constellation" aria-hidden="true"></canvas>

  <a class="skip-link" href="#main">Skip to content</a>

  <header class="nav" id="nav">
    <nav class="nav__inner" aria-label="Primary">
      <a class="nav__brand" href="/#top"><img src="images/profile/JC_logo.png" alt="Justine Cancio Logo" class="nav__logo"></a>
      <ul class="nav__list" id="navList">
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a class="nav__cta" href="/#contact">Hire Me</a></li>
      </ul>
      <div class="nav__controls">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" aria-pressed="false">
          <span class="theme-toggle__track">
            <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
            <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <span class="theme-toggle__knob"></span>
          </span>
        </button>
        <button class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="navList" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <main id="main" class="projects-page">
    <div class="container">
      <div class="section__head section__head--center projects__head">
        <span class="section__tag">Portfolio</span>
        <h1 class="section__title">All Projects</h1>
        <p class="projects__lead">A closer look at the games, websites, and apps I've been building.</p>
      </div>

      <div class="exp-grid" id="tools">
        <article class="exp-card">
          <div class="exp-card__media">
            <img src="images/screenshots/abraquest.png" data-lightbox="images/screenshots/abraquest.png" alt="Screenshot of the 2D RPG capstone game project" loading="eager" tabindex="0" role="button" />
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">2025 — Present</span>
            <span class="exp-card__badge">Under Development</span>
            <h3 class="exp-card__title">Capstone Project — System Designer</h3>
            <p class="exp-card__subtitle">2D RPG System Game</p>
            <p>
              Designing the core gameplay systems of a 2D RPG — combat, progression,
              quest structure, and player economy. Turning scattered mechanics into a
              coherent system that keeps the game balanced and fun.
            </p>
            <ul class="exp-card__tags">
              <li>Game Design</li>
              <li>System &amp; Balance</li>
              <li>2D RPG</li>
            </ul>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media">
            <a href="https://jefrey-kristine-wedding-rsvp.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="images/screenshots/rsvp.png" alt="Jefrey &amp; Kristine Wedding RSVP website preview" loading="lazy" decoding="async" />
            </a>
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Client Commission</span>
            <span class="exp-card__badge">Under Development</span>
            <h3 class="exp-card__title">Jefrey &amp; Kristine &mdash; Wedding RSVP</h3>
            <p class="exp-card__subtitle">Custom Invitation &amp; RSVP Website</p>
            <p>
              Built a wedding invitation and RSVP site from scratch for a real client couple,
              covering the visual design and the front-end build so their guests can RSVP in
              a few taps on any device.
            </p>
            <ul class="exp-card__tags">
              <li>Web Design</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media">
            <a href="https://bangued-ka-fuel.infinityfree.me/" target="_blank" rel="noopener noreferrer">
              <img src="images/screenshots/gasAbra.png" alt="Bangued-Ka-Fuel gas station map preview" loading="lazy" decoding="async" />
            </a>
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Personal Project</span>
            <span class="exp-card__badge">Under Development</span>
            <h3 class="exp-card__title">Bangued-Ka-Fuel</h3>
            <p class="exp-card__subtitle">Gas Station Map Finder</p>
            <p>
              An interactive map that locates gas stations within Bangued, Abra. Built to help
              locals and travelers find fuel stations by brand &mdash; Shell, Caltex, Petron,
              Phoenix, and more &mdash; with a filterable legend and OpenStreetMap layers.
            </p>
            <ul class="exp-card__tags">
              <li>Web App</li>
              <li>Maps</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media exp-card__media--portrait">
            <img src="images/screenshots/Flutter.jpe" data-lightbox="images/screenshots/Flutter.jpe" alt="Artflow task scheduling mobile app screenshot" loading="lazy" decoding="async" tabindex="0" role="button" />
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Personal Project</span>
            <h3 class="exp-card__title">Artflow</h3>
            <p class="exp-card__subtitle">Task Scheduling Mobile App</p>
            <p>
              A cross-platform mobile application built with Flutter designed to help users
              organize their daily tasks and schedule their time efficiently.
            </p>
            <ul class="exp-card__tags">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Mobile App</li>
              <li>Task Management</li>
            </ul>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media">
            <a href="playground/sketchpad.html">
              <img src="images/screenshots/sketchpad.svg" alt="Sketch Pad drawing tool preview" loading="lazy" decoding="async" />
            </a>
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Web Tool</span>
            <h3 class="exp-card__title">Sketch Pad</h3>
            <p class="exp-card__subtitle">Interactive Canvas App</p>
            <p>
              A custom drawing tool built with vanilla JavaScript and Canvas API. Features pen,
              eraser, bucket, opacity, Pickr color integration, undo, and a 3-min challenge mode.
            </p>
            <ul class="exp-card__tags">
              <li>Canvas API</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media">
            <a href="playground/pixelart.html">
              <img src="images/screenshots/pixelart.svg" alt="Pixel Art Editor preview" loading="lazy" decoding="async" />
            </a>
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Web Tool</span>
            <h3 class="exp-card__title">Pixel Art Editor</h3>
            <p class="exp-card__subtitle">16x16 Grid Painter</p>
            <p>
              A lightweight pixel art editor built from scratch. Features pencil, eraser, fill,
              custom color picker, and PNG export.
            </p>
            <ul class="exp-card__tags">
              <li>JavaScript</li>
              <li>Canvas API</li>
              <li>CSS Grid</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </main>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" hidden>
    <button class="lightbox__close" id="lightboxClose" aria-label="Close">&#10005;</button>
    <div class="lightbox__view" id="lightboxView">
      <img class="lightbox__img" id="lightboxImg" src="" alt="" />
      <p class="lightbox__caption" id="lightboxCaption"></p>
      <aside class="lightbox__details" id="lightboxDetails" aria-label="Certificate details">
        <h3 class="lightbox__details-heading">Certificate Details</h3>
        <div class="lightbox__details-row" id="lightboxOrgRow" hidden>
          <span class="lightbox__details-label">Organization</span>
          <p class="lightbox__details-value" id="lightboxOrg"></p>
        </div>
        <div class="lightbox__details-row" id="lightboxTitleRow" hidden>
          <span class="lightbox__details-label">Title</span>
          <p class="lightbox__details-value" id="lightboxTitle"></p>
        </div>
        <div class="lightbox__details-row" id="lightboxYearRow" hidden>
          <span class="lightbox__details-label">Year</span>
          <p class="lightbox__details-value" id="lightboxYear"></p>
        </div>
        <div class="lightbox__details-row" id="lightboxDescRow" hidden>
          <span class="lightbox__details-label">Description</span>
          <p class="lightbox__details-value" id="lightboxDesc"></p>
        </div>
      </aside>
    </div>
    <button class="lightbox__prev" id="lightboxPrev" aria-label="Previous image">&#8249;</button>
    <button class="lightbox__next" id="lightboxNext" aria-label="Next image">&#8250;</button>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
