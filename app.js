let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute > numeroSecreto)
        exibirTextoNaTela('p', 'O número secreto é menor!');
    else if(chute < numeroSecreto)
        exibirTextoNaTela('p', 'O número secreto é maior!');
    else
        {
           exibirTextoNaTela('h1', 'Acertou!');
           exibirTextoNaTela('p', `Parabéns! Você acertou o número secreto com ${tentativas} ${ajustarPalavraTentativa()}.`);
           document.getElementById('reiniciar').removeAttribute('disabled');
        }
        tentativas++;

        limparCampo();
        
}

let txtTentativas = '';

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function ajustarPalavraTentativa(){
     return txtTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}







