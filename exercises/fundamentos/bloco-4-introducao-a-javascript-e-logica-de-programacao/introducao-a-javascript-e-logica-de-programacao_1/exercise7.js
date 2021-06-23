function getRandomIntInclusive(min, max) {
    min = Math.ceil(-10);
    max = Math.floor(110);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


let nota = getRandomIntInclusive();



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