const {
  incluirPokemon,
  clearPokemons,
  populaPokemons,
  filterBySpeed,
  filterByName,
} = require("../js/pokemons");

beforeEach(() =>{
  clearPokemons();
  populaPokemons();
})

it('Retorna novos pokemons', () => {
  incluirPokemon({name: 'Atanes', type: 'Electric', speed: 99})
  expect.assertions(1);
  return filterBySpeed(50).then((response) => {
    expect(response).toEqual(['Charmander', 'Pikachu', 'Atanes'])
  })
})

test('Retorna os pokemons com velocidade acima de 50', () => {
  expect.assertions(1);
  return filterBySpeed(50).then((response) => {
    expect(response).toEqual(['Charmander', 'Pikachu'])
  })
})

it('Retorna erro quando nao encontra um pokemon', () => {
  expect.assertions(1);
  return filterBySpeed(300).catch((response) => {
    expect(response).toEqual("Nenhum Pokemon encontrado.");
  })
})

it('Retorna novos pokemons', () => {
  incluirPokemon({name: 'Atanes', type: 'Electric', speed: 99})
  expect.assertions(1);
  return filterBySpeed(50).then((response) => {
    expect(response).toEqual(['Charmander', 'Pikachu', 'Atanes'])
  })
})
