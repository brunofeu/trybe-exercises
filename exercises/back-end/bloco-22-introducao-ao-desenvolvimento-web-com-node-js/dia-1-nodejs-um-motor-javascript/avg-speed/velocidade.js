const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia percorrida? ');
const tempo = readline.questionInt('Quanto tempo de prova? ');

const velocidade = distancia / tempo;

console.log(`A valocidade média do carro é de ${velocidade} m/s`)