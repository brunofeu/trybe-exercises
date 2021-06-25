let n = 5;
let resultado = "";

for (let linha = 0; linha < n; linha += 1) {
  for (space = 0; space < n - linha; space += 1) {
    resultado += " ";
  }
  for (let ponto = 0; ponto <= linha; ponto += 1) {
    resultado += "*";
  }
  console.log(resultado);
  resultado = "";
}
