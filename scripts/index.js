const layoutState = {
  sections: [],
  projects: [],
  companyButtons: [],
  projectButtons: [],
};

function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
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

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;

      element.src = element.dataset.src;

      if (element.tagName === 'VIDEO') {
        element.load();
      }

      element.removeAttribute('data-src');
      observerInstance.unobserve(element);
    });
  }, { rootMargin: '160px', threshold: 0.01 });

  targets.forEach((element) => observer.observe(element));
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
  document.querySelectorAll('.media-gallery .video').forEach((video) => {
    video.controls = true;
    video.preload = 'metadata';
  });
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

document.addEventListener('DOMContentLoaded', () => {
  prepareSections();
  initMenu();
  initThemeManager();
  initCompanyNav();
  initActiveCompanyObserver();
  initLazyLoad();
  initVideoInteraction();
  initPhotoViewer();

  document.body.dataset.loading = 'false';
});
