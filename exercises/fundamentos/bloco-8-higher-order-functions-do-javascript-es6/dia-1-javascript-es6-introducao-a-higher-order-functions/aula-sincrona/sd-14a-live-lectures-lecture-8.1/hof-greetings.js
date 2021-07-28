const person = {
  nome: 'Márcia', 
  sobrenome: 'Jesus',
};

person.greet = (callback) => callback(person);

const greetingPeople = (person) => `Olá ${person.nome} ${person.sobrenome}, tudo bem com você?`;

console.log(greetingPeople(person));

const formalGreeting = (person) => `Oi ${person.nome}, tudo bem?`;

console.log(formalGreeting(person));

console.log(person.greet(formalGreeting))