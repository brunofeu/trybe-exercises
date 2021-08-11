const assert = require('assert');
// escreva a função removeMiddle aqui
let wordOutput = [];
const removeMiddle = (array) => {
  wordOutput.push(array[Math.floor(array.length/2)]) 
  array = array.splice(Math.floor(array.length/2), 1)
  return wordOutput;
}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);