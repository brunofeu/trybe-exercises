// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// LOOP
// let awesomeBooks = [];

// horrorBooks.forEach(book => awesomeBooks.push(book))
// scifiBooks.forEach(book => awesomeBooks.push(book))
// console.log(awesomeBooks)


// SPREAD OPERATOR
let awesomeBooks = [...horrorBooks, ...scifiBooks]
console.log(awesomeBooks)


assert.deepStrictEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);