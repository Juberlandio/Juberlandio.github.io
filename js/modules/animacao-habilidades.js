export default function projetosanimacaoButton() {
  const button = document.getElementById('hbutton');
  const cards = document.querySelectorAll('.hcard');

  button.addEventListener('click', function () {
    button.classList.toggle('habilidades-ativo');

    cards.forEach((card) => {
      card.classList.toggle('ativo');
    });
  });
}
