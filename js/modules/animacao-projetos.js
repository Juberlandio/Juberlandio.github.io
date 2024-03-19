export default function projetosanimacaoButton() {
  const button = document.getElementById('pbutton');
  const cards = document.querySelectorAll('.pcard');

  button.addEventListener('click', function () {
    button.classList.toggle('projetos-ativo');

    cards.forEach((card) => {
      card.classList.toggle('ativo');
    });
  });
}
