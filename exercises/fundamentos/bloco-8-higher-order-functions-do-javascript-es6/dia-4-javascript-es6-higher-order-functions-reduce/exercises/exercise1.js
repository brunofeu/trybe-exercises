
//1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, array) =>{ 
    array.forEach((eachValue) => acc.push(eachValue))
    return acc
  }, [])


}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);