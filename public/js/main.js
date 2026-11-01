(function () {
  'use strict';
  console.log("CV script loaded");

  var WORKS = {
    drawings: {
      label: 'Drawings',
      hint: 'Character drawings, portraits & illustrations.',
      files: [
        'Asta.jpg',
        'Benedetta.jpg',
        'Cancio _ Lady Warden.jpg',
        'Curl.jpg',
        'Denji.jpg',
        'Eye.jpg',
        'Gojo.jpg',
        'Kai.jpg',
        'Kokushibo.jpg',
        'LANDSCAPES_ratioLuffy.jpg',
        'LANDSCAPE_ratioMadara.jpg',
        'Liu Zhigang.jpg',
        'Luffy LA.jpg',
        'Mikasa.jpg',
        'Perlas.jpg',
        'Reze.jpg',
        'ShoreKeeper.jpg',
        'Tanjiro.jpg',
        'Tengen.jpg',
        'Yu Zhong.jpg'
      ]
    },
    graphicsdesign: {
      label: 'Graphics Design',
      hint: 'Posters, magazines & graphic design pieces.',
      files: [
        'cANCInternationalMagazine.jpg',
        'GD_LANDSCAPE1.jpg',
        'GD_LANDSCAPE2.jpg',
        'GD_LANDSCAPE3.jpg',
        'GD_LANDSCAPE4.jpg',
        'GD_LANDSCAPE5.jpg',
        'LocalMagazine.jpg',
        'loki ni gelly.jpg',
        'moviePosterCancio.jpg',
        'SPORT.jpg',
        'SunsetPainting.jpg',
        'Untitled223_20250523231123.jpg',
        'VexelGelly.jpg',
        'VexelGtaVibe.jpg',
        'VexelKorean.jpg',
        'VexelSG.jpg'
      ]
    },
    commisions: {
      label: 'Commisions',
      hint: '',
      files: [
        'JOSHUA.jpg',
        'MEET THE OFFICERS.jpg',
        'BASKETBALL JERSEY NPCMST 2026.jpg',
        'BS_MARINE_UNIFORM.jpg',
        'CHINESE COLAR.jpg',
        'TSHIRT JERSEY NPCMST.jpg',
        'GtaStyle2.jpg',
        'GRADE_10_DAING_FRONT.jpg',
        'GRADE_10_DAING_bACK.jpg'
      ]
    },
    photography: {
      label: 'Photography',
      hint: 'Photos & landscapes shot on camera.',
      files: [
        'Cat.jpe',
        'CG.jpg',
        'DSC00116.png',
        'IMG_7494253337131388166_4_v2.jpg',
        'LANDSCAPE1.jpe',
        'LANDSCAPE2.jpe',
        'LANDSCAPE3.jpe',
        'LANDSCAPE4.jpe',
        'LANDSCAPE5.jpg',
        'motor.jpg',
        '_JLC2952.jpg',
        '_JLC3077.jpg',
        '_JLC3113.jpg',
        '_JLC2970.jpg'
      ]
    },
    certificate: {
      label: 'Certificates',
      hint: 'Certificates & achievements.',
      files: [
        {
          file: 'nML_T.png',
          org: 'Data Center College of the Philippines — Bangued',
          title: '2nd Runner Up — Mobile Legends Competition',
          year: '2025',
          desc: 'Awarded 2nd runner up in the Mobile Legends competition during ITCS Day 2025, themed “Tech in Action: Students Driving Tomorrow\'s Innovations,” showcasing teamwork and strategic play in mobile esports.'
        },
        {
          file: 'nFilm.png',
          org: 'Data Center College of the Philippines — Bangued',
          title: '1st Runner Up — Film Making Competition',
          year: '2025',
          desc: 'Awarded 1st runner up in the Film Making competition during ITCS Day 2025, themed “Tech in Action: Students Driving Tomorrow\'s Innovations,” showcasing skills in video production, direction, and visual storytelling.'
        },
        {
          file: 'BALAGTASAN.jpg',
          org: 'Data Center College of the Philippines — Bangued',
          title: '3rd Place — Balagtasan Competition (Buwan ng Wika 2025)',
          year: '2025',
          desc: 'Awarded 3rd place in a traditional Filipino poetic debate (Balagtasan) during the National Language Month celebration, demonstrating excellence in public speaking, creative expression, and Filipino literary arts.'
        },
        {
          file: 'DICT.png',
          org: 'DICT',
          title: 'Understanding Startups & Getting Your Idea Ready for the Philippine Startup Challenge XI',
          year: '2026',
          desc: 'Participated in a regional webinar series hosted by the Department of Information and Communications Technology (DICT), focusing on refining startup concepts, market readiness, and preparing innovative ideas for competition.'
        },
        {
          file: 'DOST.png',
          org: 'DOST — Cordillera Administrative Region (iHub)',
          title: 'Startup Now Cordillera: Exploring Programs, Funding, and Opportunities for Aspiring Startups',
          year: '2026',
          desc: 'Participated in a regional startup webinar hosted by DOST-CAR and iHub, gaining insights into government funding, support programs, and growth opportunities for tech ventures.'
        },
        {
          file: 'NCII.jpg',
          org: 'TESDA',
          title: 'Computer Systems Servicing NC II',
          year: '2025',
          desc: 'Earned national certification in computer systems servicing, demonstrating core competencies in assembling hardware, configuring computer networks, setting up servers, and maintaining systems.'
        },
        {
          file: 'MC.jpg',
          title: 'Minecraft Art Collaboration',
          year: 'August 31, 2026'
        },
        {
          file: 'JJK CERT.jpg',
          title: 'Jujutsu Kaisen Art Collaboration',
          year: 'July 31, 2026'
        },
        {
          file: 'SL.jpg',
          title: 'Solo Leveling Art Collaboration',
          year: 'August 31, 2026'
        },
        {
          file: 'ML.jpg',
          title: 'Mobile Legends Bang Bang — Art Collaboration',
          year: 'September 30, 2026'
        },
        {
          file: 'CISCO.png',
          org: 'Cisco Networking Academy',
          title: 'Introduction to Modern AI',
          year: '2026',
          desc: 'Successfully completed the Introduction to Modern AI course offered by Networking Academy through the Cisco Networking Academy program.'
        }
      ]
    }
  };

  var grid = document.getElementById('galleryGrid');
  var hint = document.getElementById('galleryHint');
  var tabs = document.querySelectorAll('.gallery__tab');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxOrg = document.getElementById('lightboxOrg');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxYear = document.getElementById('lightboxYear');
  var lightboxDesc = document.getElementById('lightboxDesc');
  var lightboxOrgRow = document.getElementById('lightboxOrgRow');
  var lightboxTitleRow = document.getElementById('lightboxTitleRow');
  var lightboxYearRow = document.getElementById('lightboxYearRow');
  var lightboxDescRow = document.getElementById('lightboxDescRow');
  var lightboxTrigger = null;
  var splitMode = false;
  var standaloneMode = false;
  var currentFolder = 'drawings';
  var initialTab = new URLSearchParams(window.location.search).get('tab');
  if (initialTab && WORKS[initialTab]) {
    currentFolder = initialTab;
  }
  var currentIndex = 0;
  var currentFiles = [];

  function prettyName(file) {
    var base = file.replace(/\.[^.]+$/, '');
    return base
      .replace(/[_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); })
      .trim();
  }

  function fileName(entry) {
    return typeof entry === 'string' ? entry : entry.file;
  }

  function renderGallery() {
    if (!grid || !hint) return;
    var folder = WORKS[currentFolder];
    var files = folder.files.slice();
    if (currentFolder === 'graphicsdesign') {
      files.sort(function (a, b) {
        return (isVexel(b) ? 1 : 0) - (isVexel(a) ? 1 : 0);
      });
    }
    currentFiles = files;
    hint.textContent = folder.hint;

    tabs.forEach(function (tab) {
      var active = tab.getAttribute('data-folder') === currentFolder;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    var frag = document.createDocumentFragment();
    currentFiles.forEach(function (entry, i) {
      var file = fileName(entry);
      var figure = document.createElement('figure');
      figure.className = currentFolder === 'certificate' ? 'gallery__item gallery__item--cert' : 'gallery__item';
      figure.style.animationDelay = (i * 40) + 'ms';

      var img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = encodeURI('images/' + currentFolder + '/' + file);
      img.alt = prettyName(file);

      var caption = document.createElement('figcaption');
      caption.textContent = prettyName(file);

      figure.appendChild(img);
      figure.appendChild(caption);

      if (currentFolder === 'certificate') {
        var more = document.createElement('button');
        more.type = 'button';
        more.className = 'cert-card__more';
        more.textContent = 'Click for more detail';
        more.addEventListener('click', function (e) {
          e.stopPropagation();
          lightboxTrigger = more;
          openLightbox(i, true);
        });
        figure.appendChild(more);
      }

      if (currentFolder !== 'certificate') {
        figure.addEventListener('click', function () {
          openLightbox(i);
        });
      }
      frag.appendChild(figure);
    });

    grid.innerHTML = '';
    grid.appendChild(frag);
  }

  function isVexel(file) {
    return /^Vexel/i.test(fileName(file));
  }

  function renderFeaturedGallery() {
    var featured = document.getElementById('featured');
    if (!featured) return;

    ['drawings', 'graphicsdesign', 'commisions', 'photography'].forEach(function (folder) {
      var img = featured.querySelector('[data-featured-img="' + folder + '"]');
      var files = WORKS[folder] && WORKS[folder].files;
      if (!img || !files || !files.length) return;

      var file = fileName(files[0]);
      img.src = encodeURI('images/' + folder + '/' + file);
    });
  }

  function openLightbox(index, split) {
    currentIndex = index;
    splitMode = !!split;
    standaloneMode = false;
    updateLightbox();
    lightbox.classList.toggle('lightbox--split', splitMode && currentFolder === 'certificate');
    document.getElementById('lightboxPrev').hidden = false;
    document.getElementById('lightboxNext').hidden = false;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function openStandaloneLightbox(src, caption) {
    standaloneMode = true;
    lightboxImg.src = encodeURI(src);
    lightboxCaption.textContent = caption || '';
    lightbox.classList.remove('lightbox--split');
    document.getElementById('lightboxPrev').hidden = true;
    document.getElementById('lightboxNext').hidden = true;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lightboxTrigger) {
      if (lightboxTrigger.focus) lightboxTrigger.focus();
      lightboxTrigger = null;
    }
  }

  function updateLightbox() {
    var entry = currentFiles[currentIndex];
    var file = fileName(entry);
    lightboxImg.src = encodeURI('images/' + currentFolder + '/' + file);
    lightboxCaption.textContent = prettyName(file);
    if (currentFolder === 'certificate') fillLightboxDetails(entry);
  }

  function fillLightboxDetails(entry) {
    var org = entry && entry.org;
    var title = entry && entry.title;
    var year = entry && entry.year;
    var desc = entry && entry.desc;

    lightboxOrg.textContent = org || '';
    lightboxTitle.textContent = title || '';
    lightboxYear.textContent = year || '';
    lightboxDesc.textContent = desc || '';

    lightboxOrgRow.hidden = !org;
    lightboxTitleRow.hidden = !title;
    lightboxYearRow.hidden = !year;
    lightboxDescRow.hidden = !desc;
  }

  function stepLightbox(dir) {
    if (standaloneMode || !currentFiles.length) return;
    currentIndex = (currentIndex + dir + currentFiles.length) % currentFiles.length;
    updateLightbox();
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      currentFolder = tab.dataset.folder;
      renderGallery();
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', function () { stepLightbox(-1); });
  document.getElementById('lightboxNext').addEventListener('click', function () { stepLightbox(1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.querySelectorAll('.cert-card__img, .cert-extra__img').forEach(function (img) {
    img.addEventListener('click', function () {
      var file = img.dataset.file;
      var idx = WORKS.certificate.files.findIndex(function (entry) {
        return entry.file === file;
      });
      if (idx !== -1) {
        currentFolder = 'certificate';
        renderGalleryFiles(WORKS.certificate.files);
        openLightbox(idx);
      } else {
        currentFiles = [{ file: file }];
        currentFolder = 'certificate';
        openLightbox(0);
      }
    });
  });

  /* ---------- Experience images -> lightbox ---------- */
  document.querySelectorAll('.exp-card__media img[data-lightbox]').forEach(function (img) {
    function openFromImage() {
      lightboxTrigger = img;
      openStandaloneLightbox(img.dataset.lightbox, img.alt);
    }
    img.addEventListener('click', openFromImage);
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFromImage(); }
    });
  });

  function renderGalleryFiles(files) {
    currentFiles = files;
  }

  /* ---------- Lightbox keyboard ---------- */
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  /* ---------- Projects page ---------- */
  var projectsGrid = document.getElementById('projectsGrid');
  var projectModal = document.getElementById('projectModal');
  var projectFilterBtns = document.querySelectorAll('.projects-filter__btn');
  var projectModalDialog = document.getElementById('projectModalDialog');
  var projectModalClose = document.getElementById('projectModalClose');
  var projectModalImg = document.getElementById('projectModalImg');
  var projectModalPrev = document.getElementById('projectModalPrev');
  var projectModalNext = document.getElementById('projectModalNext');
  var projectModalCounter = document.getElementById('projectModalCounter');
  var projectModalTitle = document.getElementById('projectModalTitle');
  var projectModalDesc = document.getElementById('projectModalDesc');
  var projectModalTech = document.getElementById('projectModalTech');
  var projectModalLive = document.getElementById('projectModalLive');
  var projectModalGithub = document.getElementById('projectModalGithub');
  var activeProject = null;
  var activeProjectImage = 0;
  var projectModalTrigger = null;

  var projectsData = [
    {
      id: 'abraquest',
      title: 'Capstone Project — System Designer',
      category: 'games',
      tag: 'Game',
      description: 'Designing the core gameplay systems of a 2D RPG — combat, progression, quest structure, and player economy. Turning scattered mechanics into a coherent system that keeps the game balanced and fun.',
      tech: ['Game Design', 'System & Balance', '2D RPG'],
      images: [
        'images/screenshots/abraquest/abraquest1.png',
        'images/screenshots/abraquest/abraquest2.png',
        'images/screenshots/abraquest/abraquest3.png',
        'images/screenshots/abraquest/abraquest4.png',
        'images/screenshots/abraquest/abraquest5.png',
        'images/screenshots/abraquest/abraquest6.png'
      ],
      liveLink: '',
      githubLink: ''
    },
    {
      id: 'wedding-rsvp',
      title: 'Jefrey & Kristine — Wedding RSVP',
      category: 'web',
      tag: 'Web App',
      description: 'Built a wedding invitation and RSVP site from scratch for a real client couple, covering the visual design and the front-end build so their guests can RSVP in a few taps on any device.',
      tech: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
      images: ['images/screenshots/rsvp.png'],
      liveLink: 'https://jefrey-kristine-wedding-rsvp.vercel.app/',
      githubLink: ''
    },
    {
      id: 'bangued-ka-fuel',
      title: 'Bangued-Ka-Fuel',
      category: 'web',
      tag: 'Web App',
      description: 'An interactive map that locates gas stations within Bangued, Abra. Built to help locals and travelers find fuel stations by brand — Shell, Caltex, Petron, Phoenix, and more — with a filterable legend and OpenStreetMap layers.',
      tech: ['Web App', 'Maps', 'HTML', 'CSS', 'JavaScript'],
      images: ['images/screenshots/gasAbra.png'],
      liveLink: 'https://bangued-ka-fuel.infinityfree.me/',
      githubLink: ''
    },
    {
      id: 'artflow',
      title: 'Artflow',
      category: 'apps',
      tag: 'Mobile App',
      description: 'A cross-platform mobile application built with Flutter designed to help users organize their daily tasks and schedule their time efficiently.',
      tech: ['Flutter', 'Dart', 'Mobile App', 'Task Management'],
      images: [
        'images/screenshots/artflow/artflow1.jpe',
        'images/screenshots/artflow/artflow2.jpe',
        'images/screenshots/artflow/artflow3.jpe',
        'images/screenshots/artflow/artflow4.jpe',
        'images/screenshots/artflow/artflow5.jpe',
        'images/screenshots/artflow/artflow6.jpe',
        'images/screenshots/artflow/artflow7.jpe'
      ],
      liveLink: '',
      githubLink: ''
    },
    {
      id: 'sketchpad',
      title: 'Sketch Pad',
      category: 'apps',
      tag: 'Web Tool',
      description: 'A custom drawing tool built with vanilla JavaScript and Canvas API. Features pen, eraser, bucket, opacity, Pickr color integration, undo, and a 3-min challenge mode.',
      tech: ['Canvas API', 'JavaScript', 'HTML', 'CSS'],
      images: ['images/screenshots/sketchpad.svg'],
      liveLink: '',
      detailsLink: 'playground/sketchpad.html',
      githubLink: ''
    },
    {
      id: 'pixelart',
      title: 'Pixel Art Editor',
      category: 'apps',
      tag: 'Web Tool',
      description: 'A lightweight pixel art editor built from scratch. Features pencil, eraser, fill, custom color picker, and PNG export.',
      tech: ['JavaScript', 'Canvas API', 'CSS Grid'],
      images: ['images/screenshots/pixelart.svg'],
      liveLink: '',
      detailsLink: 'playground/pixelart.html',
      githubLink: ''
    },
    {
      id: 'jlc-duper',
      title: 'JLC Duper',
      category: 'games',
      tag: 'Game Mod',
      description: "A late-game machine capable of duplicating items, powered by the Ender Dragon's Heart. Features a custom GUI, animated progress, custom textures, and the 'Double or Nothing' advancement.",
      tech: ['Java', 'Fabric', 'Minecraft', 'Game Dev'],
      images: [
        'images/screenshots/JLC Duper/jlcThumbnail.svg',
        'images/screenshots/JLC Duper/jlc2.png',
        'images/screenshots/JLC Duper/jlc3.png',
        'images/screenshots/JLC Duper/jlc4.png',
        'images/screenshots/JLC Duper/jlc5.png',
        'images/screenshots/JLC Duper/jlc6.png'
      ],
      liveLink: '',
      githubLink: 'https://github.com/justinecancio06-hub/jlc-duper-mod'
    },
    {
      id: 'aether-dimension',
      title: 'Aether Dimension',
      category: 'games',
      tag: 'Game Mod',
      description: 'An under-development Fabric mod that adds a brand new Aether dimension. Features a custom Glowstone portal system, a fixed daytime sky, and new items like the Spectro and Prismarine X Shard.',
      tech: ['Java', 'Fabric', 'Minecraft', 'Game Dev'],
      images: ['images/screenshots/JLC Duper/jlcThumbnail.svg'],
      liveLink: '',
      githubLink: 'https://github.com/justinecancio06-hub/Aether-Dimension-Cancio'
    },
    {
      id: 'whitney-portfolio',
      title: 'Whitney Tulan Portfolio',
      category: 'web',
      tag: 'Website',
      description: 'A clean, modern portfolio website designed and developed for a Civil Engineer. Built with a focus on readability, clean typography, and a smooth user experience.',
      tech: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
      images: ['images/screenshots/whitney-portfolio.png'],
      liveLink: 'https://whitney-tulan-portfolio.vercel.app/',
      githubLink: ''
    },
    {
      id: 'marvin-portfolio',
      title: 'Marvin Constantino Portfolio',
      category: 'web',
      tag: 'Website',
      description: 'A bold, creative portfolio designed for a fellow Multi-Media Artist. Features a clean layout, smooth section transitions, and a strong focus on showcasing digital art, graphic design, and commissions.',
      tech: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
      images: ['images/screenshots/marvin-portfolio.png'],
      liveLink: 'https://mrvnportfolio.vercel.app/',
      githubLink: ''
    }
  ];

  function isExternalLink(url) {
    return /^https?:\/\//i.test(url);
  }

  function setLinkTarget(link, url) {
    if (isExternalLink(url)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
  }

  function createProjectCard(project) {
    var card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    var media = document.createElement('div');
    media.className = 'project-card__media';

    var img = document.createElement('img');
    img.src = project.images[0];
    img.alt = project.title + ' preview';
    img.loading = 'lazy';
    img.decoding = 'async';

    var tag = document.createElement('span');
    tag.className = 'project-card__tag';
    tag.textContent = project.tag;

    media.appendChild(img);
    media.appendChild(tag);

    var body = document.createElement('div');
    body.className = 'project-card__body';

    var title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    var desc = document.createElement('p');
    desc.className = 'project-card__desc';
    desc.textContent = project.description;

    var tech = document.createElement('ul');
    tech.className = 'project-card__tech';
    project.tech.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      tech.appendChild(li);
    });

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(tech);

    if (project.liveLink || project.githubLink) {
      var actions = document.createElement('div');
      actions.className = 'project-card__actions';

      if (project.liveLink) {
        var live = document.createElement('a');
        live.className = 'btn btn--ghost project-card__action';
        live.href = project.liveLink;
        live.textContent = 'Live Demo';
        setLinkTarget(live, project.liveLink);
        actions.appendChild(live);
      }

      if (project.githubLink) {
        var github = document.createElement('a');
        github.className = 'btn btn--ghost project-card__action';
        github.href = project.githubLink;
        github.textContent = 'GitHub';
        setLinkTarget(github, project.githubLink);
        actions.appendChild(github);
      }

      body.appendChild(actions);
    }

    var details;

    if (project.detailsLink) {
      details = document.createElement('a');
      details.className = 'project-card__details';
      details.href = project.detailsLink;
      details.textContent = 'Live Demo \u2192';
      setLinkTarget(details, project.detailsLink);
    } else {
      details = document.createElement('button');
      details.type = 'button';
      details.className = 'project-card__details';
      details.textContent = 'View Details & Screenshots \u2192';
      details.addEventListener('click', function () {
        projectModalTrigger = details;
        openProjectModal(project);
      });
    }

    body.appendChild(details);

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function renderProjects() {
    if (!projectsGrid) return;
    var frag = document.createDocumentFragment();
    projectsData.forEach(function (project) {
      frag.appendChild(createProjectCard(project));
    });
    projectsGrid.innerHTML = '';
    projectsGrid.appendChild(frag);
  }

  function filterProjects(filter) {
    if (!projectsGrid) return;
    projectsGrid.querySelectorAll('.project-card').forEach(function (card) {
      card.hidden = filter !== 'all' && card.getAttribute('data-category') !== filter;
    });
  }

  function setProjectFilter(filter) {
    projectFilterBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-filter') === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    filterProjects(filter);
  }

  function renderProjectModalImage() {
    if (!activeProject) return;
    var total = activeProject.images.length;
    projectModalImg.src = activeProject.images[activeProjectImage];
    projectModalImg.alt = activeProject.title + ' screenshot ' + (activeProjectImage + 1);
    projectModalCounter.textContent = (activeProjectImage + 1) + ' / ' + total;
    projectModalPrev.hidden = total <= 1;
    projectModalNext.hidden = total <= 1;
  }

  function openProjectModal(project) {
    if (!projectModal) return;
    activeProject = project;
    activeProjectImage = 0;

    projectModalTitle.textContent = project.title;
    projectModalDesc.textContent = project.description;

    projectModalTech.innerHTML = '';
    project.tech.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      projectModalTech.appendChild(li);
    });

    if (project.liveLink) {
      projectModalLive.href = project.liveLink;
      projectModalLive.hidden = false;
      setLinkTarget(projectModalLive, project.liveLink);
    } else {
      projectModalLive.hidden = true;
      projectModalLive.removeAttribute('href');
    }

    if (project.githubLink) {
      projectModalGithub.href = project.githubLink;
      projectModalGithub.hidden = false;
      setLinkTarget(projectModalGithub, project.githubLink);
    } else {
      projectModalGithub.hidden = true;
      projectModalGithub.removeAttribute('href');
    }

    renderProjectModalImage();
    projectModal.hidden = false;
    document.body.style.overflow = 'hidden';
    projectModalClose.focus();
  }

  function closeProjectModal() {
    if (!projectModal || projectModal.hidden) return;
    projectModal.hidden = true;
    document.body.style.overflow = '';
    activeProject = null;
    if (projectModalTrigger && projectModalTrigger.focus) projectModalTrigger.focus();
    projectModalTrigger = null;
  }

  function stepProjectImage(direction) {
    if (!activeProject) return;
    var total = activeProject.images.length;
    if (total <= 1) return;
    activeProjectImage = (activeProjectImage + direction + total) % total;
    renderProjectModalImage();
  }

  if (projectsGrid && projectModal && projectModalDialog) {
    renderProjects();
    setProjectFilter('all');

    projectFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setProjectFilter(btn.getAttribute('data-filter'));
      });
    });

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModalPrev.addEventListener('click', function () { stepProjectImage(-1); });
    projectModalNext.addEventListener('click', function () { stepProjectImage(1); });

    projectModal.addEventListener('click', function (e) {
      if (e.target === projectModal) closeProjectModal();
    });

    document.addEventListener('keydown', function (e) {
      if (projectModal.hidden) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeProjectModal();
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepProjectImage(-1);
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepProjectImage(1);
        return;
      }

      if (e.key === 'Tab') {
        var focusables = projectModalDialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        var visible = Array.prototype.filter.call(focusables, function (el) {
          return !el.hidden && el.offsetParent !== null;
        });
        if (!visible.length) return;
        var first = visible[0];
        var last = visible[visible.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------- Nav ---------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navList.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navList.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Active page nav highlight ---------- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var pageLinks = document.querySelectorAll('.nav__list > li > a');
  pageLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || link.classList.contains('nav__cta')) return;
    var linkPage = href.split('?')[0].split('#')[0].split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ---------- Home scroll memory / Back button ---------- */
  var HOME_SCROLL_KEY = 'homeScrollY';
  var RESTORE_HOME_KEY = 'restoreHomeScroll';
  var isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.php';

  if (isHomePage) {
    var restorePending = false;
    try { restorePending = sessionStorage.getItem(RESTORE_HOME_KEY) === '1'; } catch (e) {}

    if (restorePending) {
      var savedY = 0;
      try { savedY = parseInt(sessionStorage.getItem(HOME_SCROLL_KEY), 10) || 0; } catch (e) {}
      try { sessionStorage.removeItem(RESTORE_HOME_KEY); } catch (e) {}

      var restoreHomeScroll = function () {
        window.scrollTo(0, savedY);
      };

      window.addEventListener('load', restoreHomeScroll);
      restoreHomeScroll();
      requestAnimationFrame(function () {
        requestAnimationFrame(restoreHomeScroll);
      });
    }

    window.addEventListener('scroll', function () {
      try { sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY)); } catch (e) {}
    }, { passive: true });
  }

  var backHomeBtn = document.querySelector('.back-home-btn');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', function () {
      try {
        if (sessionStorage.getItem(HOME_SCROLL_KEY) !== null) {
          sessionStorage.setItem(RESTORE_HOME_KEY, '1');
        }
      } catch (e) {}
    });
  }

  /* ---------- Active nav section highlight ---------- */
  var sectionLinks = Array.prototype.filter.call(
    document.querySelectorAll('.nav__list a[href^="#"]'),
    function (link) { return !link.classList.contains('nav__cta'); }
  );
  var trackedSections = sectionLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  if (trackedSections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var href = '#' + entry.target.id;
        sectionLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === href);
        });
      });
    }, { rootMargin: '-38% 0px -56% 0px', threshold: 0 });

    trackedSections.forEach(function (sec) { sectionObserver.observe(sec); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.section__head, .exp-card, .contact__form, .contact__card, .edu-card, .cert-card, .cert-extra__card, .skill-card, .programming-panel, .hero__inner, .faq__head, .faq__card, .stats__card, .work__title, .work__card');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Web3Forms Contact Form Handler ---------- */
  var contactForm = document.getElementById('contactForm');
  var contactSubmitBtn = document.getElementById('contactSubmitBtn');
  var contactStatus = document.getElementById('contactStatus');

  if (contactForm && contactSubmitBtn) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var originalBtnText = contactSubmitBtn.textContent;
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = 'Sending...';
      if (contactStatus) {
        contactStatus.textContent = '';
        contactStatus.className = 'contact__status';
      }

      var formData = new FormData(contactForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            contactSubmitBtn.textContent = 'Message Sent!';
            if (contactStatus) {
              contactStatus.textContent = 'Thank you! Your message has been sent successfully.';
              contactStatus.className = 'contact__status is-success';
            }
            contactForm.reset();
            setTimeout(function () {
              contactSubmitBtn.disabled = false;
              contactSubmitBtn.textContent = originalBtnText;
              if (contactStatus) {
                contactStatus.textContent = '';
              }
            }, 5000);
          } else {
            contactSubmitBtn.disabled = false;
            contactSubmitBtn.textContent = 'Failed to Send';
            if (contactStatus) {
              contactStatus.textContent = data.message || 'Something went wrong. Please try again.';
              contactStatus.className = 'contact__status is-error';
            }
            setTimeout(function () {
              contactSubmitBtn.textContent = originalBtnText;
            }, 4000);
          }
        })
        .catch(function () {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.textContent = 'Error Sending';
          if (contactStatus) {
            contactStatus.textContent = 'Network error. Please check your connection and try again.';
            contactStatus.className = 'contact__status is-error';
          }
          setTimeout(function () {
            contactSubmitBtn.textContent = originalBtnText;
          }, 4000);
        });
    });
  }

  /* ---------- Cancio Assistant Chatbot ---------- */
  var chatbotToggle = document.getElementById('chatbotToggle');
  var chatbot = document.getElementById('chatbot');
  var chatbotClose = document.getElementById('chatbotClose');
  var chatbotMessages = document.getElementById('chatbotMessages');
  var chatbotInput = document.getElementById('chatbotInput');
  var chatbotSend = document.getElementById('chatbotSend');
  var chatbotWelcomed = false;

  if (chatbotToggle && chatbot) {
    chatbotToggle.addEventListener('click', function() {
      chatbot.hidden = !chatbot.hidden;
      if (!chatbot.hidden && chatbotInput) {
        chatbotInput.focus();
        if (!chatbotWelcomed && chatbotMessages && chatbotMessages.children.length === 0) {
          chatbotWelcomed = true;
          setTimeout(function() {
            if (!chatbotMessages) return;
            var div = document.createElement('div');
            div.className = 'chatbot__msg chatbot__msg--bot';
            div.textContent = "Hi there! I'm Cancio Assistant. How can I help you today? You can ask about skills, rates, or Justine's CV.";
            chatbotMessages.appendChild(div);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
          }, 300);
        }
      }
    });
  }
  if (chatbotClose && chatbot) {
    chatbotClose.addEventListener('click', function() {
      chatbot.hidden = true;
    });
  }

  function addChatMsg(text, type) {
    if (!chatbotMessages) return;
    var div = document.createElement('div');
    div.className = 'chatbot__msg chatbot__msg--' + type;
    div.textContent = text;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  var isRoastMode = false;

  /* ---------- Language Detection (Tagalog, Bisaya, Ilocano) ---------- */
  var TAGALOG_WORDS = ['ang', 'ng', 'mga', 'ako', 'ikaw', 'siya', 'kami', 'kayo', 'sila', 'ba', 'opo', 'hindi', 'oo', 'gago', 'tangina', 'bakit', 'sino', 'ano'];
  var BISAYA_WORDS = ['ka', 'ko', 'siya', 'kami', 'kamo', 'sila', 'nga', 'ba', 'oo', 'dili', 'yawa', 'unsa', 'kinsa', 'ngano'];
  var ILOCANO_WORDS = ['ti', 'iti', 'ken', 'ket', 'siak', 'sika', 'isuna', 'dakami', 'dakayo', 'isuda', 'wen', 'saan', 'ukinam', 'ania', 'sino', 'apay'];

  function detectLanguage(msg) {
    var clean = msg.toLowerCase().replace(/[^\w\s]/g, ' ');
    var words = clean.split(/\s+/).filter(Boolean);

    var tagalogHits = 0;
    var bisayaHits = 0;
    var ilocanoHits = 0;

    words.forEach(function (w) {
      if (TAGALOG_WORDS.indexOf(w) !== -1) tagalogHits++;
      if (BISAYA_WORDS.indexOf(w) !== -1) bisayaHits++;
      if (ILOCANO_WORDS.indexOf(w) !== -1) ilocanoHits++;
    });

    var maxHits = Math.max(tagalogHits, bisayaHits, ilocanoHits);
    if (maxHits >= 2) {
      if (ilocanoHits > bisayaHits && ilocanoHits > tagalogHits) return 'ilocano';
      if (bisayaHits > tagalogHits && bisayaHits > ilocanoHits) return 'bisaya';
      if (tagalogHits > bisayaHits && tagalogHits > ilocanoHits) return 'tagalog';

      var isIlocanoUnique = words.some(function (w) { return ['ti', 'iti', 'ken', 'ket', 'siak', 'sika', 'isuna', 'dakami', 'dakayo', 'isuda', 'wen', 'saan', 'ukinam', 'ania', 'apay'].indexOf(w) !== -1; });
      var isTagalogUnique = words.some(function (w) { return ['ang', 'mga', 'ikaw', 'kayo', 'opo', 'hindi', 'gago', 'tangina', 'bakit', 'ano'].indexOf(w) !== -1; });
      var isBisayaUnique = words.some(function (w) { return ['kamo', 'dili', 'yawa', 'unsa', 'kinsa', 'ngano'].indexOf(w) !== -1; });

      if (isIlocanoUnique && ilocanoHits === maxHits) return 'ilocano';
      if (isTagalogUnique && tagalogHits === maxHits) return 'tagalog';
      if (isBisayaUnique && bisayaHits === maxHits) return 'bisaya';

      if (ilocanoHits === maxHits) return 'ilocano';
      if (tagalogHits === maxHits) return 'tagalog';
      if (bisayaHits === maxHits) return 'bisaya';
    }

    if (words.some(function (w) { return ['ukinam', 'ukinana', 'bagtit'].indexOf(w) !== -1; })) return 'ilocano';
    if (words.some(function (w) { return ['yawa', 'piste', 'pisti'].indexOf(w) !== -1; })) return 'bisaya';
    if (words.some(function (w) { return ['tangina', 'tanginamo', 'putangina', 'gago'].indexOf(w) !== -1; })) return 'tagalog';

    return 'english';
  }

  var ROAST_DEFAULT = {
    english: "I have no idea what you're saying. Are you typing with your elbows?",
    tagalog: "Wala akong naintindihan. Nagta-type ka ba gamit ang siko mo?",
    bisaya: "Wala koy nasabtan. Nag-type ka ba gamit imong siko?",
    ilocano: "Awan ti nasarakak. Ag-type ka kadi nga agusar ti siko mo?"
  };

  var ROAST_TOPICS = [
    {
      keywords: ['where', 'location', 'from', 'live', 'based', 'abra', 'manabo'],
      reply: {
        english: "He's from Manabo, Abra. Far away enough that your bad coding taste won't reach him easily.",
        tagalog: "Taga-Manabo, Abra siya. Malayo para hindi mo siya maistorbo sa mga walang kwentang tanong mo.",
        bisaya: "Taga-Manabo, Abra na siya. Layo kaayo para dili nimo madala imong samok didto.",
        ilocano: "Taga-Manabo, Abra isuna! Adayo tapno saan mo a matiktikan ti kasla kenka."
      }
    },
    {
      keywords: ['favorite game', 'rpg', 'minecraft', 'mobile legends', 'play'],
      reply: {
        english: "He plays 2D RPGs, Minecraft, and Mobile Legends. Probably carrying his team while you're feeding in the first 2 minutes.",
        tagalog: "Mahilig siya sa Minecraft at Mobile Legends. Malamang buhat niya buong team habang ikaw nagfi-feed lang sa Rank.",
        bisaya: "Magduwa siyag Minecraft ug Mobile Legends. Siya nag-carry sa team samtang ikaw sige rag feeder.",
        ilocano: "Agay-ayam iti Minecraft ken Mobile Legends. Sigurado nga isuna ti mangipapan ti ay-ayam idinto nga sika ti umun-una a matay."
      }
    },
    {
      keywords: ['tech', 'stack', 'language', 'laravel', 'react', 'flutter', 'php', 'java', 'dart'],
      reply: {
        english: "Flutter, Laravel, Vanilla JS, and Java. Real stacks, unlike whatever tutorial hell you've been stuck in since 2021.",
        tagalog: "Flutter, Laravel, Vanilla JS, at Java. Tunay na tech stack, hindi tulad ng puro console.log na gawa mo.",
        bisaya: "Flutter, Laravel, Vanilla JS, ug Java. Tinuod nga code, dili pareha sa imong project nga puro copy-paste gikan StackOverflow.",
        ilocano: "Flutter, Laravel, Vanilla JS, ken Java. Pudno a koda, saan a kasla kadagita pinadas mo nga puro laeng error."
      }
    },
    {
      keywords: ['ai', 'openai', 'chatgpt', 'bot', 'robot', 'real'],
      reply: {
        english: "I'm Vanilla JavaScript written by Justine! No millions in GPU funding, and I still talk better than your last date.",
        tagalog: "Vanilla JS lang ako gawa ni Justine! Walang AI API pero mas may sense pa 'ko kausap kaysa sa 'yo.",
        bisaya: "Vanilla JS ra ko nga hinimo ni Justine! Walay AI pero mas sharp pa akong utok kaysa nimo.",
        ilocano: "Vanilla JS laeng nak nga inaramid ni Justine! Awan ti AI ngem nasilsirib nak pay ngem sika."
      }
    },
    {
      keywords: ['skill', 'do', 'art', 'draw', 'design', 'photo', 'video', 'code', 'develop', 'software', 'tools'],
      reply: {
        english: "Illustration, UI design, web development, photography. He has 10 skills while you're still struggling to center a div.",
        tagalog: "Drawing, design, coding, photography. Ang dami niyang kayang gawin, samantalang ikaw nahihirapan pa mag-center ng div.",
        bisaya: "Drawing, design, coding, photography. Daghan kayo siyag kaya buhaton, ikaw wa pa gani kahibalo unsaon pag-center sa div.",
        ilocano: "Drawing, design, web dev, ken photography. Addu unay ti ammo na, idinto nga sika marigatan ka pay nga ag-center ti div."
      }
    },
    {
      keywords: ['hire', 'rate', 'price', 'cost', 'commission', 'work', 'available', 'contact', 'email'],
      reply: {
        english: "You want to hire him? Bold move. Hope your budget isn't 'exposure' and a pack of instant noodles.",
        tagalog: "Gusto mo i-hire? Ang kapal ng mukha mo ah, sana hindi 'shoutout' at exposure lang ang ibabayad mo.",
        bisaya: "Gusto nimo i-hire? Bagag nawong nimo uy, basig 'exposure' ray imong ibayad ha.",
        ilocano: "Kayat mo nga i-hire? Nagbaklay ka pay, amangan no libre wenno exposure laeng ti ibayad mo."
      }
    },
    {
      keywords: ['cv', 'resume', 'experience', 'job', 'work history', 'background'],
      reply: {
        english: "Want to see his CV? It's right there in the Contact section. Try not to cry comparing it to your empty LinkedIn profile.",
        tagalog: "Gusto mo makita CV niya? Pindutin mo 'yung View CV. 'Wag ka lang maiiyak kung ikukumpara mo sa bakante mong resume.",
        bisaya: "Tan-aw kag CV? Naa sa Contact section. Ayaw lang hilak kung itandi nimo sa imong walay sulod nga resume.",
        ilocano: "Kayat mo makita ti CV na? Adda dita Contact section. Dika agsangsangit no idilig mo iti blanko a resume mo."
      }
    },
    {
      keywords: ['project', 'game', 'app', 'web', 'playground', 'build', 'make', 'minecraft', 'roblox', 'artflow'],
      reply: {
        english: "He built pixel editors, sketchpads, games, and responsive sites. Meanwhile, your biggest project is a to-do list from a YouTube tutorial.",
        tagalog: "Gumawa siya ng pixel art editor, games, at responsive web apps. Samantalang ikaw, to-do app na galing YouTube pa lang natatapos mo.",
        bisaya: "Nakahimo siyag pixel art editor, games, ug web apps. Ikaw tawn, to-do list ra sa tutorial ang nahuman.",
        ilocano: "Nakaaramid ti pixel art editor, ay-ayam, ken web apps. Idinto nga sika, to-do list pay laeng nga inawat mo idiay YouTube ti naaramid mo."
      }
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'yo', 'sup'],
      reply: {
        english: "What's up? Are you here to actually look at his work or just procrastinate talking to a chat bubble?",
        tagalog: "Uy kumusta. Nandito ka ba para tumingin ng gawa niya o para lang magsayang ng oras sa pakikipag-chat sa bot?",
        bisaya: "Oy unsa man. Naa ka diri aron motan-aw sa iyang trabaho o mag-usik ra kag oras sa bot?",
        ilocano: "Kumusta. Adda ka kadi ditoy nga agkita iti aramid na wenno agsayang ka laeng ti oras mo kaniak?"
      }
    }
  ];

  var CHAT_TOPICS = [
    {
      keywords: ['where', 'location', 'from', 'live', 'based', 'abra', 'manabo'],
      reply: "Justine is based in Manabo, Abra, Philippines! 🇵🇭"
    },
    {
      keywords: ['favorite game', 'rpg', 'minecraft', 'mobile legends', 'play'],
      reply: "He loves building 2D RPGs, playing Minecraft (he's a Java Modder!), and playing Mobile Legends."
    },
    {
      keywords: ['tech', 'stack', 'language', 'laravel', 'react', 'flutter', 'php', 'java', 'dart'],
      reply: "He builds with HTML, CSS, Vanilla JS, Flutter (Dart), PHP (Laravel), and Java (Minecraft Mods)."
    },
    {
      keywords: ['ai', 'openai', 'chatgpt', 'bot', 'robot', 'real'],
      reply: "I'm actually a scripted assistant built with Vanilla JavaScript! No AI APIs, just clever code. 🤖"
    },
    {
      keywords: ['skill', 'do', 'art', 'draw', 'design', 'photo', 'video', 'code', 'develop', 'software', 'tools'],
      reply: "I specialize in Character Illustration, Graphic Design, Web Development, Photography, and Video Editing. Check out the Skills section!"
    },
    {
      keywords: ['hire', 'rate', 'price', 'cost', 'commission', 'work', 'available', 'contact', 'email'],
      reply: "Justine is available for commissions! You can use the 'Hire Me' button at the top or fill out the contact form."
    },
    {
      keywords: ['cv', 'resume', 'experience', 'job', 'work history', 'background'],
      reply: "You can view or download Justine's CV right in the Contact section!"
    },
    {
      keywords: ['project', 'game', 'app', 'web', 'playground', 'build', 'make', 'minecraft', 'roblox', 'artflow'],
      reply: "He built interactive projects like games, a custom Sketchpad, and a Pixel Art editor! Check them out on the Projects page."
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'yo', 'sup'],
      reply: "Hello! I'm Cancio Assistant. Ask me about Justine's skills, CV, or how to hire him."
    }
  ];

  function getBotReply(msg, lang) {
    var detectedLang = lang || detectLanguage(msg);
    var cleanMsg = msg.toLowerCase().replace(/[^\w\s]/g, ' ');
    var words = cleanMsg.split(/\s+/).filter(Boolean);

    var bestTopic = null;
    var highestScore = 0;
    var highestWeight = 0;
    var topics = isRoastMode ? ROAST_TOPICS : CHAT_TOPICS;

    topics.forEach(function (topic) {
      var score = 0;
      var weight = 0;

      topic.keywords.forEach(function (kw) {
        var lowerKw = kw.toLowerCase();

        // Multi-word phrase check (e.g. 'work history', 'favorite game')
        if (lowerKw.indexOf(' ') !== -1) {
          if (cleanMsg.indexOf(lowerKw) !== -1) {
            score++;
            weight += lowerKw.length;
          }
          return;
        }

        // Check single word match or stem matching
        var matched = words.some(function (w) {
          if (w === lowerKw) return true;
          if (lowerKw.length >= 3) {
            if (w.indexOf(lowerKw) === 0) return true;
            if (lowerKw.endsWith('e') && lowerKw.length >= 4 && w.indexOf(lowerKw.slice(0, -1)) === 0) return true;
          }
          return false;
        });

        if (matched) {
          score++;
          weight += (lowerKw === 'do' ? 1 : lowerKw.length);
        }
      });

      if (score > highestScore || (score === highestScore && weight > highestWeight)) {
        highestScore = score;
        highestWeight = weight;
        bestTopic = topic;
      }
    });

    if (bestTopic && highestScore > 0) {
      if (isRoastMode) {
        return typeof bestTopic.reply === 'object' ? (bestTopic.reply[detectedLang] || bestTopic.reply['english']) : bestTopic.reply;
      }
      return bestTopic.reply;
    }

    if (isRoastMode) {
      return ROAST_DEFAULT[detectedLang] || ROAST_DEFAULT['english'];
    }

    return "I'm still learning! Try asking about his 'Location', 'Favorite Game', 'Tech Stack', or how to 'Hire' him.";
  }

  /* ---------- Safety Filter ---------- */
  var BLOCKED_WORDS = [
    // English
    'fuck', 'fucking', 'fucked', 'fucker', 'motherfucker',
    'shit', 'shitty', 'bitch', 'bitches', 'asshole', 'bastard',
    'dick', 'dicks', 'pussy', 'pussies', 'cunt', 'cunts', 'cock', 'cocks',
    'sex', 'sexy', 'porn', 'porno', 'nude', 'nudes', 'slut', 'sluts', 'whore', 'whores',
    'fag', 'faggot', 'nigger', 'nigga', 'boobs', 'tits', 'penis', 'vagina',
    // Tagalog / Filipino
    'gago', 'gaga', 'tarantado', 'tarantada', 'tangina', 'tanginamo', 'putangina',
    'puta', 'pota', 'bobo', 'ulol', 'tanga', 'hudas', 'kantot', 'kantutan', 'iyot',
    'tamod', 'puki', 'pekpek', 'titi', 'bayag', 'burat', 'kupal', 'hinayupak', 'pakyu',
    // Bisaya (Cebuano)
    'yawa', 'piste', 'pisti', 'bilat', 'oten', 'utin', 'kayat', 'buang', 'kolera', 'loslos', 'lubot', 'atay',
    // Ilocano
    'ukinam', 'ukinana', 'uki', 'buto', 'oto', 'bagtit', 'attit', 'ugok'
  ];

  function isInappropriate(msg) {
    var clean = msg.toLowerCase().replace(/[^\w\s]/g, ' ');
    var words = clean.split(/\s+/).filter(Boolean);
    return words.some(function (w) {
      return BLOCKED_WORDS.indexOf(w) !== -1;
    });
  }

  function getSafetyReply(lang) {
    if (!isRoastMode) {
      return "Let's keep it professional! I'm here to answer questions about Justine's work, art, or web development. 🚫";
    }
    if (lang === 'tagalog') {
      return "Hoy, magalang ka! Robot lang ako pero wala kang modo. 🚫";
    }
    if (lang === 'bisaya') {
      return "Hoy, respeto gamay! Robot lang ko pero bastos kaayo ka. 🚫";
    }
    if (lang === 'ilocano') {
      return "Hoy, adi ka bastos! Robot lang nak ngem awan ti galad mo. 🚫";
    }
    return "Whoa, watch your mouth! I'm a robot, I don't have feelings, but you might hurt yourself with that vocabulary. 🤬";
  }

  function sendChat(customText) {
    var text = (typeof customText === 'string' ? customText : (chatbotInput ? chatbotInput.value : '')).trim();
    if (!text) return;
    addChatMsg(text, 'user');
    if (chatbotInput) chatbotInput.value = '';
    setTimeout(function() {
      var lang = detectLanguage(text);
      if (isInappropriate(text)) {
        addChatMsg(getSafetyReply(lang), 'bot');
      } else {
        addChatMsg(getBotReply(text, lang), 'bot');
      }
    }, 800);
  }

  if (chatbotSend) {
    chatbotSend.addEventListener('click', function () { sendChat(); });
  }
  if (chatbotInput) {
    chatbotInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendChat();
    });
  }

  var quickBtns = document.querySelectorAll('.chatbot__quick-btn');
  quickBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var query = btn.getAttribute('data-query') || btn.textContent.trim();
      sendChat(query);
    });
  });

  var chatbotModeToggle = document.getElementById('chatbotModeToggle');
  if (chatbotModeToggle) {
    chatbotModeToggle.addEventListener('click', function () {
      isRoastMode = !isRoastMode;
      if (isRoastMode) {
        chatbotModeToggle.textContent = 'Roast Mode 🔥';
        chatbotModeToggle.classList.add('is-roast');
        chatbotModeToggle.setAttribute('aria-pressed', 'true');
        addChatMsg("Roast mode activated. Bring it on, mortal. 🔥", 'bot');
      } else {
        chatbotModeToggle.textContent = 'Formal Mode 🤖';
        chatbotModeToggle.classList.remove('is-roast');
        chatbotModeToggle.setAttribute('aria-pressed', 'false');
        addChatMsg("Back to professional mode. How can I help you?", 'bot');
      }
    });
  }

  /* ---------- CV Modal ---------- */
  console.log("Btn:", document.getElementById('viewCvBtn'), "Modal:", document.getElementById('cvModal'));
  var viewCvBtn = document.getElementById('viewCvBtn');
  var cvModal = document.getElementById('cvModal');
  if (viewCvBtn && cvModal) {
    var cvOverlay = cvModal.querySelector('.cv-modal__overlay');
    var cvClose = cvModal.querySelector('.cv-modal__close');
    function openCvModal() {
      console.log("View CV clicked");
      cvModal.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function closeCvModal() {
      cvModal.hidden = true;
      document.body.style.overflow = '';
    }
    viewCvBtn.addEventListener('click', openCvModal);
    if (cvOverlay) cvOverlay.addEventListener('click', closeCvModal);
    if (cvClose) cvClose.addEventListener('click', closeCvModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cvModal && !cvModal.hidden) {
        closeCvModal();
      }
    });
  } else {
    console.log("CV button/modal not found", viewCvBtn, cvModal);
  }

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var htmlEl = document.documentElement;

  function setThemeAttr(theme, persist) {
    htmlEl.setAttribute('data-theme', theme);
    htmlEl.classList.toggle('dark-theme', theme === 'dark');
    htmlEl.classList.toggle('light-theme', theme === 'light');
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
  }

  setThemeAttr(htmlEl.getAttribute('data-theme') || 'dark', false);

  themeToggle.addEventListener('click', function () {
    var current = htmlEl.getAttribute('data-theme');
    setThemeAttr(current === 'dark' ? 'light' : 'dark', true);
  });

  renderGallery();
  renderFeaturedGallery();
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
  var LINK_DIST = 120;

  var stars = [];
  var pairs = [];
  var glowT = [];
  var mouse = { x: -9999, y: -9999 };
  var moveOn = false;
  var rafId = 0;
  var w = 0;
  var h = 0;
  var accent = '255,87,34';
  var glowAccent = '255,129,89';

  try {
    var accentVal = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    var hex = /^#([0-9a-f]{6})$/i.exec(accentVal);
    if (hex) {
      var n = parseInt(hex[1], 16);
      accent = ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
    } else {
      var rgb = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i.exec(accentVal);
      if (rgb) accent = rgb[1] + ',' + rgb[2] + ',' + rgb[3];
    }
  } catch (e) {}

  var glowParts = accent.split(',');
  for (var gi = 0; gi < 3; gi++) {
    glowParts[gi] = Math.min(255, Math.round(Number(glowParts[gi]) + (255 - Number(glowParts[gi])) * 0.25));
  }
  glowAccent = glowParts.join(',');

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
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.8 + Math.random() * 1.4,
        base: 0.3 + Math.random() * 0.15
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
      ctx.strokeStyle = 'rgba(255,255,255,' + (0.13 + t * 0.55).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(stars[pairs[i]].x, stars[pairs[i]].y + offY);
      ctx.lineTo(stars[pairs[i + 1]].x, stars[pairs[i + 1]].y + offY);
      ctx.stroke();
    }

    for (i = 0; i < stars.length; i++) {
      var s = stars[i];
      var sy = s.y + offY;
      var g = glowT[i];
      if (g > 0) {
        var haloR = s.r + 6 + g * 14;
        var halo = ctx.createRadialGradient(s.x, sy, 0, s.x, sy, haloR);
        halo.addColorStop(0, 'rgba(' + glowAccent + ',' + (g * 0.9).toFixed(3) + ')');
        halo.addColorStop(0.4, 'rgba(' + glowAccent + ',' + (g * 0.35).toFixed(3) + ')');
        halo.addColorStop(1, 'rgba(' + glowAccent + ',0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(s.x, sy, haloR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,' + (s.base + g * (1 - s.base)).toFixed(3) + ')';
      } else {
        ctx.fillStyle = 'rgba(255,255,255,' + s.base.toFixed(3) + ')';
      }
      ctx.beginPath();
      ctx.arc(s.x, sy, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
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