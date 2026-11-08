<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Selected work by Justine Cancio — drawings, graphics design, commissions, photography, and certificates." />
  <title>Gallery — Justine Cancio</title>
  <link rel="icon" type="image/png" href="images/profile/Favicon.png?v=20261111" />
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
  <link rel="stylesheet" href="css/style.css?v=20261128" />
</head>
<body>
  <canvas id="galaxy-bg" aria-hidden="true"></canvas>
<canvas id="stardust" aria-hidden="true"></canvas>
<canvas id="constellation" aria-hidden="true"></canvas>
<canvas id="wet-drops" aria-hidden="true"></canvas>
<canvas id="meteors" aria-hidden="true"></canvas>

  <a class="skip-link" href="#main">Skip to content</a>

  <header class="nav" id="nav">
    <nav class="nav__inner" aria-label="Primary">
      <a class="nav__brand" href="/#top"><img src="images/profile/Favicon.png" alt="Justine Cancio Logo" class="nav__logo"></a>
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

  <main id="main">
    <section class="section gallery gallery-page" id="gallery">
      <div class="container">
        <a class="btn btn--ghost back-home-btn" href="{{ url('/') }}">&larr; Back</a>
        <div class="section__head section__head--center">
          <span class="section__tag">Portfolio</span>
          <h1 class="section__title">Selected Work</h1>
        </div>

        <div class="gallery__tabs" role="tablist" aria-label="Work categories">
          <button class="gallery__tab is-active" role="tab" aria-selected="true" data-folder="drawings">Drawings</button>
          <button class="gallery__tab" role="tab" aria-selected="false" data-folder="graphicsdesign">Graphics Design</button>
          <button class="gallery__tab" role="tab" aria-selected="false" data-folder="commisions">Commisions</button>
          <button class="gallery__tab" role="tab" aria-selected="false" data-folder="photography">Photography</button>
          <button class="gallery__tab" role="tab" aria-selected="false" data-folder="certificate">Certificates</button>
        </div>

        <p class="gallery__hint" id="galleryHint"></p>
        <div class="gallery__grid" id="galleryGrid"></div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__columns">
        <div class="footer__column footer__column--logo">
          <a class="nav__brand" href="#top"><img src="images/profile/Favicon.png" alt="Justine Cancio Logo" class="nav__logo"></a>
          <p class="footer__tagline">Building modern web experiences with code precision, sharp typography, and interactive 3D dimensions.</p>
        </div>
        <div class="footer__column footer__column--nav">
          <p class="footer__column-title">Navigation</p>
          <nav class="footer__nav">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="/gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div class="footer__column footer__column--social">
          <p class="footer__column-title">Connected</p>
          <div class="footer__social">
            <a class="footer__social-link" href="https://github.com/justinecancio06-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg class="footer__social-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" role="img" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a class="footer__social-link" href="https://www.facebook.com/Justine.James.Cancio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg class="footer__social-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" role="img" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a class="footer__social-link" href="https://www.tiktok.com/@jcancio170?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg class="footer__social-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" role="img" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a class="footer__social-link" href="mailto:justinecancio06@gmail.com" aria-label="Email">
              <svg class="footer__social-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" role="img" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a class="footer__social-link" href="tel:09460054497" aria-label="Phone">
              <svg class="footer__social-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" role="img" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__bottom">
        <span class="footer__copyright">© 2026 Justine Cancio. All rights reserved.</span>
        <a class="btn btn--ghost" href="#top" aria-label="Back to top">Back to Top ↑</a>
      </div>
    </div>
  </footer>

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

  <script src="js/main.js?v=20261114"></script>
  <script src="js/background.js"></script>
</body>
</html>
