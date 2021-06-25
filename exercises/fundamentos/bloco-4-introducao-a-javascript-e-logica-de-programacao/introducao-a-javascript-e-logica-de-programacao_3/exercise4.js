let n = 10;
let resultado = "";

if (n%2===1){

for (let linha = 0; linha < (Math.trunc(n/2)+1); linha += 1) {

  for (space = 0; space < (Math.trunc(n/2)-linha); space += 1) {
    resultado += " ";
  }

  for (let ponto = 0; ponto <= (2*linha); ponto += 1) {
    resultado += "*";
  }
  console.log(resultado);
  resultado = "";
}
}else{
for (let linha = 0; linha < (n/2); linha += 1) {

    for (space = 0; space < ((n/3)-linha); space += 1) {
      resultado += " ";
    }
  
    for (let ponto = 0; ponto <= (2*linha+1); ponto += 1) {
      resultado += "*";
    }
    console.log(resultado);
    resultado = "";
  }

}

