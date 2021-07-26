const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (word) => {
  const arrLength = [];
  for (index in word){
    arrLength.push(word[index].length);
  }
  return arrLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);