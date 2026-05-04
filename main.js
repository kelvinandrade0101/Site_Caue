
// ---- Config ----
if (!window.WHATSAPP_NUMBER) window.WHATSAPP_NUMBER = "5511967225531";
if (!window.INSTAGRAM_URL)   window.INSTAGRAM_URL   = "https://www.instagram.com/caue.andrade";

// ---- WhatsApp buttons ----
document.querySelectorAll('[data-wa]').forEach(btn => {
  btn.addEventListener('click', () => {
    const number = window.WHATSAPP_NUMBER.replace(/\D/g, '');
    const msg    = encodeURIComponent("Olá, quero saber mais sobre gestão de tráfego pago.");
    window.open(`https://wa.me/${number}?text=${msg}`, '_blank');
  });
});

// ---- Hamburger menu ----
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(!expanded));
    document.body.style.overflow = !expanded ? 'hidden' : '';

    // Toggle icon
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars', expanded);
    icon.classList.toggle('fa-times', !expanded);
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      const icon = hamburger.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ---- Header scroll effect ----
const header = document.getElementById('header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
