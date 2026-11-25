let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;

let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
computador = min + Math.trunc(dif * aleatorio);

function jogar(){
    jogador = Number(prompt("qual é seu palpite"))

    if(jogador < computador){
        mostrar.innerHTML = `<p> voce pensou em ${jogador}, meu numero é <b>MAIOR</b>!</p>`
        
    } else if(jogador > computador){
        mostrar.innerHTML = `<p> voce pensou em ${jogador}, meu numero é <b>MENOR</b>!</p>`
    
    } else if(jogador == computador){
        mostrar.innerHTML = `<p><b>PARABENS!!!!</b> voce acertou! eu tinha pensado no numero ${computador}</p>`
    }


} 