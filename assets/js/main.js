const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

function setHeaderState() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 8);
}
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
