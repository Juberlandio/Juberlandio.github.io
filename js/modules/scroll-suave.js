// export default function initScrollSuave() {
//   const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

//   function scrollToSection(event) {
//     event.preventDefault();
//     const href = event.currentTarget.getAttribute('href');
//     const section = document.querySelector(href);
//     section.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   }

//   linksInternos.forEach((link) => {
//     link.addEventListener('click', scrollToSection);
//   });
// }

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  const sections = Array.from(linksInternos).map(link => document.querySelector(link.getAttribute('href')));

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function activateLinkOnScroll() {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        linksInternos.forEach(link => link.classList.remove('active-menu'));
        linksInternos[index].classList.add('active-menu');
      }
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

  window.addEventListener('scroll', activateLinkOnScroll);
}


