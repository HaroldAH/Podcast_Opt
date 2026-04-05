// ============ HEADER SCROLL ============
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
let menuOpen = false;

function getMenuIcon() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
}
function getXIcon() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
}

if (hamburger && navMobile) {
  hamburger.innerHTML = getMenuIcon();
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navMobile.classList.toggle('open', menuOpen);
    hamburger.innerHTML = menuOpen ? getXIcon() : getMenuIcon();
  });
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      navMobile.classList.remove('open');
      hamburger.innerHTML = getMenuIcon();
    });
  });
}

// ============ ACTIVE NAV LINK ============
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ============ SCROLL REVEAL ============
const scrollRevealEls = document.querySelectorAll('.scroll-reveal');
if (scrollRevealEls.length > 0 && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0');
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  scrollRevealEls.forEach(el => revealObserver.observe(el));
}

// ============ INTERACTIVE HOME BUTTONS ============
const interactiveBtns = document.querySelectorAll('.interactive-btn[data-interactive]');
interactiveBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    interactiveBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ============ INTERACTIVE LIVE BUTTONS ============
const liveBtns = document.querySelectorAll('.interactive-live-btn');
liveBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    liveBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// ============ PORTADA MODAL ============
const portadaModal = document.getElementById('portadaModal');
const portadaBtn = document.getElementById('portadaBtn');

if (portadaBtn && portadaModal) {
  portadaBtn.addEventListener('click', () => {
    portadaModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  portadaModal.addEventListener('click', () => {
    portadaModal.classList.remove('open');
    document.body.style.overflow = '';
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && portadaModal.classList.contains('open')) {
      portadaModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

console.log('🎙️ HF_AVILA Podcast - Cargado');
