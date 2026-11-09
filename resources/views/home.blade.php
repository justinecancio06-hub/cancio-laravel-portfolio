<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Justine Cancio — Multi-Media Artist. Drawings, graphics design, photography, and game systems design." />
  <title>Justine Cancio — Multi-Media Artist</title>
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
  <link rel="stylesheet" href="css/style.css?v=20261130" />
</head>
<body>
  <div id="preloader">
    <div class="preloader__content">
      <div class="preloader__counter-wrap">
        <span class="preloader__number" id="preloaderNumber">0</span>
        <span class="preloader__percent">%</span>
      </div>
      <div class="preloader__bar-bg">
        <div class="preloader__bar-fill" id="preloaderBar"></div>
      </div>
      <div class="preloader__text" id="preloaderText">Loading assets...</div>
    </div>
  </div>
  <canvas id="galaxy-bg" aria-hidden="true"></canvas>
<canvas id="stardust" aria-hidden="true"></canvas>
<canvas id="constellation" aria-hidden="true"></canvas>
<canvas id="wet-drops" aria-hidden="true"></canvas>
<canvas id="meteors" aria-hidden="true"></canvas>

  <a class="skip-link" href="#main">Skip to content</a>

  <header class="nav" id="nav">
    <nav class="nav__inner" aria-label="Primary">
      <a class="nav__brand" href="#top"><img src="images/profile/Favicon.png" alt="Justine Cancio Logo" class="nav__logo"></a>
      <ul class="nav__list" id="navList">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a class="nav__cta" href="#contact">Hire Me</a></li>
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
    <!-- HERO -->
    <section class="hero" id="top">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="hero__inner container">
        <div class="hero__text">
          <p class="hero__eyebrow">Hello, I&rsquo;m</p>
          <h1 class="hero__name">Justine Cancio</h1>
          <p class="hero__role">Multi-Media Artist</p>
          <p class="hero__bio">
            Never sleeps. Brain runs on Adobe and anxiety. I design games, draw worlds,
            and make pixels feel something.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="/gallery">View My Work</a>
            <a class="btn btn--ghost" href="#contact">Get in Touch</a>
          </div>
          <ul class="hero__contacts">
            <li><a href="tel:09460054497">&#9742; 0946 005 4497</a></li>
            <li><a href="mailto:justinecancio06@gmail.com">&#9993; justinecancio06@gmail.com</a></li>
          </ul>
        </div>
        <div class="hero__photo">
          <div class="hero__photo-frame">
            <img src="images/profile/Hero.gif" alt="Portrait of Justine Cancio" width="480" height="480" />
          </div>
        </div>
      </div>
      <a class="hero__scroll" href="#about" aria-label="Scroll to about">
        <span></span>
      </a>
    </section>

    <!-- ABOUT -->
    <section class="section about" id="about">
      <div class="container about__grid">
        <div class="about__intro">
          <span class="section__tag">About</span>
          <h2 class="about__heading">Hi, I&rsquo;m<br /><span class="about__name">Justine Cancio.</span></h2>
          <p class="about__tagline">The artist behind the anxiety.</p>
        </div>

        <div class="about__media">
          <div class="about-reveal">
            <div class="about-reveal__inner" id="aboutReveal">
              <img src="images/spiderman/me-normal.png" alt="Justine Cancio" class="about-reveal__img" />
              <img src="images/spiderman/me-spiderman.png" alt="Justine Cancio Spiderman" class="about-reveal__img about-reveal__img--reveal" />
            </div>
          </div>
        </div>

        <div class="about__body">
          <p>
            Hello! I&rsquo;m a <strong>Multi-Media Artist</strong> — which basically means
            I never sleep and my brain runs on Adobe and anxiety. I work across drawing,
            graphics design, and photography, blending traditional illustration instincts
            with a digital-first workflow.
          </p>
          <p>
            Beyond static media, I design game systems. My current capstone project is a
            complete 2D RPG where I handle the system design that keeps every character,
            quest, and battle loop ticking.
          </p>
          <ul class="about__skills">
            <li>Drawing</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Graphic Design</li>
            <li>Video Editing</li>
          </ul>
          <div class="about__actions">
            <a class="btn btn--primary" href="/gallery">View My Work</a>
            <a class="btn btn--ghost" href="CV/Cancio_Resume.pdf" download>Download CV</a>
          </div>
        </div>

        <!-- Stats -->
        <ul class="stats">
          <li class="stats__card">
            <span class="stats__number">10+</span>
            <span class="stats__label">Projects Completed</span>
          </li>
          <li class="stats__card">
            <span class="stats__number">2+</span>
            <span class="stats__label">Year Experience</span>
          </li>
          <li class="stats__card">
            <span class="stats__number">100%</span>
            <span class="stats__label">Client Satisfaction</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section skills" id="skills">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="section__tag">Technical Skills</span>
          <h2 class="section__title">What I bring to the canvas.</h2>
        </div>
        <ul class="skills__grid">
          <li class="skill-card">
            <svg class="skill-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            <h3 class="skill-card__title">Drawing</h3>
            <p class="skill-card__desc">Character art, portraits and illustrations in traditional and digital media.</p>
            <ul class="skill-card__tools">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path></svg>IbisPaint</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>Clip Studio</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>Infinite Painter</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>Traditional Method</li>
            </ul>
          </li>
          <li class="skill-card">
            <svg class="skill-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <h3 class="skill-card__title">Photography</h3>
            <p class="skill-card__desc">Landscapes, portraits and moments captured with an eye for light and composition.</p>
            <ul class="skill-card__tools">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>Sony A6400 Camera</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>Canon EOS Rebel SL1</li>
            </ul>
          </li>
          <li class="skill-card">
            <svg class="skill-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            <h3 class="skill-card__title">Videography</h3>
            <p class="skill-card__desc">As a multi-media artist, capturing movement is part of the craft.</p>
            <ul class="skill-card__tools">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>Sony A6400 Camera</li>
            </ul>
          </li>
          <li class="skill-card">
            <svg class="skill-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <h3 class="skill-card__title">Graphic Design</h3>
            <p class="skill-card__desc">Posters, magazines and brand pieces laid out in the Adobe suite.</p>
            <ul class="skill-card__tools">
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Ps</text></svg>Photoshop</li>
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Ai</text></svg>Illustrator</li>
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Lr</text></svg>Lightroom</li>
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Aa</text></svg>PixelLab</li>
            </ul>
          </li>
          <li class="skill-card">
            <svg class="skill-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
            <h3 class="skill-card__title">Video Editing</h3>
            <p class="skill-card__desc">Cutting, color and motion that turn raw footage into a finished story.</p>
            <ul class="skill-card__tools">
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Ae</text></svg>After Effects</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8a8 8 0 0 0 8 8 6 6 0 0 0 6-6 4 4 0 0 0-4-4 2 2 0 0 0-2 2"></path></svg>DaVinci Resolve</li>
              <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" text-anchor="middle" font-size="9" font-weight="700" font-family="Sora, sans-serif">Pr</text></svg>Adobe Premiere</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>Alight Motion</li>
            </ul>
          </li>
        </ul>

        <div class="programming-panel">
          <div class="programming-panel__head">
            <svg class="programming-panel__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <div>
              <h3 class="programming-panel__title">Programming</h3>
              <p class="programming-panel__sub">The code side of my multi-media brain.</p>
            </div>
          </div>
          <ul class="programming-panel__tags">
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
            <li>Laravel</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section experience" id="experience">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="section__tag">Experience</span>
        </div>

        <h2 class="section__title experience__title">Where I&rsquo;ve been spending my brain cells.</h2>

        <!-- Work Experience -->
        <div class="work">
          <h3 class="work__title">
            <svg class="work__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            Work Experience
          </h3>

          <div class="work__list">
            <article class="work__card">
              <div class="work__head">
                <div>
                  <h4 class="work__role">Freelance Multi-Media Artist</h4>
                  <p class="work__company">Self-Employed</p>
                </div>
                <span class="work__badge">2024 - Present</span>
              </div>
              <p class="work__desc">
                Delivering custom illustrations, graphic design (mockups, posters, IDs),
                photography, and modern web applications for various clients.
              </p>
            </article>

            <article class="work__card">
              <div class="work__head">
                <div>
                  <h4 class="work__role">Aspiring Web Developer &amp; Designer</h4>
                  <p class="work__company">Local / Academic Projects</p>
                </div>
                <span class="work__badge">Present</span>
              </div>
              <p class="work__desc">
                Designing and building responsive websites, interactive galleries,
                interactive tools, and mobile apps (like Artflow) using modern
                frameworks like HTML, CSS, JavaScript, and Flutter.
              </p>
            </article>
          </div>
        </div>

        <div class="exp-grid">
        <article class="exp-card">
          <div class="exp-card__media">
            <img src="images/screenshots/abraquest/abraquest1.png" data-lightbox="images/screenshots/abraquest/abraquest1.png" alt="Screenshot of the 2D RPG capstone game project" loading="eager" tabindex="0" role="button" />
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
            <div class="exp-card__actions">
              <a class="btn btn--ghost exp-card__cta" href="{{ url('projects') }}#abraquest">Details &amp; Screenshots →</a>
            </div>
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
            <div class="exp-card__actions">
              <a class="btn btn--ghost exp-card__cta" href="{{ url('projects') }}#wedding-rsvp">Details &amp; Screenshots →</a>
            </div>
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
            <div class="exp-card__actions">
              <a class="btn btn--ghost exp-card__cta" href="{{ url('projects') }}#bangued-ka-fuel">Details &amp; Screenshots →</a>
            </div>
          </div>
        </article>

        <article class="exp-card">
          <div class="exp-card__media">
            <img src="images/screenshots/JLC Duper/jlcThumbnail.svg" alt="JLC Duper Minecraft mod preview" loading="lazy" decoding="async" />
          </div>
          <div class="exp-card__body">
            <span class="exp-card__badge">Personal Project</span>
            <span class="exp-card__badge">In Development</span>
            <h3 class="exp-card__title">JLC Duper</h3>
            <p class="exp-card__subtitle">Fabric Mod for Minecraft 26.2</p>
            <p>
              A custom Minecraft Fabric mod that adds a late-game duplication machine powered by the Ender Dragon's Heart, with a custom GUI and advancement.
            </p>
            <ul class="exp-card__tags">
              <li>Java</li>
              <li>Fabric</li>
              <li>Minecraft</li>
              <li>Game Dev</li>
            </ul>
            <div class="exp-card__actions">
              <a class="btn btn--ghost exp-card__cta" href="{{ url('projects') }}#jlc-duper">Details &amp; Screenshots →</a>
              <a class="btn btn--ghost exp-card__cta" href="https://github.com/justinecancio06-hub/jlc-duper-mod" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
          </div>
        </article>

        </div>

        <div class="exp-actions">
          <a class="btn btn--ghost" href="/projects">View All Projects &rarr;</a>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="section education" id="education">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="section__tag">Education</span>
          <h2 class="section__title">The classrooms behind the pixels.</h2>
        </div>

        <!-- Formal Education -->
        <div class="edu-block">
          <h3 class="edu-subtitle">
            <svg class="edu-subtitle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
            Formal Education
          </h3>

          <div class="edu-cards">
            <div class="edu-card">
              <span class="edu-card__badge">Secondary</span>
              <h4 class="edu-card__school">Manabo National High School</h4>
              <p class="edu-card__date">2021 — 2023</p>
              <div class="edu-card__project">
                <strong>Strand: HUMSS</strong>
                <span>Humanities and Social Sciences</span>
              </div>
            </div>

            <div class="edu-card">
              <span class="edu-card__badge">Tertiary</span>
              <h4 class="edu-card__school">Data Center College of the Philippines — Bangued</h4>
              <p class="edu-card__date">2023 — Present</p>
              <div class="edu-card__project">
                <strong>Program: BSIT</strong>
                <span>Bachelor of Science in Information Technology</span>
              </div>
              <div class="edu-card__project">
                <strong>Featured Capstone: System Designer</strong>
                <span>Designing a 2D RPG System Game</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="edu-block">
          <h3 class="edu-subtitle">
            <svg class="edu-subtitle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
            Certifications
          </h3>

          <div class="cert-list">
            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/nML_T.png" data-file="nML_T.png" alt="Mobile Legends Competition 2nd Runner Up certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">Data Center College of the Philippines — Bangued</span>
                <h4 class="cert-card__title">2nd Runner Up — Mobile Legends Competition</h4>
                <span class="cert-card__year">2025</span>
                <p class="cert-card__desc">
                  Awarded 2nd runner up in the Mobile Legends competition during ITCS Day 2025,
                  themed “Tech in Action: Students Driving Tomorrow's Innovations,”
                  showcasing teamwork and strategic play in mobile esports.
                </p>
              </div>
            </article>

            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/nFilm.png" data-file="nFilm.png" alt="Film Making Competition 1st Runner Up certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">Data Center College of the Philippines — Bangued</span>
                <h4 class="cert-card__title">1st Runner Up — Film Making Competition</h4>
                <span class="cert-card__year">2025</span>
                <p class="cert-card__desc">
                  Awarded 1st runner up in the Film Making competition during ITCS Day 2025,
                  themed “Tech in Action: Students Driving Tomorrow's Innovations,”
                  showcasing skills in video production, direction, and visual storytelling.
                </p>
              </div>
            </article>

            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/DOST.png" data-file="DOST.png" alt="Startup Now Cordillera certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">DOST — Cordillera Administrative Region (iHub)</span>
                <h4 class="cert-card__title">Startup Now Cordillera: Exploring Programs, Funding, and Opportunities for Aspiring Startups</h4>
                <span class="cert-card__year">2026</span>
                <p class="cert-card__desc">
                  Participated in a regional startup webinar hosted by DOST-CAR and iHub, gaining
                  insights into government funding, support programs, and growth opportunities
                  for tech ventures.
                </p>
              </div>
            </article>

            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/NCII.jpg" data-file="NCII.jpg" alt="TESDA Computer Systems Servicing NC II certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">TESDA</span>
                <h4 class="cert-card__title">Computer Systems Servicing NC II</h4>
                <span class="cert-card__year">2025</span>
                <p class="cert-card__desc">
                  Earned national certification in computer systems servicing, demonstrating core
                  competencies in assembling hardware, configuring computer networks, setting up
                  servers, and maintaining systems.
                </p>
              </div>
            </article>

            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/BALAGTASAN.jpg" data-file="BALAGTASAN.jpg" alt="Balagtasan Competition 3rd Place certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">Data Center College of the Philippines — Bangued</span>
                <h4 class="cert-card__title">3rd Place — Balagtasan Competition (Buwan ng Wika 2025)</h4>
                <span class="cert-card__year">2025</span>
                <p class="cert-card__desc">
                  Awarded 3rd place in a traditional Filipino poetic debate (Balagtasan)
                  during the National Language Month celebration, demonstrating excellence
                  in public speaking, creative expression, and Filipino literary arts.
                </p>
              </div>
            </article>

            <article class="cert-card">
              <img class="cert-card__img" src="images/certificate/DICT.png" data-file="DICT.png" alt="DICT Philippine Startup Challenge XI certificate" loading="lazy" />
              <div class="cert-card__body">
                <span class="cert-card__org">DICT</span>
                <h4 class="cert-card__title">Understanding Startups &amp; Getting Your Idea Ready for the Philippine Startup Challenge XI</h4>
                <span class="cert-card__year">2026</span>
                <p class="cert-card__desc">
                  Participated in a regional webinar series hosted by the Department of Information
                  and Communications Technology (DICT), focusing on refining startup concepts, market
                  readiness, and preparing innovative ideas for competition.
                </p>
              </div>
            </article>
          </div>

          <h4 class="edu-subtitle edu-subtitle--spaced">
            <svg class="edu-subtitle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
            Additional Certificates — Online Art Collaborations
          </h4>
          <div class="cert-extra">
            <article class="cert-extra__card">
              <img class="cert-extra__img" src="images/certificate/JJK CERT.jpg" data-file="JJK CERT.jpg" alt="Jujutsu Kaisen art collaboration certificate" loading="lazy" />
              <h5>Jujutsu Kaisen Art Collaboration</h5>
              <span class="cert-card__year">July 31, 2026</span>
            </article>
            <article class="cert-extra__card">
              <img class="cert-extra__img" src="images/certificate/SL.jpg" data-file="SL.jpg" alt="Solo Leveling art collaboration certificate" loading="lazy" />
              <h5>Solo Leveling Art Collaboration</h5>
              <span class="cert-card__year"> August 31, 2026</span>
            </article>
            <article class="cert-extra__card">
              <img class="cert-extra__img" src="images/certificate/MC.jpg" data-file="MC.jpg" alt="Minecraft art collaboration certificate" loading="lazy" />
              <h5>Minecraft Art Collaboration</h5>
              <span class="cert-card__year">August 31, 2026</span>
            </article>
            <article class="cert-extra__card">
              <img class="cert-extra__img" src="images/certificate/ML.jpg" data-file="ML.jpg" alt="Mobile Legends Bang Bang art collaboration certificate" loading="lazy" />
              <h5>Mobile Legends Bang Bang — Art Collaboration</h5>
              <span class="cert-card__year">September 30, 2026</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED GALLERY -->
    <section class="section featured-gallery" id="featured">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="section__tag">Featured Work</span>
          <h2 class="section__title">A glimpse into the gallery.</h2>
        </div>

        <div class="featured-gallery__grid">
          <a class="featured-gallery__card" href="/gallery?tab=drawings">
            <img data-featured-img="drawings" alt="Featured drawing by Justine Cancio" loading="lazy" decoding="async" />
            <span class="featured-gallery__label">Drawings</span>
          </a>

          <a class="featured-gallery__card" href="/gallery?tab=graphicsdesign">
            <img data-featured-img="graphicsdesign" alt="Featured graphic design by Justine Cancio" loading="lazy" decoding="async" />
            <span class="featured-gallery__label">Graphic Design</span>
          </a>

          <a class="featured-gallery__card" href="/gallery?tab=commisions">
            <img data-featured-img="commisions" alt="Featured commission by Justine Cancio" loading="lazy" decoding="async" />
            <span class="featured-gallery__label">Commissions</span>
          </a>

          <a class="featured-gallery__card" href="/gallery?tab=photography">
            <img data-featured-img="photography" alt="Featured photography by Justine Cancio" loading="lazy" decoding="async" />
            <span class="featured-gallery__label">Photography</span>
          </a>
        </div>

        <div class="featured-gallery__actions">
          <a href="/gallery" class="btn btn--ghost">View Full Gallery &rarr;</a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq" id="faq">
      <div class="container">
        <div class="section__head section__head--center">
          <span class="section__tag">Common Questions</span>
          <h2 class="section__title">Frequently Asked Questions</h2>
        </div>

        <div class="faq__grid">
          <article class="faq__card">
            <div class="faq__q">
              <span class="faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>
              <h4 class="faq__question">What kind of commissions do you accept?</h4>
            </div>
            <p class="faq__answer">I specialize in Drawing, Photography, Videography, Graphic Design, Video Editing, and Programming. Whether it&rsquo;s a personal artwork or a commercial project, I focus on bringing your vision to life.</p>
          </article>

          <article class="faq__card">
            <div class="faq__q">
              <span class="faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>
              <h4 class="faq__question">How long does a typical commission take?</h4>
            </div>
            <p class="faq__answer">Most digital illustrations and graphic designs take 3 to 7 days, depending on complexity and my current queue. Web projects (like RSVP sites or portfolios) usually take 1 to 2 weeks. I always provide a clear timeline before we start.</p>
          </article>

          <article class="faq__card">
            <div class="faq__q">
              <span class="faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>
              <h4 class="faq__question">Do you work with clients outside of Abra?</h4>
            </div>
            <p class="faq__answer">Absolutely! I work with clients worldwide. I handle everything online through email, social media, or Discord, and I provide regular updates and progress shots so you&rsquo;re always in the loop.</p>
          </article>

          <article class="faq__card">
            <div class="faq__q">
              <span class="faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </span>
              <h4 class="faq__question">What software do you use for your art?</h4>
            </div>
            <p class="faq__answer">I use a combination of industry-standard tools: Ibis Paint and Adobe Photoshop for illustrations, Adobe Illustrator for vector graphics and logo design, After Effects, DaVinci, Premier Pro, Alight Motion for video editing, and HTML/CSS/JS for front-end web development.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- MUSIC -->
    <section class="section music-section" id="music">
      <div class="container">
        <div class="music-card">
          <div class="music-card__copy">
            <span class="section__tag">Music</span>
            <h2>A little music.<br><span class="music-highlight">A lot of ideas.</span></h2>
            <p class="music-card__text">The music that accompanied my process turned ideas into something real. Take a peek at the playlist that I often play.</p>
            <a class="music-card__cta" href="https://open.spotify.com/user/d8ab477ef2394590" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
              </svg>
              Open on Spotify
            </a>
          </div>
          <div class="music-card__player">
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/09f7Pz1n07iwzXGI5NnyFW?utm_source=generator&theme=0&si=d8ab477ef2394590" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact" id="contact">
      <div class="container contact__inner">
        <div class="section__head section__head--center">
          <span class="section__tag">Contact</span>
          <h2 class="section__title">Let&rsquo;s make something.</h2>
        </div>

        <div class="cv-buttons">
          <button type="button" class="btn btn--glass" id="viewCvBtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            View CV
          </button>
          <a class="btn btn--primary" href="CV/Cancio_Resume.pdf" download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download CV
          </a>
        </div>

        <p class="contact__lead">
          Commissions, collabs, or just want to talk about game design? My inbox is
          always open.
        </p>

        <form class="contact__form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="481d9c64-c136-4f92-8c1a-bd4e0fca1c8c" />
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
          <input type="text" name="name" class="contact__input" required placeholder="Your Name" />
          <input type="email" name="email" class="contact__input" required placeholder="Your Email" />
          <textarea name="message" class="contact__textarea" rows="5" required placeholder="Your Message"></textarea>
          <button type="submit" class="btn btn--primary contact__btn" id="contactSubmitBtn">Send Message</button>
          <div class="contact__status" id="contactStatus" aria-live="polite"></div>
        </form>

        <div class="contact__cards">
          <a class="contact__card" href="mailto:justinecancio06@gmail.com">
            <span class="contact__card-icon">&#9993;</span>
            <span class="contact__card-label">Email</span>
            <span class="contact__card-value">justinecancio06@gmail.com</span>
          </a>
          <a class="contact__card" href="tel:09460054497">
            <span class="contact__card-icon">&#9742;</span>
            <span class="contact__card-label">Phone</span>
            <span class="contact__card-value">0946 005 4497</span>
          </a>
          <a class="contact__card" href="https://www.facebook.com/Justine.James.Cancio/" target="_blank" rel="noopener">
            <span class="contact__card-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>
            </span>
            <span class="contact__card-label">Facebook</span>
            <span class="contact__card-value">James Laurente</span>
          </a>
          <a class="contact__card" href="https://github.com/justinecancio06-hub" target="_blank" rel="noopener">
            <span class="contact__card-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.26 5.65.41.35.78 1.06.78 2.13v3.16c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </span>
            <span class="contact__card-label">GitHub</span>
            <span class="contact__card-value">justinecancio06-hub</span>
          </a>
          <div class="contact__card">
            <span class="contact__card-icon">&#128205;</span>
            <span class="contact__card-label">Location</span>
            <span class="contact__card-value">Manabo, Abra</span>
          </div>
        </div>
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
            <a href="#music">Music</a>
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

  <div class="cv-modal" id="cvModal" hidden>
    <div class="cv-modal__overlay"></div>
    <div class="cv-modal__content">
      <div class="cv-modal__header">
        <h3>My Resume</h3>
        <div class="cv-modal__actions">
          <a href="CV/Cancio_Resume.pdf" download class="btn btn--primary">Download PDF</a>
          <button class="cv-modal__close" aria-label="Close">&times;</button>
        </div>
      </div>
      <div class="cv-modal__body">
        <iframe src="CV/Cancio_Resume.pdf" title="Resume"></iframe>
      </div>
    </div>
  </div>

  <!-- CANCIO ASSISTANT CHATBOT -->
  <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  </button>
  <div class="chatbot" id="chatbot" hidden>
    <div class="chatbot__header">
      <span>Cancio Assistant</span>
      <div class="chatbot__header-actions">
        <button type="button" class="chatbot__mode-toggle" id="chatbotModeToggle" aria-label="Toggle Roast Mode">Formal Mode 🤖</button>
        <button class="chatbot__close" id="chatbotClose" aria-label="Close">×</button>
      </div>
    </div>
    <div class="chatbot__messages" id="chatbotMessages"></div>
    <div class="chatbot__quick-replies" id="chatbotQuickReplies">
      <button type="button" class="chatbot__quick-btn" data-query="Where are you from?">Where are you from?</button>
      <button type="button" class="chatbot__quick-btn" data-query="What are your rates?">What are your rates?</button>
      <button type="button" class="chatbot__quick-btn" data-query="Tech Stack">Tech Stack</button>
    </div>
    <div class="chatbot__input">
      <input type="text" id="chatbotInput" placeholder="Ask me something..." autocomplete="off" />
      <button id="chatbotSend" aria-label="Send">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </div>
  </div>

  <script src="js/main.js?v=20261114"></script>
  <script src="js/background.js"></script>
</body>
</html>