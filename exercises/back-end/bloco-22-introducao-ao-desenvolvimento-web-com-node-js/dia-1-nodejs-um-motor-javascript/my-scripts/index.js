const readline = require('readline-sync')

const peso = readline.questionFloat('Qual o seu peso em kg? ');
const altura = readline.questionFloat('Qual a sua altura em cm? ');

console.log(`seu IMC é de: ${peso/((altura/100)**2)}`);