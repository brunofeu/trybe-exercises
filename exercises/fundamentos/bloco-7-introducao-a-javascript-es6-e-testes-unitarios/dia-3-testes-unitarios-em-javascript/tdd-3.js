const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (arr) => {
  let total = 0;
  for (index in arr){
    total += arr[index];
  }
  return total
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);