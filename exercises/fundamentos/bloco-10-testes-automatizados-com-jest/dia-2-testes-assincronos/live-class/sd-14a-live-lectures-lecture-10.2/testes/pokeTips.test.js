const pokeTips = require("../js/pokeTips");

// Validar as respostas da função pokeTips usando Jest

test('Retornar o melhor pokemon para começar o jogo', (done) => {
  const callback = (dado) => {
    expect(dado).toBe('Charmander é o melhor pokémon para começar.')
    done();
  }
  return pokeTips(callback)
})

