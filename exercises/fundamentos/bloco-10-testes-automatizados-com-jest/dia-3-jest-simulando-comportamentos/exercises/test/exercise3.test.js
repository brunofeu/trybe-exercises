const exercise1 = require('../js/exercise1')

describe('Realiza os testes do exercicio 3', () => {
  it('se recebe 3 parametros e se retorna a multiplicacao', () => {
    exercise1.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)

    expect(exercise1.randomNumber(3, 4, 5)).toBe(60);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(3, 4, 5);
  })

  it('se recebe um parametro e retorna seu dobro', () => {
    exercise1.randomNumber.mockReset();

    exercise1.randomNumber = jest.fn().mockImplementation((num) => num * 2);

    expect(exercise1.randomNumber(10)).toBe(20);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(10);

  })

})