export default function certificateAnimationButton() {
  const button = document.getElementById('cbutton');
  const cards = document.querySelectorAll('.ccard');
  
  button.addEventListener('click', function() {
    if (button.classList.contains('certificado-ativo')) {
      button.classList.remove('certificado-ativo');
      button.classList.add('certificado-inativo');
    } else {
      button.classList.remove('certificado-inativo');
      button.classList.add('certificado-ativo');
    }
    
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