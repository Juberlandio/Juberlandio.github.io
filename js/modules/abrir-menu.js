// Função para o menu mobile - esconder as seções para a barra de pesquisa não fechar e bugar o Menu Mobile

function abrir() {
const Main = document.querySelector('main');
const Footer = document.querySelector('footer');
const menuOculto = document.getElementById('menu-oculto');
const menuMobile = document.getElementById('menu-items');
        menuMobile.classList.toggle('aberto');
        menuOculto.classList.toggle('menu-animacao');
        Main.classList.toggle('esconder');
        Footer.classList.toggle('esconder');
}
