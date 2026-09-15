function calcular(){
    let nota1trim = Number(prompt("Digite a nota do primeiro trimestre:"));
    let nota2trim = Number(prompt("Digite a nota do segundo trimestre:"));
    
    let resultado = 180-(nota1trim+nota2trim);
    alert("você precisa de " + resultado + " para passar de ano");

    if(resultado <= 0){
        alert("Parabéns! você ja esta aprovado por nota!!!");

    } else{
        alert("você precisa de " + resultado + " para passar de ano");

        

    }

}