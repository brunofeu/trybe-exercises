     
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function mudaTextoP(){
  document.getElementsByTagName('p')[0].innerText = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum';
};

function mudaCorQuadrado(){
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

function mudaCorCenter(){
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
function corrigeTexto(){
  document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaEscripit';
}
function pMaiusculo(){
  let x = document.getElementsByTagName('p');
  for (let i = 0; i < x.length; i += 1){
    x[i].innerText = x[i].innerText.toUpperCase();
  }
}

function mostraP(){
  let x = document.getElementsByTagName('p')
  for (let i = 0; i < x.length; i += 1){
    console.log(x[i].innerText);
}
}

mudaTextoP();
corrigeTexto();
mudaCorCenter();
mudaCorQuadrado();
pMaiusculo();
mostraP();