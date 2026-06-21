const layoutState = {
  sections: [],
  projects: [],
  companyButtons: [],
  projectButtons: [],
};
let backgroundMediaTimer = 0;

function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
}

function initThemeManager(root = document) {
  setTheme(getPreferredTheme());

  root.querySelectorAll('.theme').forEach((button) => {
    button.addEventListener('click', toggleTheme);
  });
}

function initLazyLoad() {
  const targets = document.querySelectorAll('img[data-src], video[data-src]');

  if (!targets.length) return;

  const loadTarget = (element) => {
    loadDeferredMedia(element, 'nearby');
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      loadTarget(entry.target);
      observerInstance.unobserve(entry.target);
    });
  }, { rootMargin: '720px 0px', threshold: 0.01 });

  targets.forEach((element) => observer.observe(element));
}

function requestIdleTask(callback, timeout = 800) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }

  window.setTimeout(() => callback({ didTimeout: true, timeRemaining: () => 16 }), 0);
}

function runAfterLoad(callback) {
  const run = () => window.setTimeout(() => requestIdleTask(callback), 700);

  if (document.readyState === 'complete') {
    run();
    return;
  }

  window.addEventListener('load', run, { once: true });
}

function loadDeferredMedia(element, mode = 'nearby') {
  const source = element.dataset.src;

  if (!source) return Promise.resolve();

  if (element.dataset.loadingMedia === 'true') return Promise.resolve();

  let isFinished = false;
  const finishLoading = () => {
    if (isFinished) return;

    isFinished = true;
    element.dataset.mediaLoaded = 'true';

    window.setTimeout(() => {
      element.removeAttribute('data-src');
      element.removeAttribute('data-loading-media');
    }, 1150);
  };

  element.dataset.loadingMedia = 'true';

  if (element.tagName === 'IMG') {
    element.loading = 'eager';
    element.decoding = 'async';
    element.fetchPriority = mode === 'background' ? 'low' : 'auto';
    element.src = source;

    if (typeof element.decode === 'function') {
      return element.decode().catch(() => {}).finally(finishLoading);
    }

    return new Promise((resolve) => {
      const done = () => {
        finishLoading();
        resolve();
      };

      element.addEventListener('load', done, { once: true });
      element.addEventListener('error', done, { once: true });
    });
  }

  if (element.tagName === 'VIDEO') {
    element.preload = mode === 'background' ? 'auto' : 'metadata';

    return new Promise((resolve) => {
      const done = () => {
        window.clearTimeout(timeoutId);
        finishLoading();
        resolve();
      };
      const timeoutId = window.setTimeout(done, mode === 'background' ? 2600 : 900);

      element.addEventListener('loadedmetadata', done, { once: true });
      element.addEventListener('error', done, { once: true });
      element.src = source;
      element.load();
    });
  }

  return Promise.resolve();
}

function initBackgroundMediaLoading() {
  const getQueue = () => Array.from(document.querySelectorAll('img[data-src]:not([data-loading-media]), video[data-src]:not([data-loading-media])'));

  const scheduleDrain = (delay = 0) => {
    window.clearTimeout(backgroundMediaTimer);
    backgroundMediaTimer = window.setTimeout(drainQueue, delay);
  };

  const drainQueue = () => {
    const next = getQueue()[0];

    if (!next) return;

    requestIdleTask(() => {
      const current = getQueue()[0];

      if (!current) return;

      loadDeferredMedia(current, 'background').finally(() => {
        scheduleDrain(current.tagName === 'VIDEO' ? 700 : 90);
      });
    });
  };

  runAfterLoad(() => scheduleDrain());
}

function prepareSections() {
  layoutState.sections = Array.from(document.querySelectorAll('main > section'));
  layoutState.projects = [];

  layoutState.sections.forEach((section, index) => {
    const title = section.querySelector('h2');

    if (!section.id) {
      section.id = `company-${index + 1}`;
    }

    section.dataset.companyName = title?.textContent.trim() || `Company ${index + 1}`;

    section.querySelectorAll('.project').forEach((project, projectIndex) => {
      const projectTitle = project.querySelector('h3');
      const projectDate = project.querySelector('.date');

      if (!project.id) {
        project.id = `${section.id}-project-${projectIndex + 1}`;
      }

      project.dataset.companyId = section.id;
      project.dataset.projectName = projectTitle?.textContent.trim() || `Project ${projectIndex + 1}`;
      project.dataset.projectDate = projectDate?.textContent.trim() || '';
      layoutState.projects.push(project);
    });
  });
}

function scrollToTarget(target) {
  const header = document.querySelector('#header');
  const offset = (header?.offsetHeight || 0) + 24;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}

function scrollActiveNavButtonIntoView(button, behavior = 'auto') {
  const container = button.closest('.company-nav, .menu-panel');

  if (!container || container.clientHeight === 0) return;

  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const stickyHeader = container.matches('.menu-panel') ? container.querySelector('.menu-header') : null;
  const topInset = (stickyHeader?.offsetHeight || 0) + 12;
  const bottomInset = 16;
  const visibleTop = containerRect.top + topInset;
  const visibleBottom = containerRect.bottom - bottomInset;
  let top = 0;

  if (buttonRect.top < visibleTop) {
    top = buttonRect.top - visibleTop;
  } else if (buttonRect.bottom > visibleBottom) {
    top = buttonRect.bottom - visibleBottom;
  }

  if (top === 0) return;

  container.scrollBy({ top, behavior });
}

function syncActiveNavScroll(activeProjectId, activeCompanyId, behavior = 'auto') {
  const activeTargetId = activeProjectId || activeCompanyId;

  if (!activeTargetId) return;

  document.querySelectorAll(`.company-nav .item[data-target="${activeTargetId}"], .menu-panel .item[data-target="${activeTargetId}"]`)
    .forEach((button) => scrollActiveNavButtonIntoView(button, behavior));
}

function createNavButton(target, { depth, label, kind, title }) {
  const button = document.createElement('button');

  button.className = `item depth-${depth}`;
  button.type = 'button';
  button.textContent = label;
  button.dataset.target = target.id;
  button.dataset.kind = kind;

  if (title) {
    button.title = title;
  }

  button.addEventListener('click', () => {
    closeMenu();
    scrollToTarget(target);
  });

  return button;
}

function initCompanyNav() {
  const desktopNav = document.createElement('nav');

  desktopNav.className = 'company-nav';
  desktopNav.setAttribute('aria-label', '회사 목록');

  const mobileList = document.querySelector('.menu-panel .company-list');

  layoutState.sections.forEach((section) => {
    const desktopButton = createNavButton(section, {
      depth: 1,
      label: section.dataset.companyName,
      kind: 'company',
    });
    const mobileButton = createNavButton(section, {
      depth: 1,
      label: section.dataset.companyName,
      kind: 'company',
    });

    desktopNav.appendChild(desktopButton);
    mobileList?.appendChild(mobileButton);

    layoutState.companyButtons.push(desktopButton, mobileButton);

    layoutState.projects
      .filter((project) => project.dataset.companyId === section.id)
      .forEach((project) => {
        const desktopProjectButton = createNavButton(project, {
          depth: 2,
          label: project.dataset.projectName,
          kind: 'project',
          title: project.dataset.projectDate,
        });
        const mobileProjectButton = createNavButton(project, {
          depth: 2,
          label: project.dataset.projectName,
          kind: 'project',
          title: project.dataset.projectDate,
        });

        desktopNav.appendChild(desktopProjectButton);
        mobileList?.appendChild(mobileProjectButton);

        layoutState.projectButtons.push(desktopProjectButton, mobileProjectButton);
      });
  });

  document.body.appendChild(desktopNav);
}

function createMenuPanel() {
  const panel = document.createElement('div');

  panel.className = 'menu-panel';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = `
    <div class="menu-header">
      <button class="theme" type="button" title="테마 변경">테마</button>
      <button class="menu-close" type="button" aria-label="회사 목록 닫기"></button>
    </div>
    <nav class="company-list" aria-label="회사 목록"></nav>
  `;

  document.body.appendChild(panel);

  return panel;
}

function openMenu() {
  const panel = document.querySelector('.menu-panel');
  const menuButton = document.querySelector('#header .menu-toggle');
  const closeButton = panel?.querySelector('.menu-close');

  document.body.dataset.menu = 'open';
  panel?.setAttribute('aria-hidden', 'false');
  menuButton?.setAttribute('aria-expanded', 'true');
  closeButton?.focus();

  window.requestAnimationFrame(() => {
    const activeButton = panel?.querySelector('.company-list .item.is-active');

    if (activeButton) {
      scrollActiveNavButtonIntoView(activeButton);
    }
  });
}

function closeMenu() {
  const panel = document.querySelector('.menu-panel');
  const menuButton = document.querySelector('#header .menu-toggle');

  document.body.dataset.menu = 'closed';
  panel?.setAttribute('aria-hidden', 'true');
  menuButton?.setAttribute('aria-expanded', 'false');
}

function initMenu() {
  const panel = createMenuPanel();
  const menuButton = document.querySelector('#header .menu-toggle');
  const closeButton = panel.querySelector('.menu-close');

  menuButton?.addEventListener('click', openMenu);
  closeButton?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

function initActiveCompanyObserver() {
  if (!layoutState.sections.length) return;

  let ticking = false;
  let currentActiveId = '';
  let currentActiveProjectId = '';
  const getDocumentTop = (element) => element.getBoundingClientRect().top + window.scrollY;

  const setActiveSection = () => {
    const header = document.querySelector('#header');
    const offset = (header?.offsetHeight || 0) + 24;
    const anchor = window.scrollY + offset + 1;
    const activeSection = layoutState.sections.reduce((current, section) => {
      return getDocumentTop(section) <= anchor ? section : current;
    }, layoutState.sections[0]);
    const sectionProjects = layoutState.projects.filter((project) => project.dataset.companyId === activeSection.id);
    const activeProject = sectionProjects.reduce((current, project) => {
      return getDocumentTop(project) <= anchor ? project : current;
    }, sectionProjects[0]);
    const activeId = activeSection.id;
    const activeProjectId = activeProject?.id;

    layoutState.companyButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.target === activeId);
    });
    layoutState.projectButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.target === activeProjectId);
    });

    if (activeId !== currentActiveId || activeProjectId !== currentActiveProjectId) {
      syncActiveNavScroll(activeProjectId, activeId);
      currentActiveId = activeId;
      currentActiveProjectId = activeProjectId;
    }

    ticking = false;
  };

  const requestActiveUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(setActiveSection);
  };

  setActiveSection();
  window.addEventListener('scroll', requestActiveUpdate, { passive: true });
  window.addEventListener('resize', requestActiveUpdate);
  window.addEventListener('load', requestActiveUpdate);
}

function initVideoInteraction() {
  const videos = Array.from(document.querySelectorAll('.media-gallery .video'));

  if (!videos.length) return;

  const playRatio = 2 / 3;
  const fastScrollSpeed = 2.4;
  const scrollSettleDelay = 180;
  let lastScrollY = window.scrollY;
  let lastScrollTime = performance.now();
  let isFastScrolling = false;
  let scrollSettleTimer = 0;
  let ticking = false;

  const getVisibleRatio = (video) => {
    const rect = video.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, viewportHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    if (rect.height <= 0 || rect.bottom <= 0 || rect.top >= viewportHeight) {
      return 0;
    }

    return visibleHeight / rect.height;
  };

  const playVideo = (video) => {
    if (!video.paused) return;

    const loadPromise = video.dataset.src ? loadDeferredMedia(video, 'nearby') : Promise.resolve();

    loadPromise.then(() => {
      if (isFastScrolling || getVisibleRatio(video) < playRatio) return;

      video.play().catch(() => {});
    });
  };

  const syncVideoPlayback = () => {
    if (isFastScrolling) {
      ticking = false;
      return;
    }

    videos.forEach((video) => {
      const visibleRatio = getVisibleRatio(video);

      if (visibleRatio >= playRatio) {
        playVideo(video);
      } else if (visibleRatio === 0 && !video.paused) {
        video.pause();
      }
    });

    ticking = false;
  };

  const requestPlaybackSync = () => {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(syncVideoPlayback);
  };

  const updateScrollSpeed = () => {
    const now = performance.now();
    const elapsed = Math.max(1, now - lastScrollTime);
    const distance = Math.abs(window.scrollY - lastScrollY);

    isFastScrolling = distance / elapsed > fastScrollSpeed;
    lastScrollY = window.scrollY;
    lastScrollTime = now;

    window.clearTimeout(scrollSettleTimer);
    scrollSettleTimer = window.setTimeout(() => {
      isFastScrolling = false;
      requestPlaybackSync();
    }, scrollSettleDelay);

    requestPlaybackSync();
  };

  videos.forEach((video) => {
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
  });

  window.addEventListener('scroll', updateScrollSpeed, { passive: true });
  window.addEventListener('resize', requestPlaybackSync);
  window.addEventListener('load', requestPlaybackSync);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      videos.forEach((video) => video.pause());
      return;
    }

    requestPlaybackSync();
  });

  requestPlaybackSync();
}

function initPhotoViewer() {
  if (!window.PhotoSwipeLightbox || !window.PhotoSwipe) return;

  document.querySelectorAll('.media-gallery').forEach((gallery) => {
    const itemCount = gallery.querySelectorAll('.media-link').length;
    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: '.media-link',
      pswpModule: window.PhotoSwipe,
      appendToEl: document.body,
      mainClass: itemCount <= 1 ? 'pswp--single-item' : '',
      showHideAnimationType: 'zoom',
      initialZoomLevel: ({ elementSize, panAreaSize }) => Math.min(1, panAreaSize.x / elementSize.x),
      secondaryZoomLevel: 1,
      maxZoomLevel: 4,
      imageClickAction: 'zoom',
      tapAction: 'toggle-controls',
      doubleTapAction: 'zoom',
      wheelToZoom: true,
      closeOnVerticalDrag: false,
      loop: false,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    });

    lightbox.on('initialZoomPan', ({ slide }) => {
      slide.pan.y = 0;
    });

    lightbox.addFilter('itemData', (itemData) => {
      const link = itemData.element;
      const image = link.querySelector('img');
      const width = image?.naturalWidth || 1600;
      const height = image?.naturalHeight || 1000;

      return {
        ...itemData,
        src: link.getAttribute('href'),
        width,
        height,
        alt: image?.alt || '',
      };
    });

    lightbox.init();
  });
}

function initApp() {
  prepareSections();
  initMenu();
  initThemeManager();
  initCompanyNav();
  initActiveCompanyObserver();
  initLazyLoad();
  initVideoInteraction();

  document.body.dataset.loading = 'false';

  runAfterLoad(() => {
    initPhotoViewer();
    initBackgroundMediaLoading();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
