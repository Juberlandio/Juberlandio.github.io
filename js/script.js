import ScrollSuave from './modules/scroll-suave.js';
import initScrollSuave from './modules/scroll-suave.js';
import menufixo from './modules/menu-fixado.js';
import initAnimeScroll from './modules/scroll-animacao.js';
import projetosanimacaoButton from './modules/animacao-projetos.js';
import certificateanimacaoButton from './modules/animacao-certificados.js';
import animacaoMenuFixed from './modules/scroll-menu-scroll.js';
import maquinaEscrever from './modules/maquina-escrever.js';
import habilidades from './modules/habilidades.js';
import formulario from './modules/formulario.js';
import initMenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

menufixo();
initAnimeScroll();
projetosanimacaoButton();
certificateanimacaoButton();
animacaoMenuFixed();
maquinaEscrever();
habilidades();
formulario();
initMenuMobile();