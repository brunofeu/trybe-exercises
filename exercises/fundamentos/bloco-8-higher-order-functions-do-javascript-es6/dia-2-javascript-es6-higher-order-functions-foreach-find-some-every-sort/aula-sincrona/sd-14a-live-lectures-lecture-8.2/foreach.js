// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// O método forEach() executa uma dada função em cada elemento de um array.

// Fazer o log de todos os jogadores do Array abaixo

const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

// Usando for tradicional


// Qual outro for podemos usar ?


// Agora usando o Hof forEach


// Fazer o log de cada numero do array abaixo multiplicado por 3

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

// Com for of


// Com o forEach
numeros.forEach((numero) => console.log(numero * 3));

// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliaça2o, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
    {nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8},
    {nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5},
    {nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7},
    {nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4},
    {nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7},
    {nome: 'Marlene', avaliacao: 6.5, projeto: 8, trabalhoGrupo: 5}]

    