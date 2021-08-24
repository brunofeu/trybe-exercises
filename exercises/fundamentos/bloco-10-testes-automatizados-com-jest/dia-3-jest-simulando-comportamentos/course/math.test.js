const math = require('./math');
jest.mock("./math");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

// const math = require('./math');

// test("#somar", () => {
//     // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//     const mockSomar = jest.spyOn(math, "somar");
  
//     mockSomar(1, 2);
//     expect(mockSomar).toHaveBeenCalled();
//     expect(mockSomar).toHaveBeenCalledTimes(1);
//     expect(mockSomar).toHaveBeenCalledWith(1, 2);
//     expect(mockSomar(1, 2)).resolves.toBe(3);
//   });

test('#subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(2,1)

    expect(math.subtrair).toHaveBeenCalled()
    expect(math.subtrair).toHaveBeenCalledTimes(1)
    expect(math.subtrair).toHaveBeenCalledWith(2,1)
    expect(math.subtrair(2,1)).toBe(1)
    
})