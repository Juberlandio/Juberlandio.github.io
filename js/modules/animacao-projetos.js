export default function projetosanimacaoButton() {
  const button = document.getElementById('pbutton');
  
  button.addEventListener('click', function() {
    const card = document.querySelectorAll('.pcard');
    button.classList.toggle('projetos-ativo');
  
    card.forEach((event) => {
      event.classList.toggle('ativo');
    })
    });
  }