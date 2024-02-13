// Menu
export default function menufixo() {
  function fixarMenu(){
    let header = document.querySelector('#header')
    header.classList.toggle('fixar', window.scrollY > 0)
  }
  window.addEventListener('scroll', fixarMenu)
  }