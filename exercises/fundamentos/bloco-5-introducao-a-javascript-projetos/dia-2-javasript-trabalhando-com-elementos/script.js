//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
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