export default function animacaoMenuScroll() {
const menu = document.querySelector('header');
function ativarScroll() {
  menu.classList.toggle('ativo-menu', scrollY > 0)
}
window.addEventListener('scroll', ativarScroll)
}