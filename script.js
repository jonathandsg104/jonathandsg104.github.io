const roles = ['Dev Fullstack', 'Dev Frontend', 'Dev Backend', 'Dev Mobile'];

let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {

  const el = document.getElementById('typing');

  const current = roles[roleIndex];

  if (!isDeleting) { charIndex++; el.textContent = current.slice(0, charIndex); }

  else { charIndex--; el.textContent = current.slice(0, charIndex); }

  if (!isDeleting && charIndex === current.length) { isDeleting = true; setTimeout(typeEffect, 1500); return; }

  if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }

  setTimeout(typeEffect, isDeleting ? 60 : 100);

}

typeEffect();



// Menu hamburger

document.getElementById('hamburger').addEventListener('click', () => {

  document.getElementById('navLinks').classList.toggle('open');

});



// Navbar scroll

window.addEventListener('scroll', () => {

  const navbar = document.getElementById('navbar');

  navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';

});



// Fechar menu ao clicar em link

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {

    document.getElementById('navLinks').classList.remove('open');

  });

});



// Formulário de contato

function handleForm(e) {

  e.preventDefault();

  alert('Mensagem enviada! Em breve entrarei em contato. 🚀');

  e.target.reset();

}