const readline = require('readline-sync')

const peso = readline.questionFloat('Qual o seu peso em kg? ');
const altura = readline.questionFloat('Qual a sua altura em cm? ');
const imc = peso/((altura/100)**2);
let situacao = '';

if (imc < 18.5) {
  situacao = 'Abaixo do peso (magreza)';
} else if (18.5 <= imc < 25) {
  situacao = 'Peso normal';
} else if (25<= imc < 30) {
  situacao = 'Acima do peso (sobrepeso)';
} else if (30 <= imc < 35) {
  situacao = 'Obesidade grau I';
} else if (35 <= imc < 40) {
  situacao = 'Obesidade grau II';
} else {
  situacao = 'Obesidade graus III e IV';
}

console.log(`seu IMC é de: ${imc.toFixed(2)} e sua situação é ${situacao}`);