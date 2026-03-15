/* ============================================
   Barroso & Magnum - Main JavaScript
   ============================================ */

// TRT Links Data
const trtLinks = {
  "AC": { "name": "Acre", "trt": "TRT 14", "url": "https://pje.trt14.jus.br/consultaprocessual/consulta-cidadao" },
  "AL": { "name": "Alagoas", "trt": "TRT 19", "url": "https://pje.trt19.jus.br/consultaprocessual/consulta-cidadao" },
  "AM": { "name": "Amazonas", "trt": "TRT 11", "url": "https://pje.trt11.jus.br/consultaprocessual/consulta-cidadao" },
  "AP": { "name": "Amapá", "trt": "TRT 8", "url": "https://pje.trt8.jus.br/consultaprocessual/consulta-cidadao" },
  "BA": { "name": "Bahia", "trt": "TRT 5", "url": "https://pje.trt5.jus.br/consultaprocessual/consulta-cidadao" },
  "CE": { "name": "Ceará", "trt": "TRT 7", "url": "https://pje.trt7.jus.br/consultaprocessual/consulta-cidadao" },
  "DF": { "name": "Distrito Federal", "trt": "TRT 10", "url": "https://pje.trt10.jus.br/consultaprocessual/consulta-cidadao" },
  "ES": { "name": "Espírito Santo", "trt": "TRT 17", "url": "https://pje.trt17.jus.br/consultaprocessual/consulta-cidadao" },
  "GO": { "name": "Goiás", "trt": "TRT 18", "url": "https://pje.trt18.jus.br/consultaprocessual/consulta-cidadao" },
  "MA": { "name": "Maranhão", "trt": "TRT 16", "url": "https://pje.trt16.jus.br/consultaprocessual/consulta-cidadao" },
  "MG": { "name": "Minas Gerais", "trt": "TRT 3", "url": "https://pje.trt3.jus.br/consultaprocessual/consulta-cidadao" },
  "MS": { "name": "Mato Grosso do Sul", "trt": "TRT 24", "url": "https://pje.trt24.jus.br/consultaprocessual/consulta-cidadao" },
  "MT": { "name": "Mato Grosso", "trt": "TRT 23", "url": "https://pje.trt23.jus.br/consultaprocessual/consulta-cidadao" },
  "PA": { "name": "Pará", "trt": "TRT 8", "url": "https://pje.trt8.jus.br/consultaprocessual/consulta-cidadao" },
  "PB": { "name": "Paraíba", "trt": "TRT 13", "url": "https://pje.trt13.jus.br/consultaprocessual/consulta-cidadao" },
  "PE": { "name": "Pernambuco", "trt": "TRT 6", "url": "https://pje.trt6.jus.br/consultaprocessual/consulta-cidadao" },
  "PI": { "name": "Piauí", "trt": "TRT 22", "url": "https://pje.trt22.jus.br/consultaprocessual/consulta-cidadao" },
  "PR": { "name": "Paraná", "trt": "TRT 9", "url": "https://pje.trt9.jus.br/consultaprocessual/consulta-cidadao" },
  "RJ": { "name": "Rio de Janeiro", "trt": "TRT 1", "url": "https://pje.trt1.jus.br/consultaprocessual/consulta-cidadao" },
  "RN": { "name": "Rio Grande do Norte", "trt": "TRT 21", "url": "https://pje.trt21.jus.br/consultaprocessual/consulta-cidadao" },
  "RO": { "name": "Rondônia", "trt": "TRT 14", "url": "https://pje.trt14.jus.br/consultaprocessual/consulta-cidadao" },
  "RR": { "name": "Roraima", "trt": "TRT 11", "url": "https://pje.trt11.jus.br/consultaprocessual/consulta-cidadao" },
  "RS": { "name": "Rio Grande do Sul", "trt": "TRT 4", "url": "https://pje.trt4.jus.br/consultaprocessual/consulta-cidadao" },
  "SC": { "name": "Santa Catarina", "trt": "TRT 12", "url": "https://pje.trt12.jus.br/consultaprocessual/consulta-cidadao" },
  "SE": { "name": "Sergipe", "trt": "TRT 20", "url": "https://pje.trt20.jus.br/consultaprocessual/consulta-cidadao" },
  "SP": { "name": "São Paulo", "trt": "TRT 2/15", "url": "https://pje.trt2.jus.br/consultaprocessual/consulta-cidadao" },
  "TO": { "name": "Tocantins", "trt": "TRT 10", "url": "https://pje.trt10.jus.br/consultaprocessual/consulta-cidadao" }
};

// ---- Smooth Scroll ----
function smoothScroll(e, target) {
  e.preventDefault();
  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // Close mobile menu
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('active');
}

// ---- Navbar ----
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // ---- Intersection Observer for animations ----
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });

  // ---- Current Year ----
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Populate TRT Select ----
  const trtSelect = document.getElementById('trtSelect');
  if (trtSelect) {
    const sortedStates = Object.keys(trtLinks).sort(function(a, b) {
      return trtLinks[a].name.localeCompare(trtLinks[b].name);
    });
    sortedStates.forEach(function(code) {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = trtLinks[code].name + ' - ' + trtLinks[code].trt;
      trtSelect.appendChild(opt);
    });
  }

  // ---- Initialize Swiper 3D Carousel ----
  if (typeof Swiper !== 'undefined') {
    initServicesCarousel();
  }
});

// ---- TRT Redirect ----
function redirectToTRT(stateCode) {
  if (stateCode && trtLinks[stateCode]) {
    window.open(trtLinks[stateCode].url, '_blank', 'noopener,noreferrer');
  }
}

// ---- 3D Carousel ----
function initServicesCarousel() {
  const swiperEl = document.querySelector('.services-swiper');
  if (!swiperEl) return;

  const swiper = new Swiper('.services-swiper', {
    loop: true,
    speed: 600,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    a11y: {
      prevSlideMessage: 'Serviço anterior',
      nextSlideMessage: 'Próximo serviço',
      slideLabelMessage: 'Serviço {{index}} de {{slidesLength}}'
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    on: {
      slideChangeTransitionStart: function() {
        apply3DTransforms(this);
      },
      init: function() {
        apply3DTransforms(this);
      },
      resize: function() {
        apply3DTransforms(this);
      }
    }
  });
}

function apply3DTransforms(swiperInstance) {
  const slides = swiperInstance.slides;
  const activeIndex = swiperInstance.activeIndex;

  slides.forEach(function(slide, index) {
    slide.style.transition = 'all 0.6s ease-out';
    
    if (slide.classList.contains('swiper-slide-active')) {
      slide.style.transform = 'rotateY(0deg) scale(1.1) translateZ(0)';
      slide.style.zIndex = '10';
      slide.style.opacity = '1';
      slide.style.filter = 'none';
    } else if (slide.classList.contains('swiper-slide-prev')) {
      slide.style.transform = 'rotateY(45deg) translateZ(-120px) scale(0.9)';
      slide.style.zIndex = '5';
      slide.style.opacity = '0.7';
      slide.style.filter = 'blur(1px)';
    } else if (slide.classList.contains('swiper-slide-next')) {
      slide.style.transform = 'rotateY(-45deg) translateZ(-120px) scale(0.9)';
      slide.style.zIndex = '5';
      slide.style.opacity = '0.7';
      slide.style.filter = 'blur(1px)';
    } else {
      slide.style.transform = 'rotateY(0deg) translateZ(-200px) scale(0.75)';
      slide.style.zIndex = '1';
      slide.style.opacity = '0.3';
      slide.style.filter = 'blur(2px)';
    }
  });
}
