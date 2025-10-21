// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      const navLinks = document.getElementById('navLinks');
      const hamburger = document.querySelector('.hamburger');
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Libera o scroll
      }
    }
  });
});

// WhatsApp link configuration
if (!window.WHATSAPP_NUMBER) window.WHATSAPP_NUMBER = "5511967225531";
if (!window.INSTAGRAM_URL) window.INSTAGRAM_URL = "https://www.instagram.com/caue.andrade";

const waButtons = document.querySelectorAll('[data-wa]');
waButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const number = (window.WHATSAPP_NUMBER).replace(/\D/g, '');
    const msg = encodeURIComponent("Olá, quero saber mais sobre gestão de tráfego pago.");
    const url = `https://wa.me/${number}?text=${msg}`;
    window.open(url, '_blank');
  });
});

// Mobile hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isExpanded);
    
    if (navLinks.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });
}

// Efeito de sombra no Header ao rolar a página
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    header.style.background = 'rgba(255,255,255,.98)';
  } else {
    header.style.boxShadow = 'none';
    header.style.background = 'rgba(255,255,255,.9)';
  }
});
