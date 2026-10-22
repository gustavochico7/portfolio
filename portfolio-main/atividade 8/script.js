let count_sorte = 0;
let count_azar = 0;

function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio);


    if(num > 50){
        count_sorte++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${count_sorte}</p> <p>Azar: ${count_azar}</p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZHGWiR2a6SIBjwX2cBYjMu9JnRlPMFgHusfjEkVf2W_reApGZpZhtSQ8&s=10">`;

    } else {
        count_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${count_sorte}</p> <p>Azar: ${count_azar}</p><img src="https://i.pinimg.com/736x/42/4e/aa/424eaa8f578b5bbd347a18fed4e97afe.jpg">`;

    }


}