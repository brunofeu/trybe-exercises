//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.getElementsByTagName('body')[0].appendChild(titleH1);

// Adicione a tag div com a classe main-content como filho da tag body ;

let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.getElementsByTagName('body')[0].appendChild(mainContent);
