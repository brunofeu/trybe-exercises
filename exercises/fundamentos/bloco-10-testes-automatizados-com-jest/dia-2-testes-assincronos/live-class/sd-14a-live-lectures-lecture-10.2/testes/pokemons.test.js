const {
  incluirPokemon,
  clearPokemons,
  populaPokemons,
  filterBySpeed,
  filterByName,
} = require("../js/pokemons");



describe('Verifica retorno dos pokemons com base na sua velocidade', () => {
  beforeEach(() => {
    clearPokemons();
    populaPokemons();
  })

  it('Com velocidade acima de 50, incluindo um novo pokemon na lista', async () => {
    incluirPokemon({ name: 'Atanes', type: 'Electric', speed: 99 })
    expect.assertions(1);
    const response = await filterBySpeed(50);
    expect(response).toEqual(['Charmander', 'Pikachu', 'Atanes']);
  })

  it('Com velocidade acima de 50', async () => {
    expect.assertions(1);
    const response = await filterBySpeed(50)
    expect(response).toEqual(['Charmander', 'Pikachu'])
  })

  it('Retorna erro quando nao encontra um pokemon', async () => {
    expect.assertions(1);
    try {
      const response = await filterBySpeed(300)
    } catch (error) {
      expect(error).toEqual("Nenhum Pokemon encontrado.");
    }
  })
})


describe('Verifica retorno dos pokemons com base na sua velocidade', () => {

  beforeEach(() => {
    clearPokemons();
    populaPokemons();
  })

  it('Com velocidade acima de 50, incluindo um novo pokemon na lista', () => {
    incluirPokemon({ name: 'Atanes', type: 'Electric', speed: 99 });
    expect.assertions(1);
    return filterBySpeed(50).then((response) => {
      expect(response).toEqual(['Charmander', 'Pikachu', 'Atanes'])
    })
  })

  it('Com velocidade acima de 50', () => {
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
})
