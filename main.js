function tocarSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
   
    /* Neste trecho de código verificamos se o elemento é do tipo áudio ou não*/

    if (elemento === null){
        console.log('Elemento inválido');
    }

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else
    {
        console.log('Seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for( contador = 0; contador < listaDeTeclas.length; contador ++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1]; /* a 'classList[1]' retorna a classe ex.:'tecla_pom', 
                                                              e isso subistitui parte do idAudio*/

    //Template string
    const idAudio = `#som_${instrumento}`; /* era: " '#som_tecla_pom' ", a constante instrumento retorna a segunda 
                                            parte do id com uma classe, tecla_pom por exemplo, de acordo com a tecla. */

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    console.log(contador);
    console.log(instrumento);
    
    tecla.onkeydown = function(evento){
        
        console.log(evento.code) // event.code -> mostra o evento (a tecla presiona) no console.
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }      
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

