let pessoaEstudante = {
  nome: 'Ramona',
  sobrenome: 'Jesus',
  idade: 70,
  apelido: 'Espanhola'
}

console.log(pessoaEstudante);

console.log('Meu nome é', pessoaEstudante['nome'], pessoaEstudante['sobrenome']);

pessoaEstudante.turma = 'Turma 14A';

console.log(pessoaEstudante);

delete pessoaEstudante.apelido;

console.log(pessoaEstudante);
