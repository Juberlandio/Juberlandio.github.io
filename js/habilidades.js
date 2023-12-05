const skills = document.querySelectorAll('.box-habilidades');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    
                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">HTML</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de marcação utilizada para estruturar e apresentar conteúdo na web.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">CSS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">JavaScript é uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicativos web.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sass</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma linguagem de pré-processamento CSS que oferece funcionalidades avançadas e facilita a escrita.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">TypeScript</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Ela é uma extensão do JavaScript e adiciona tipos estáticos opcionais ao código, oferecendo assim mais ferramentas.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">ReactJS</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">React.js é uma biblioteca de código aberto mantida pelo Facebook que é utilizada para construir interfaces de usuário.</p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Git</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Sistema de controle de versão distribuído amplamente utilizado para o rastreamento de alterações em arquivos de código-fonte. </p> <br>',

                    '<p style="font-weight: bold; display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">Github</p> <br> <p style="display: block; animation: opacity 3s forwards; @keyframes mostrar {from {opacity: 0;transform: matrix3d(-30px, 0, 0);}to {opacity: 1;transform: matrix3d(0, 0, 0);}}">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',                       
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
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );



