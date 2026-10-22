function site(){ 
    let nome;
    let result;
    let agora = new Date

    nome = prompt ("qual seu nome?")
    result = window.document.getElementById('resultado')

    result.innerHTML  = '<p>Ola, ${nome}! é um prazer te conheçer! <br>O sistema me enviou a seguinte informaçao:</br> <mark>${agora}</mark> </p> '






}