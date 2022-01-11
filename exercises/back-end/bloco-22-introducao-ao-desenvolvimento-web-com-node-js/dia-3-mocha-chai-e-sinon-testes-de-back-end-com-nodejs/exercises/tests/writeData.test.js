const writeData = require('../writeData');
const fs = require('fs').promises;

const { expect } = require('chai');
const sinon = require('sinon');

describe('Executa a função "writeData"', () => {
  describe('a reposta', async () => {

    before(() => { sinon.stub(fs, 'writeFile').returns('ok') })
    after(() => { fs.writeFile.restore()})

    const resposta = await writeData('arquivo.txt', 'lorem ipsum')

    it('é uma "string"', () => {
      expect(resposta).to.be.a('string')
    })

    it('é igual a "ok"', () => {
      expect(resposta).to.be.equals('ok')
    })
  })

})