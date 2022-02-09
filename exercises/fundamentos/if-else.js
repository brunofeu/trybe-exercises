function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


let notaPessoa = getRandomIntInclusive();

if (notaPessoa >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (notaPessoa < 80 && notaPessoa >= 60){
    console.log('Você está em nossa lista de espera');
}
else if (notaPessoa < 60){
    console.log('Você foi reprovada(o)');
}

console.log('Sua nota foi ' + notaPessoa );