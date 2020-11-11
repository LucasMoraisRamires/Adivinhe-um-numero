/* Declaração das variaveis necessarias */
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var  contagemPalpites = 0;


function conferirPalpite() {

   

    var palpites = document.querySelector('.palpites');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var tentativas = document.querySelector('.tentativas');
    var baixoOuAlto = document.querySelector('.baixoOuAlto');
    var envioPalpite = document.querySelector('.envioPalpite');
     var botaoReinicio;

 


    var palpiteUsuario = Number(campoPalpite.value);

     

    if (contagemPalpites === 0) {
        palpites.textContent = 'Palpites anteriores: ';
        tentativas.textContent = 'Numero de tentativas: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
    

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } 
    else if (contagemPalpites - 10 === 0) {
        
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();

} else {
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
     
    } else if(palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
      
     
    }

contagemPalpites++;

if(contagemPalpites <= 9){

    alert('você tem mais ' + (10 - contagemPalpites) + ' Palpites!'  )
} else if (contagemPalpites == 10){
    alert('Game Over' )
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();

}

tentativas.textContent = 'Numeros de tentativas: ' + contagemPalpites;
campoPalpite.value = '';
campoPalpite.focus();
   



}
}


