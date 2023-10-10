const image = document.getElementById("image");
const buttons = document.getElementById("buttons");

let colorIndex = 0;
let intervalId = null;

// Ao clicar em um botão de cor, a imagem será trocada pelo semáforo com a cor selecionada ou pela troca automática;
// Ao clicar em um botão de cor, o funcionamento do botão automático será interrompido
const trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}

// se o colorIndex for menor que 2, incrementa +1, se não colorIndex recebe 0;
const nextIndex = () =>   colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    //    if( colorIndex < 2 ){
    //     colorIndex++
    // }else{
    //      colorIndex = 0
    // }

// Essa função irá trocar as cores do semáforo conforme o array que contém as ID's da mesma;
// Essa function chama a function turnOn que contém as cores do semáforo;
const changeColor = () =>{
    const colors = ['vermelho', 'amarelo', 'verde'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

// Essa função serve para interromper o funcionamento do semáforo automático;
// Ela limpa o intervalo de Id criado pelo setInterval, atributindo ao ID o valor 'null'
const stopAutomatic = () => {
    clearInterval ( intervalId );
}

// objeto literal que armazena todos os ID's dos botões e que irá proceder com a troca de cor do semáforo, conforme o click no botão
const turnOn = {
    'vermelho' : () => image.src = './img/vermelho.png',
    'amarelo' : () => image.src = './img/amarelo.png',
    'verde': () => image.src = './img/verde.png',
    'auto': () =>  intervalId  = setInterval(changeColor, 1000),
}

buttons.addEventListener('click', trafficLight);