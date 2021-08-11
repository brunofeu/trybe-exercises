// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Carabelo', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));