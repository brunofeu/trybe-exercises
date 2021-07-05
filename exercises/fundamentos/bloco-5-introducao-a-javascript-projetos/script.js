// Acesse o elemento elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'green';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerText = ('Texto primeiro filho do filho')

// Acesse o primeiroFilho a partir de pai .
document.querySelector('#pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').previousElementSibling

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').nextElementSibling

// Agora acesse o terceiroFilho a partir de pai .
document.querySelector('#pai').children[2]

//--------------------------------------------------

// Crie um irmão para elementoOndeVoceEsta .
let irmao = document.createElement('div');
irmao.innerText = ('texto irmao de onde voce esta');
irmao.id = ('irmaoDeOndeVoceEsta');
document.querySelector('#elementoOndeVoceEsta').parentNode.appendChild(irmao);

// Crie um filho para elementoOndeVoceEsta .
let filhoDeOndeVoceEsta = document.createElement('p')
filhoDeOndeVoceEsta.id = 'filhoDeOndeVoceEsta'
filhoDeOndeVoceEsta.innerText = 'Texto filho de onde você está';
document.querySelector('#elementoOndeVoceEsta').appendChild(filhoDeOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho .

let filhoDoPrimeiroFilhoDoFilho = document.createElement('h3');
filhoDoPrimeiroFilhoDoFilho.innerText = 'Neto de alguém';
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';

document.querySelector('#elementoOndeVoceEsta').firstElementChild.appendChild(filhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

document.querySelector('#filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling.style.color = 'blue';
document.querySelector('#filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling.innerText = 'blue';


//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

document.querySelector('#pai').children[2, 3, 4]