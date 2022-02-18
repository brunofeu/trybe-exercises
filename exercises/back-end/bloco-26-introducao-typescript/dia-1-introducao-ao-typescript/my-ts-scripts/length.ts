import readline from 'readline-sync'
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

const convert = (valor: number, base: string, conversao: string): number => {
  const forIndex = units.indexOf(base); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(conversao); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  const result: number = valor * Math.pow(10, exponent)

  // console.log(result)
  return result
}

const exec = () => {
  const valor: number = readline.questionFloat('escolha o número ');
  const baseIndex: number = readline.keyInSelect(units, 'escolha a base ');
  const conversaoIndex: number = readline.keyInSelect(units, 'escolha a conversao ');
  const result = convert(valor, units[baseIndex], units[conversaoIndex])
  console.log(result, units[conversaoIndex])
}

exec();

// convert(10, 'km', 'm')