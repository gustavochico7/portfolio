let cont_sorte = 0;
let cont_azar = 0;

function sorte(){
  let min = 1;
  let max = 100;
  let dif = max - min;
  let aleatorio = Math.random();
  let num = min + Math.trunc(dif * aleatorio);

  if(num > 50){
   cont_sorte++;
   let mostrar = document.getElementById('resultado');
   mostrar.innerHTML = `<p> sorte: ${cont_sorte}</p>
                        <p.azar: ${cont_azar} </p>   
                        <img src="https://www.casaquetem.com.br/cdn/shop/products/placa-decorativa-esmaltada-sorte-131820.jpg?v=1758892791&width=1445"`;

  }else {
      cont_azar++;
    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> sorte: ${cont_sorte}</p>
                        <p.azar: ${cont_azar} </p>   
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVizMHULNLPp_aZ4wfLbEK2-5GDrWuyJav8X5ixi7Krwpbx7cgp7QTew&s"`;

  }

}