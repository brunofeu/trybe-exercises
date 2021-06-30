function maior(a, b){

if (a>b){
    console.log('O número ' + a + ' é maior')
}
else if (a < b){
    console.log('O número ' + b + ' é maior')
}
else 
    console.log('Os números são iguais')
    
}   

maior(6,5);


console.log('---------------------')

function maiorDe3(a,b ,c){

if (a >= b && a >= c) {
    console.log('O número ' + a + ' é maior')
}
else if (b >= a && b >= c) {
    console.log('O número ' + b + ' é maior')
}
else if (c >= a && c >= b) {
    console.log('O número ' + c + ' é maior')
}
}

maiorDe3 ( 10, 20, 15);

console.log('---------------------')


function positiveOrNegative(value){

if (value > 0){
    console.log("positive");
}
else if (value < 0) {
    console.log('negative');
}
else {
    console.log('Zero');
}
}
positiveOrNegative(-10);

console.log('---------------------')

function angleTriangle(angleA, angleB, angleC){

if (angleA <= 0 ||  angleB <= 0 ||  angleC <= 0) {
	console.log("Angulo não pode ser menor ou igual a 0");
} 
	else if (angleA + angleB + angleC === 180){
  	console.log("true");
}
 	else {
  	console.log("false");
}
}
angleTriangle (1, 89,90);

console.log('---------------------')

function chessName(chess){

chess = chess.toLowerCase();

switch(chess){
    case 'king':
    console.log('The king moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent, nor can a player make a move with another piece if it will leave the king in check.');
    break;

    case 'queen':
    console.log('The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.');
    break;

    case 'rook':
    console.log('A rook moves any number of vacant squares forwards, backwards, left, or right in a straight line.');
    break;
    
    case 'bichop':
    console.log('A bishop moves any number of vacant squares diagonally in a straight line.');
    break;
    
    case 'knight':
    console.log('A knight moves on an extended diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner.');
    break;
    
    case 'pawn':
    console.log("A pawn moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board. When there is an enemy piece one square diagonally ahead of a pawn, either left or right, then the pawn may capture that piece");
    break;
    
    default:
        console.log('Peça inexistente')
    
}
}
chessName ('QUEEN');

console.log('---------------------')

function notaEmConceitos(){

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


nota = getRandomIntInclusive(-10, 100);



if (nota > 100 || nota < 0){
    console.log('erro - nota inexistente' + '('+nota+'%)')
}else if (nota >= 90){
    console.log('Nota A ' + '('+nota+'%)')
}else if (nota >= 80){
    console.log('Nota B ' + '('+nota+'%)')
}else if (nota >= 70){
    console.log('Nota C ' + '('+nota+'%)')
}else if (nota >= 60){
    console.log('Nota D ' + '('+nota+'%)')
}else if (nota >= 50){
    console.log('Nota E ' + '('+nota+'%)')
}else {
    console.log('Nota F ' + '('+nota+'%)')
}
}
notaEmConceitos();

console.log('---------------------')

function temPar(){

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  num1 = getRandomIntInclusive(1,100);
  num2 = getRandomIntInclusive(1,100);
  num3 = getRandomIntInclusive(1,100);

  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ){
      console.log('Existe um número par ' + num1 +" " + num2+" "+num3)
  }else {
      console.log('Todos os números são ímpares ' + num1+" " +num2+" "+num3)
  }
}
temPar();

console.log('---------------------')


function lucro(valorCusto, valorVenda){
let impostoSobreOCusto = 20;
let lucro;
let valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
    console.log('Valor inválido')
}else {

    valorCustoTotal = valorCusto + (valorCusto*impostoSobreOCusto/100);

    lucro = (1000*(valorVenda - valorCustoTotal)).toFixed(2) ;
    console.log('R$ ' + lucro);
}
}
lucro (379, 500)

console.log('---------------------')

function salLiquido(salarioBruto) {

let inss;
let salarioBase;

let salarioLiquido;
let aliquota;
let parcela;

if (salarioBruto > 5189.82) {
  inss = 570.88;
} else if (salarioBruto <= 5189.82 && salarioBruto >= 2594.93) {
  inss = (salarioBruto * 11) / 100;
} else if ((salarioBruto <= 2594, 92 && salarioBruto >= 1556.95)) {
  inss = (salarioBruto * 9) / 100;
} else {
  inss = (salarioBruto * 8) / 100;
}

salarioBase = salarioBruto - inss;

if (salarioBase > 4664.68) {
  aliquota = 27.5;
  parcela = 869.36;
} else if (salarioBase <= 4664.68 && salarioBase >= 3751.06) {
  aliquota = 22.5;
  parcela = 636.13;
} else if (salarioBase <= 3751.05 && salarioBase >= 2826.66) {
  aliquota = 15;
  parcela = 354.8;
} else if (salarioBase <= 2826.65 && salarioBase >= 1903.99) {
  aliquota = 7.5;
  parcela = 142.8;
} else {
  aliquota = 0;
  parcela = 0;
}

 salarioLiquido = salarioBase - (salarioBase * aliquota) / 100 + parcela;

 return console.log('R$ ' + salarioLiquido);
}

salLiquido(3000);
