const exercise1 = require('../js/exercise1')

test('se recebe 2 parametros, quantas vezes foi chamada, e o resultado da divisao', () => {
  
  exercise1.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)

  expect(exercise1.randomNumber(10, 5)).toBe(2);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise1.randomNumber).toHaveBeenCalledWith(10, 5);
  

})