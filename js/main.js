/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animacao-certificados.js":
/*!*********************************************!*\
  !*** ./js/modules/animacao-certificados.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ certificateanimacaoButton)\n/* harmony export */ });\nfunction certificateanimacaoButton() {\n  var button = document.getElementById('cbutton');\n  button.addEventListener('click', function () {\n    var card = document.querySelectorAll('.ccard');\n    button.classList.toggle('certificate-ativo');\n    card.forEach(function (event) {\n      event.classList.toggle('ativo');\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/animacao-certificados.js?");

/***/ }),

/***/ "./js/modules/animacao-projetos.js":
/*!*****************************************!*\
  !*** ./js/modules/animacao-projetos.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projetosanimacaoButton)\n/* harmony export */ });\nfunction projetosanimacaoButton() {\n  var button = document.getElementById('pbutton');\n  button.addEventListener('click', function () {\n    var card = document.querySelectorAll('.pcard');\n    button.classList.toggle('projetos-ativo');\n    card.forEach(function (event) {\n      event.classList.toggle('ativo');\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/animacao-projetos.js?");

/***/ }),

/***/ "./js/modules/formulario.js":
/*!**********************************!*\
  !*** ./js/modules/formulario.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formulario)\n/* harmony export */ });\nfunction formulario() {\n  var formulario = document.querySelector(\"form\");\n  function formularioEnviado(resposta) {\n    if (resposta.ok) {\n      formulario.innerHTML = \"<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: juberlandio.santana.js@gmail.com</p>\";\n    } else {\n      formulario.innerHTML = \"<p class='font-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entro em contato. Geralmente respondo em 24 horas.</p>\";\n    }\n  }\n  function enviarFormulario(event) {\n    event.preventDefault();\n    var botao = document.querySelector(\"form button\");\n    botao.disabled = true;\n    botao.innerText = \"Enviando...\";\n    var data = new FormData(formulario);\n    fetch(\"./enviar.php\", {\n      method: \"POST\",\n      body: data\n    }).then(formularioEnviado);\n  }\n  formulario.addEventListener(\"submit\", enviarFormulario);\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/formulario.js?");

/***/ }),

/***/ "./js/modules/habilidades.js":
/*!***********************************!*\
  !*** ./js/modules/habilidades.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ habilidades)\n/* harmony export */ });\nfunction habilidades() {\n  var skills = document.querySelectorAll('.box-habilidades');\n  var descricao = document.querySelector('.texto-descricao');\n  var sobreSkill = ['<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">HTML</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">CSS</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Sass</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma linguagem de pré-processamento. Basicamente o Sass potencializa o CSS.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">JavaScript</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">JavaScript é uma linguagem de programação utilizada para o desenvolvimento web.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Redux</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma biblioteca de gerenciamento de estado para aplicativos JavaScript. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">React.JS</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">React.js é uma biblioteca de código aberto mantida pelo Facebook que é utilizada para construir interfaces.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Vue.JS</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3(0, 0, 0);}}\">É um framework progressivo de JavaScript utilizado para construir interfaces de usuário. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">TypeScript</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">TypeScript é uma linguagem de programação que estende o JavaScript, oferecendo tipagem estática opcional.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Bootstrap</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É um dos frameworks mais populares para desenvolvimento de interfaces web responsivas e amigáveis.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Node.JS</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É um ambiente de tempo de execução que permite que você execute código JavaScript do lado do servidor. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Tailwind</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma estrutura de CSS que adota uma metodologia de \"utility-first\", oferecendo um conjunto de classes CSS. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Mysql</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É um dos sistemas de gerenciamento de banco de dados relacionais (SGBDR) mais populares e amplamente utilizados no mundo.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">jQuery</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\"> jQuery é uma biblioteca de JavaScript que simplifica a manipulação de documentos HTML.</p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Git</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Sistema de controle de versão distribuído amplamente utilizado para o rastreamento de alterações em arquivos. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Github</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>', '<p style=\"font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">Figma</p> <br> <p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">O Figma é uma poderosa ferramenta de design, que permite criar interfaces, designs de aplicativos e sites. </p> <br>'];\n  var dataInicio = [new Date(2021, 10, 1).getTime(),\n  // 0\n  new Date(2021, 10, 1).getTime(),\n  // 1\n  new Date(2022, 0, 1).getTime(),\n  // 2\n  new Date(2022, 3, 1).getTime(),\n  // 3\n  new Date(2022, 3, 1).getTime(),\n  // 4\n  new Date(2022, 1, 1).getTime(),\n  // 5\n  new Date(2021, 11, 1).getTime(),\n  // 6\n  new Date(2023, 11, 1).getTime(),\n  // 7\n  new Date(2023, 11, 1).getTime(),\n  // 8\n  new Date(2023, 11, 1).getTime(),\n  // 9\n  new Date(2023, 11, 1).getTime() // 10\n  ];\n  var dataHoje = new Date().getTime();\n  skills.forEach(function (elemento, index) {\n    var index1 = index;\n    var elemento1 = elemento;\n    elemento.addEventListener('mouseover', function (evento) {\n      var tempo = 'mês';\n      var tempoDeExperiencia = Math.round((dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30));\n      if (tempoDeExperiencia > 1) tempo = 'meses';\n      descricao.innerHTML = \"<p>\".concat(sobreSkill[index1], \"</p>\");\n    });\n    elemento.addEventListener('mouseout', function (evento, elemento) {\n      descricao.innerHTML = '<p style=\"display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}\">/* Passe o mouse por cima de alguma habilidade para ler a descrição */</p>';\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/habilidades.js?");

/***/ }),

/***/ "./js/modules/maquina-escrever.js":
/*!****************************************!*\
  !*** ./js/modules/maquina-escrever.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMaquinaEscrever)\n/* harmony export */ });\nfunction initMaquinaEscrever() {\n  function typeWriter(elemento) {\n    var textoArray = elemento.innerHTML.split('');\n    elemento.innerHTML = '';\n    setTimeout(function () {\n      var _loop = function _loop(i) {\n        setTimeout(function () {\n          return elemento.innerHTML += textoArray[i];\n        }, 170 * i);\n      };\n      for (var i = 0; i < textoArray.length; i++) {\n        _loop(i);\n      }\n    }, 1500);\n    setTimeout(function () {\n      return typeWriter(titulo);\n    }, 14000);\n  }\n  var titulo = document.querySelector('.nome');\n  typeWriter(titulo);\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/maquina-escrever.js?");

/***/ }),

/***/ "./js/modules/menu-fixado.js":
/*!***********************************!*\
  !*** ./js/modules/menu-fixado.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menufixo)\n/* harmony export */ });\n// Menu\nfunction menufixo() {\n  function fixarMenu() {\n    var header = document.querySelector('#header');\n    header.classList.toggle('fixar', window.scrollY > 0);\n  }\n  window.addEventListener('scroll', fixarMenu);\n}\nmenufixo();\n\n//# sourceURL=webpack://animais-eslint/./js/modules/menu-fixado.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click'];\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      return menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  var windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-menu-scroll.js":
/*!******************************************!*\
  !*** ./js/modules/scroll-menu-scroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacaoMenuScroll)\n/* harmony export */ });\n// Função para o menu mobile - Scroll Menu Fixed\nfunction animacaoMenuScroll() {\n  var menu = document.querySelector('header');\n  function ativarScroll() {\n    menu.classList.toggle('ativo-menu', scrollY > 0);\n  }\n  window.addEventListener('scroll', ativarScroll);\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/scroll-menu-scroll.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  var linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute('href');\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  }\n  linksInternos.forEach(function (link) {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_menu_fixado_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-fixado.js */ \"./js/modules/menu-fixado.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_animacao_projetos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animacao-projetos.js */ \"./js/modules/animacao-projetos.js\");\n/* harmony import */ var _modules_animacao_certificados_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animacao-certificados.js */ \"./js/modules/animacao-certificados.js\");\n/* harmony import */ var _modules_scroll_menu_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll-menu-scroll.js */ \"./js/modules/scroll-menu-scroll.js\");\n/* harmony import */ var _modules_maquina_escrever_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/maquina-escrever.js */ \"./js/modules/maquina-escrever.js\");\n/* harmony import */ var _modules_habilidades_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/habilidades.js */ \"./js/modules/habilidades.js\");\n/* harmony import */ var _modules_formulario_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/formulario.js */ \"./js/modules/formulario.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_menu_fixado_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_animacao_projetos_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_animacao_certificados_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_scroll_menu_scroll_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_maquina_escrever_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_habilidades_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_formulario_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack://animais-eslint/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;