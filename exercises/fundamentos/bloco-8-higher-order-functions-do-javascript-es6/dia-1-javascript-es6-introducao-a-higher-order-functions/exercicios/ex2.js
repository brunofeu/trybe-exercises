const checkSort = (num, result) => num === result;

const resultadoSorteio = (numApostado, callback) => callback(numApostado, Math.ceil(Math.random() * 5)) ? 
'Parabéns você ganhou' :  'Tente novamente';
console.log(resultadoSorteio(3, checkSort));

