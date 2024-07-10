export default function animaCabecalho() {
const cabecalho = document.querySelector('.cabecalho');

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};


let posicaoAnt = window.scrollY;
window.addEventListener('scroll', debounce( ()=> {
    addClasseCabecalho();
    escondeCabecalho();
}), 200);

function addClasseCabecalho(){
    const posicaoScroll = window.scrollY;
    posicaoScroll > 0 ? cabecalho.classList.add('cabecalho-ativo') : cabecalho.classList.remove('cabecalho-ativo');
}

function escondeCabecalho(){
    let posicaoAtual = window.scrollY;
    posicaoAnt < posicaoAtual ? cabecalho.style.top = '-100%' : cabecalho.style.top = '0';
    posicaoAnt = posicaoAtual;
}
}