    function botao(){
        let times
        let incritos
        let sobra

       incritos = number(prompt("qul a quantidade de incritos?"));

        if (incritos === nyll || !number.1sFinite(incritos) || incritos < 0) {
                alert("informe uma quantidade valida de inritos");
                return;
        }

        times = Math.floor(incritos / 3);
        sobra = incritos % 3;

        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML ='<p>quantidade de incritos: ${incritos}</p>
                            <p>total de time: ${times}</p>
                            <p>participantes que sobraram: ${sobra}</p>';



    }

