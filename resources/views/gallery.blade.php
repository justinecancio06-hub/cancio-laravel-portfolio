<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Selected work by Justine Cancio — drawings, graphics design, commissions, photography, and certificates." />
  <title>Gallery — Justine Cancio</title>
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
      <div class="footer-content">
        <div>&copy; 2026 Justine Cancio. All Rights Reserved.</div>
        <a class="footer__link" href="/projects">All Projects</a>
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Available for commissions</span>
        </div>
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

  <script src="js/main.js"></script>
</body>
</html>
