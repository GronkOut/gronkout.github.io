const ScrollManager = {
  sections: [],
  scrollbars: [],
  currentSection: 0,
  touchStartY: 0,
  isTransitioning: false,
};

function initLazyLoad() {
  const element = document.querySelectorAll('img[data-src], video[data-src]');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;

        if (element.tagName === 'IMG') {
          element.src = element.dataset.src;
        } else if (element.tagName === 'VIDEO') {
          element.src = element.dataset.src;
          element.load();
        }

        element.removeAttribute('data-src');
        observer.unobserve(element);
      }
    });
  }, { rootMargin: '100px', threshold: 0.1 });

  element.forEach(el => observer.observe(el));
}

function initSmoothScrollbar() {
  Scrollbar.use(OverscrollPlugin);

  ScrollManager.sections.forEach((section) => {
    const content = section.querySelector('.content');
    const scrollbar = Scrollbar.init(content, {
      damping: 0.1,
      delegateTo: content,
      alwaysShowTracks: true,
      plugins: {
        overscroll: {
          effect: 'bounce',
          damping: 0.15,
          maxOverscroll: 150
        }
      }
    });

    ScrollManager.scrollbars.push(scrollbar);

    scrollbar.track.xAxis.element.remove();
  });
}

function updateVideoPlayback() {
  ScrollManager.sections.forEach((section, index) => {
    const video = section.querySelector('.background .video');

    if (!video) return;

    video.playbackRate = 0.8;

    if (index === ScrollManager.currentSection) {
      if (video.readyState >= 3) {
        video.play().catch(e => console.log('Video play failed:', e));
      } else {
        video.addEventListener('canplay', function playOnceLoaded() {
          video.play().catch(e => console.log('Video play failed:', e));
          video.removeEventListener('canplay', playOnceLoaded);
        });
      }
    } else {
      video.pause();
    }
  });
}

function updateSectionsPosition() {
  ScrollManager.sections.forEach((section, i) => {
    section.style.transform = `translateY(${(i - ScrollManager.currentSection) * 100}%)`;
  });
}

function scrollToSection(index) {
  if (ScrollManager.currentSection === index || ScrollManager.isTransitioning) return;

  ScrollManager.isTransitioning = true;
  ScrollManager.currentSection = index;

  updateSectionsPosition();

  setTimeout(() => {
    ScrollManager.isTransitioning = false;

    updateVideoPlayback();
  }, 500);
}

function initThemeManager() {
  if (localStorage.getItem('theme')) {
    document.body.dataset.theme = localStorage.getItem('theme');
  } else {
    document.body.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.querySelector('#header .theme').addEventListener('click', () => {
    const theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';

    document.body.dataset.theme = theme;

    localStorage.setItem('theme', theme);
  });
}

function initSwiper() {
  document.querySelectorAll('.swiper').forEach((element) => {
    const firstVideo = element.querySelector('.swiper-slide video');

    new Swiper(element, {
      slidesPerView: 'auto',
      autoHeight: true,
      observer: true,
      observeParents: true,
      navigation: {
        prevEl: element.querySelector('.swiper-button-prev'),
        nextEl: element.querySelector('.swiper-button-next'),
      },
      pagination: {
        el: element.querySelector('.swiper-pagination'),
      },
      on: {
        init: (swiperInstance) => {
          if (firstVideo) {
            firstVideo.addEventListener('loadedmetadata', () => {
              swiperInstance.update();
            });
          }
        },
      },
    });
  });
}

function initPhotoViewer() {
  document.querySelectorAll('.swiper').forEach((element) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: element,
      children: '.image',
      pswpModule: window.PhotoSwipe,
      showHideAnimationType: 'zoom',
      imageClickAction: 'toggle-controls',
      padding: { top: 40, bottom: 40, left: 40, right: 40 },
      zoom: false,
      loop: false,
      wheelToZoom: true,
      closeOnVerticalDrag: false,
    });

    lightbox.addFilter('itemData', (itemData) => {
      const { src, naturalWidth, naturalHeight, alt } = itemData.element;

      return { ...itemData, src, width: naturalWidth || 1200, height: naturalHeight || 900, alt: alt || '' };
    });

    lightbox.init();
  });
}

function initVideoInteraction() {
  document.querySelectorAll('.swiper .video').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.playbackRate = 2;
      element.play();
    });

    element.addEventListener('mouseleave', () => {
      element.pause();
    });

    element.addEventListener('click', () => {
      window.open(element.getAttribute('src'), '_blank');
    });
  });
}

function initProgressBar() {
  const progressBar = document.querySelector('#footer .progress');

  function updateProgressBar() {
    const totalSections = ScrollManager.sections.length;
    const currentScrollbar = ScrollManager.scrollbars[ScrollManager.currentSection];
    const { offset, limit } = currentScrollbar;

    let sectionProgress = 0;

    if (limit.y > 0) {
      sectionProgress = offset.y / limit.y;
    }

    const totalProgress = (ScrollManager.currentSection + sectionProgress) / totalSections;

    progressBar.style.width = `${totalProgress * 100}%`;
  }

  updateProgressBar();

  ScrollManager.scrollbars.forEach((scrollbar) => {
    scrollbar.addListener(updateProgressBar);
  });

  const originalScrollToSection = scrollToSection;

  scrollToSection = function(index) {
    originalScrollToSection(index);

    setTimeout(updateProgressBar, 500);
  };
}

window.addEventListener('load', () => {
  ScrollManager.sections = document.querySelectorAll('section');

  initLazyLoad();

  initSmoothScrollbar();

  updateSectionsPosition();
  updateVideoPlayback();

  initThemeManager();
  initSwiper();
  initPhotoViewer();
  initVideoInteraction();
  initProgressBar();

  window.addEventListener('wheel', (event) => {
    if (ScrollManager.isTransitioning) return;

    const currentScrollbar = ScrollManager.scrollbars[ScrollManager.currentSection];
    const { offset, limit } = currentScrollbar;
    const isScrollingDown = event.deltaY > 0;

    const isAtEdge = isScrollingDown ? offset.y >= limit.y - 2 : offset.y <= 2;

    if (isAtEdge) {
      const targetSection = isScrollingDown ? ScrollManager.currentSection + 1 : ScrollManager.currentSection - 1;

      if (targetSection >= 0 && targetSection < ScrollManager.sections.length) {
        event.preventDefault();

        scrollToSection(targetSection);
      }
    }
  }, { passive: false });

  window.addEventListener('touchstart', (event) => {
    if (!ScrollManager.isTransitioning) {
      ScrollManager.touchStartY = event.touches[0].clientY;
    }
  });

  window.addEventListener('touchend', (event) => {
    if (ScrollManager.isTransitioning) return;

    const touchEndY = event.changedTouches[0].clientY;
    const delta = ScrollManager.touchStartY - touchEndY;

    if (Math.abs(delta) <= 50) return;

    const isScrollingDown = delta > 0;
    const currentScrollbar = ScrollManager.scrollbars[ScrollManager.currentSection];
    const { offset, limit } = currentScrollbar;
    const isAtEdge = isScrollingDown ? offset.y >= limit.y - 2 : offset.y <= 2;

    if (isAtEdge) {
      const targetSection = isScrollingDown ? ScrollManager.currentSection + 1 : ScrollManager.currentSection - 1;

      if (targetSection >= 0 && targetSection < ScrollManager.sections.length) {
        scrollToSection(targetSection);
      }
    }
  });

  window.addEventListener('resize', () => {
    ScrollManager.scrollbars.forEach(scrollbar => scrollbar.update());
  });
});
