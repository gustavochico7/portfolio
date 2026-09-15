function calcular(){
    let nota1trim = Number(prompt("Digite a nota do primeiro trimestre:"));
    let nota2trim = Number(prompt("Digite a nota do segundo trimestre:"));
    
    let resultado = 180-(nota1trim+nota2trim);
    alert("voce precisa de " + resultado + " para passar de ano");

}