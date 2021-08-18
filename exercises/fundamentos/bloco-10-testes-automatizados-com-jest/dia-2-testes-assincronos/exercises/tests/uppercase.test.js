const { expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test('Verifica a transformação de letras de uma palavra em maiúscula', (done) => {
  uppercase('palavra', (str) => {
    expect(str).toBe('PALAVRA');
    done();
  })
})