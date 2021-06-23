let salarioBruto = 3000;
let inss;
let salarioBase;
let iR;
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

console.log(salarioLiquido);
