//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
titleH1.className = 'title';
document.getElementsByTagName('body')[0].appendChild(titleH1);

// Adicione a tag div com a classe main-content como filho da tag body ;

let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.getElementsByTagName('body')[0].appendChild(mainContent);

//Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let centerContent = document.createElement('div');
centerContent.className = 'center-content';
document.querySelector('.main-content').appendChild(centerContent);

//Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerText = 'Exercício de Ficaxão DOM';
document.querySelector('.center-content').appendChild(paragraph);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let leftContent = document.createElement('div');
leftContent.className = ('left-content');
document.querySelector('.main-content').appendChild(leftContent);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let rightContent = document.createElement('div');
rightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(rightContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.src = 'https://picsum.photos/200';
smallImage.alt = 'paisagem'
document.querySelector('.left-content').appendChild(smallImage);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let num = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let numList = document.createElement('ul');
for (let index = 0; index < num.length; index +=1){
  let itemList = num[index];

  let line = document.createElement('li')
  line.innerText = itemList;
  numList.appendChild(line);
}
document.querySelector('.right-content').appendChild(numList);

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index = 0; index < 3; index += 1){
  let titleH3 = document.createElement('h3');
  titleH3.className = 'description';
  document.querySelector('.main-content').appendChild(titleH3)
}

let removeElement = document.querySelector('.main-content').firstElementChild.nextElementSibling;

document.querySelector('.main-content').removeChild(removeElement);

document.querySelector('.right-content').style.marginRight = 'auto';

document.querySelector('.center-content').parentElement.style.backgroundColor = 'green';

document.querySelector('.right-content').firstElementChild.lastElementChild.remove();

document.querySelector('.right-content').firstElementChild.lastElementChild.remove();