export default function clickBotao() {
  document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".soundButton");
    var audio = new Audio('assets/sons/click-sound.mp3');

    audio.volume = 0.4;
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            audio.play();
        });
    });
});
}