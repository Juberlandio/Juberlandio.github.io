export default function certificateAnimationButton() {
  const button = document.getElementById('hbutton');
  const cards = document.querySelectorAll('.hcard');
  
  button.addEventListener('click', function() {
    button.classList.toggle('certificate-ativo');
    cards.forEach((card) => {
      if (card.classList.contains('ativo')) {
        // Animação de saída
        card.classList.remove('ativo');
        card.addEventListener('transitionend', function handler() {
          if (!card.classList.contains('ativo')) {
            card.style.display = 'none'; // Ocultar após a animação
          }
          card.removeEventListener('transitionend', handler);
        });
      } else {
        // Preparar para animação de entrada
        card.style.display = 'block';
        // Forçar reflow para garantir que a transição será aplicada
        card.offsetWidth;
        card.classList.add('ativo');
      }
    });
  });
}