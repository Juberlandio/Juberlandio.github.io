//Menu hamburger
function botaoMenu() {
const btnMenu = document.querySelector("#btn-mobile");
function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);
}
botaoMenu();


// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Menu
function menuFixo() {
function fixarMenu(){
  let header = document.querySelector('#header')
  header.classList.toggle('fixar', window.scrollY > 0)
}
window.addEventListener('scroll', fixarMenu)
}
menuFixo();


// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();