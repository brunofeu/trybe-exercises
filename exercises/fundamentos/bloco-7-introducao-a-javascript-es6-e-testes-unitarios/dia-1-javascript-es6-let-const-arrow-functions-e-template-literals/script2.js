const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let teste = null;
    for (let compara = i + 1; compara < array.length; compara += 1) {
      teste = array[i];
      if (teste > array[compara]) {
        array[i] = array[compara];
        array[compara] = teste;
        i -= 1;
      }
    }
  }

  return array;
};

console.log(crescente(oddsAndEvens)); // será necessário alterar essa linha 😉
