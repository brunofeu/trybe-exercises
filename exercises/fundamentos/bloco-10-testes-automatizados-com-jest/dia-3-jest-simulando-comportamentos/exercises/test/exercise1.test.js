const exercise1 = require('../js/exercise1')



describe('test if function randomNumber was called', () => {
 
  it('should return number of time was called', () => {
    exercise1.randomNumber = jest.fn().mockReturnValue(10)
  
    expect(exercise1.randomNumber()).toBe(10)
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  })

  
  
})
