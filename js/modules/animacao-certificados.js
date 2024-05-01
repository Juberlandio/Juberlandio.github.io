export default function certificateanimacaoButton() {
const button = document.getElementById('cbutton');
const cards = document.querySelectorAll('.ccard');
button.addEventListener('click', function() {
button.classList.toggle('certificate-ativo');
cards.forEach((card) => {
card.classList.toggle('ativo');
});
});
}