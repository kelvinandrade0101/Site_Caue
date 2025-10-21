// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Fecha o menu hamburguer se estiver aberto ao clicar em um link
      const navLinks = document.getElementById('navLinks');
      const hamburger = document.querySelector('.hamburger');
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// WhatsApp link configuration – replace with your number before uploading
// Set window.WHATSAPP_NUMBER = "55SEUNUMERO" in a <script> before main.js or edit below:
if (!window.WHATSAPP_NUMBER) window.WHATSAPP_NUMBER = "5511967225531"; // NÚMERO DO SEU IRMÃO
if (!window.INSTAGRAM_URL) window.INSTAGRAM_URL = "https://www.instagram.com/caue.andrade"; // LINK DO INSTAGRAM
// if (!window.EMAIL_ADDRESS) window.EMAIL_ADDRESS = "seuemail@exemplo.com"; // VARIÁVEL DE E-MAIL REMOVIDA

const waButtons = document.querySelectorAll('[data-wa]');
waButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const number = (window.WHATSAPP_NUMBER || "55XXXXXXXXXXX").replace(/\D/g, '');
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
    
    // Bloqueia o scroll do body quando o menu está aberto
    if (navLinks.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });
}

// Não há necessidade de atualizar os hrefs dos botões flutuantes via JS
// pois eles já estão definidos diretamente no HTML com os links corretos.
// A lógica para o botão de e-mail foi removida.