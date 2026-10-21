function horas(){
 let agora = new Date;
let hora = agora.getHours();
let min = agora.getMinutes();

let mostrar = document.getElementById('resultado');

mostrar.innerHTML = `<p> agora são ${hora} horas e ${min} minutos.</p>`;

if(min >= 11 && min <= 30){
  mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZLMaxGVr7lwanbkh4Yg_0AI6jdzrrTVkx737F4v0Eg&s">`
}

}


