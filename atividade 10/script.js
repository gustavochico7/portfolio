function estacao(){
    let me = prompt("digite o mês por extenso (ex: setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    console.log(mes)

    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){// o || significa "OU".
        mostrar.innerHTML = `<p> a estaçao no mês de ${mes} é verão</p>`;
    }
    //o usuario inorma o mes por extenso e o sistema informa a estacao daquele mes.
    //boa sorte!!

    if(mes == 'MARCO' || mes == 'ABRIL'  || mes == 'MAIO'){
        mostrar.innerHTML = `<p> a estaçao no mês de ${mes} é OUTONO</p>`;
    } 

    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        mostrar.innerHTML = `<p> a estaçao no mês de ${mes} é INVERNO</p>`;
    }

    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        mostrar.innerHTML = `<p> a estaçao no mês de ${mes} é PRIMAVERA</p>`;
    }

}
