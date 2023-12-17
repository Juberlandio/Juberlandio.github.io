const skills = document.querySelectorAll('.box-habilidades');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    
                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">HTML</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.</p> <br>',

                    
                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">CSS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.</p> <br>',


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript é uma linguagem de programação utilizada para o desenvolvimento web.</p> <br>',


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sass</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de pré-processamento. Basicamente o Sass potencializa o CSS.</p> <br>',

                    
                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.js é uma biblioteca de código aberto mantida pelo Facebook que é utilizada para construir interfaces.</p> <br>',
             

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Vue.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um framework progressivo de JavaScript utilizado para construir interfaces de usuário. </p> <br>',
                   
                    
                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Node.JS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É um ambiente de tempo de execução que permite que você execute código JavaScript do lado do servidor. </p> <br>',   


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Redux</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma biblioteca de gerenciamento de estado para aplicativos JavaScript. </p> <br>',


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript é uma linguagem de programação que estende o JavaScript, oferecendo tipagem estática opcional.</p> <br>',
                    

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Git</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sistema de controle de versão distribuído amplamente utilizado para o rastreamento de alterações em arquivos. </p> <br>',


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Github</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',


                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Figma</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">O Figma é uma poderosa ferramenta de design, que permite criar interfaces, designs de aplicativos e sites. </p> <br>',
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2023, 11, 1)).getTime(), // 7
                    (new Date(2023, 11, 1)).getTime(), // 8
                    (new Date(2023, 11, 1)).getTime(), // 9
                    (new Date(2023, 11, 1)).getTime(), // 10
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]}</p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '<p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">/* Passe o mouse por cima de alguma habilidade para ler a descrição */</p>';
    } )
} );



