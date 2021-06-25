//posição da rainha

let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posição da peça

let posicaoPecaLinha = 8;
let posicaoPecaColuna = 1;

//guardar se ataque foi bem sucedido

let ataqueBemSucedido = false;

// qual caminho a rainha pode atacar?

// se a peça estiver na mesma linha, ataque bem sucedido

if(posicaoPecaLinha === posicaoRainhaLinha)
{
    ataqueBemSucedido = true;
    console.log('Ataque bem sucedido na mesma linha')
}

if(posicaoPecaColuna === posicaoRainhaColuna){
    console.log('Ataque bem sucedido na mesma coluna')
    ataqueBemSucedido = true;
}


//Diagonal inferior esquerda

for (let index = 1; index < 8 ; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna - index;

    if (posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log('Ataque bem sucedido na diagonal inferior esquerda')
        ataqueBemSucedido = true;
        break;
    }
}

//Diagonal superior direita
for (let index = 1; index < 8 ; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaColuna + index;

    if (posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log('Ataque bem sucedido na diagonal superior direita')
        ataqueBemSucedido = true;
        break;
    }
}

//Diagonal inferior direita
for (let index = 1; index < 8 ; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna + index;

    if (posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log('Ataque bem sucedido na diagonal inferior direita')
        ataqueBemSucedido = true;
        break;
    }
}

//Diagonal superior esquerda
for (let index = 1; index < 8 ; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaColuna - index;

    if (posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log('Ataque bem sucedido na diagonal superior esquerda')
        ataqueBemSucedido = true;
        break;
    }
}

if (ataqueBemSucedido === false) {
    console.log('A peça não pode ser atacada pela rainha')
}






