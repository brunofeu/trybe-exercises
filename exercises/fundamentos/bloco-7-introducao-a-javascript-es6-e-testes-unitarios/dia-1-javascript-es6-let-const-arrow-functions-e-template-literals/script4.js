let array = ['CSS', 'HTML', 'JavaScript', 'DOM', 'Responsive']

const trocaX = (string, frase) =>  frase.replace('x', string);

// console.log(`${trocaX("Feu", "Tryber x aqui!")} 

// ${array}`)

const frase = (frase, array) => {
  return `
  ${frase} Minhas cinco principais habilidades são:
  
  ${array.sort()[0]}
  ${array.sort()[1]}
  ${array.sort()[2]}
  ${array.sort()[3]}
  ${array.sort()[4]}`
}

console.log(frase(trocaX("Feu", "Tryber x aqui!"), array))