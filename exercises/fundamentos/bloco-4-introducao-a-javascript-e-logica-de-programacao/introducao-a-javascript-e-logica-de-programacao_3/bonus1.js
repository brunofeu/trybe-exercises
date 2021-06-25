let n = 9;
let resultado = "";

if (n % 2 === 1) {
  for (let linha = 0; linha < Math.trunc(n / 2) + 1; linha += 1) {
    for (space = 0; space < Math.trunc(n / 2) - linha; space += 1) {
      resultado += " ";
    }

    for (let ponto = 0; ponto <= 2 * linha; ponto += 1) {
      if (ponto === 0 || ponto === 2 * linha) {
        resultado += "*";
      } else if (linha === Math.trunc(n / 2)) {
        resultado += "*";
      } else {
        resultado += " ";
      }
    }
    console.log(resultado);
    resultado = "";
  }
} else {
  console.log("Insira um número ímpar");
}
