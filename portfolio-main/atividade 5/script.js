function maior(){
    let numero1;
    let numero2;
    let resultado;

    numero1 = Number(prompt("Digite o primeiro número."));
    numero2 = Number(prompt("Digite o segundo número."));

    if(numero1 > numero2){
        alert("o número " + numero1 + " é maior que o número " + numero2 + ",");
    }else if(numero2 > numero1){
        alert("o número " + numero2 + " é maior que o número " + numero1 + ",");
    }else {
        alert("Os números são iguais.");
    }


}