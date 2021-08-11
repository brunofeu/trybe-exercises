// Extraia as informações de name e birthplace do objeto para montar uma frase!

const assert = require('assert');

const person = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
};

//Desestruturar o obj
const {name, birthplace: place, city, albuns} = person;

// const phrase = `O cantor ${person.name} nasceu no ${person.birthplace} e mora em ${person.city}. Ele possui ${person.albuns.length} albuns.`;
const phrase = `O cantor ${name} nasceu no ${place} e mora em ${city}. Ele possui ${albuns.length} albuns.`;

assert.strictEqual(
  'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.',
  phrase);



















  