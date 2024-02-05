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

function initAnimeScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimeScroll();



function projetosanimacaoButton() {
const button = document.getElementById('pbutton');

button.addEventListener('click', function() {
  const card = document.querySelectorAll('.pcard');
  button.classList.toggle('projetos-ativo');

  card.forEach((event) => {
    event.classList.toggle('ativo');
  })
  });
}
projetosanimacaoButton();


function certificateanimacaoButton() {
  const button = document.getElementById('cbutton');
  
  button.addEventListener('click', function() {
    const card = document.querySelectorAll('.ccard');
    button.classList.toggle('certificate-ativo');
  
    card.forEach((event) => {
      event.classList.toggle('ativo');
    })
  });
}
certificateanimacaoButton();
