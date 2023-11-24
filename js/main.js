// Ativar botão menu hamburger
const btnMenu = document.querySelector("#btn-mobile");
function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Menu
function fixarMenu(){
  let header = document.querySelector('#header')
  header.classList.toggle('fixar', window.scrollY > 0)
}

window.addEventListener('scroll', fixarMenu)