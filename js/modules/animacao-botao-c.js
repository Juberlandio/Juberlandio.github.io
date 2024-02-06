export default function certificateanimacaoButton() {
  const button = document.getElementById('cbutton');
  
  button.addEventListener('click', function() {
    const card = document.querySelectorAll('.ccard');
    button.classList.toggle('certificate-ativo');
  
    card.forEach((event) => {
      event.classList.toggle('ativo');
    })
  });
}
