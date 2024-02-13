// Menu Click
function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click'];
  
  if(menuButton) {
  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}
initMenuMobile()

 function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}
outsideClick();

// Animação Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();


// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

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
  

// Função para o menu mobile - Scroll Menu Fixed
function animacaoMenuScroll() {
  const menu = document.querySelector('header');
  
  function ativarScroll(){
    menu.classList.toggle('ativo-menu', scrollY > 0)
  }
  
  window.addEventListener('scroll', ativarScroll)
  }
animacaoMenuScroll();

// Função para fixar menu
function menufixo() {
  function fixarMenu(){
    let header = document.querySelector('#header')
    header.classList.toggle('fixar', window.scrollY > 0)
  }
  window.addEventListener('scroll', fixarMenu)
  }
menufixo();


function initMaquinaEscrever(){
  function typeWriter(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      setTimeout(() => {
      for(let i = 0; i < textoArray.length; i++) {
          setTimeout(() => elemento.innerHTML += textoArray[i], 170 * i);
      }}, 1500);
      setTimeout(() => typeWriter(titulo),14000);
  }
  const titulo = document.querySelector('.nome');
  typeWriter(titulo);
}
initMaquinaEscrever()


function habilidades() {
  const skills = document.querySelectorAll('.box-habilidades');
  const descricao = document.querySelector('.texto-descricao');
  const sobreSkill = [
      
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">HTML</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.</p> <br>',
                      
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">CSS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.</p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sass</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de pré-processamento. Basicamente o Sass potencializa o CSS.</p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript é uma linguagem de programação utilizada para o desenvolvimento web.</p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Redux</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma biblioteca de gerenciamento de estado para aplicativos JavaScript. </p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Java</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">O Java é uma linguagem de programação versátil, conhecida por sua portabilidade.</p> <br>',   
                
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.js é uma biblioteca de código aberto mantida pelo Facebook que é utilizada para construir interfaces.</p> <br>',  
                      
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Vue.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3(0, 0, 0);}}">É um framework progressivo de JavaScript utilizado para construir interfaces de usuário. </p> <br>',   
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript é uma linguagem de programação que estende o JavaScript, oferecendo tipagem estática opcional.</p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Bootstrap</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um dos frameworks mais populares para desenvolvimento de interfaces web responsivas e amigáveis.</p> <br>',              
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Node.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um ambiente de tempo de execução que permite que você execute código JavaScript do lado do servidor. </p> <br>',   
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Tailwind</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma estrutura de CSS que adota uma metodologia de "utility-first", oferecendo um conjunto de classes CSS. </p> <br>',  
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Mysql</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um dos sistemas de gerenciamento de banco de dados relacionais (SGBDR) mais populares e amplamente utilizados no mundo.</p> <br>',
                      
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Git</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sistema de controle de versão distribuído amplamente utilizado para o rastreamento de alterações em arquivos. </p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Github</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
  
                      '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Figma</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">O Figma é uma poderosa ferramenta de design, que permite criar interfaces, designs de aplicativos e sites. </p> <br>',
  ]
  const dataInicio = [
                      (new Date(2021, 10, 1)).getTime(), // 0
                      (new Date(2021, 10, 1)).getTime(), // 1
                      (new Date(2022, 0, 1)).getTime(), // 2
                      (new Date(2022, 3, 1)).getTime(), // 3
                      (new Date(2022, 3, 1)).getTime(), // 4
                      (new Date(2022, 1, 1)).getTime(), // 5
                      (new Date(2021, 11, 1)).getTime(), // 6
                      (new Date(2023, 11, 1)).getTime(), // 7
                      (new Date(2023, 11, 1)).getTime(), // 8
                      (new Date(2023, 11, 1)).getTime(), // 9
                      (new Date(2023, 11, 1)).getTime(), // 10
                      ]
  const dataHoje = (new Date()).getTime();
  
  skills.forEach(  (elemento, index) => {
      let index1 = index;
      let elemento1 = elemento;
      elemento.addEventListener('mouseover', (evento) => {
          let tempo = 'mês';
          let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
          if (tempoDeExperiencia > 1) tempo = 'meses'
          descricao.innerHTML = `<p>${sobreSkill[index1]}</p>` ;
      } )
      elemento.addEventListener('mouseout', (evento, elemento,) => {
          descricao.innerHTML = '<p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">/* Passe o mouse por cima de alguma habilidade para ler a descrição */</p>';
      } )
  } );
  }
  habilidades();



function formulario(){
    const formulario = document.querySelector("form");
    
    function formularioEnviado(resposta) {
      if (resposta.ok) {
        formulario.innerHTML =
          "<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: juberlandio.santana.js@gmail.com</p>";
      } else {
        formulario.innerHTML =
        "<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entro em contato. Geralmente respondo em 24 horas.</p>";
      }
    }
    
    function enviarFormulario(event) {
      event.preventDefault();
      const botao = document.querySelector("form button");
      botao.disabled = true;
      botao.innerText = "Enviando...";
    
      const data = new FormData(formulario);
    
      fetch("./enviar.php", {
        method: "POST",
        body: data,
      }).then(formularioEnviado);
    }
    
    formulario.addEventListener("submit", enviarFormulario);
    }
    
    formulario();

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