export default function initMaquinaEscrever() {
    let repeatCount = 0; // Inicializa o contador
    const maxRepeats = 5; // Define o número máximo de repetições

    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        setTimeout(() => {
            for (let i = 0; i < textoArray.length; i++) {
                setTimeout(() => elemento.innerHTML += textoArray[i], 170 * i);
            }
        }, 1500);

        if (repeatCount < maxRepeats) {
            repeatCount++;
            setTimeout(() => typeWriter(titulo), 14000);
        }
    }

    const titulo = document.querySelector('.nome');
    typeWriter(titulo);
}
