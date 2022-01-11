const signal = require('../signal');
const { expect } = require('chai');

describe('Verifica se quando o número', () => {
  describe('for maior que zero', () => {
    describe('a resposta', () => {
      const resposta = signal(10)
      it('é uma "string"', () => {
        expect(resposta).to.be.a('string');
      });
      it('retorna "positivo"', () => {
        expect(resposta).to.be.equal('positivo');
      });
    })
  })
  
  describe('for menor que zero', () => {
    describe('a resposta', () => {
      const resposta = signal(-5)
      it('é uma "string"', () => {
        expect(resposta).to.be.a('string');
      });
      it('retorna "negativo"', () => {
        expect(resposta).to.be.equal('negativo');
      });
    })
  })
  
  describe('for igual a zero', () => {
    describe('a reposta', () => {
      const resposta = signal(0)
      it('é uma "string"', () => {
        expect(resposta).to.be.a('string');
      });
      it('retorna "netro"', () => {
        expect(resposta).to.be.equal('neutro');
      });
    })
  })
});

describe('Verifica se quando o parametro passado não for um número', () => {
  describe('a resposta', () => {
    const resposta = signal('55')
    it('é uma "string"', () => {
      expect(resposta).to.be.a('string')
    })
    it('é "o valor deve ser um número"', () => {
      expect(resposta).to.be.equals('o valor deve ser um número')
    })
  })
})