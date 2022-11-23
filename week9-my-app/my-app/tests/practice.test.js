let sum = (num1, num2) => num1 + num2;
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

function divide(numerator, denominator){
  if(denominator == 0){
    throw new Error('division by zero');
  }else{
    return numerator / denominator;
  }
}

describe('Practice Tests', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); //This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  test('divide function throws error when dividing by zero', ()=>{
    expect(divide(6,3)).toBe(2);
    expect(() => divide(6,0)).toThrow();
    expect(() => divide(67,0)).toThrow('division by zero');
  });
});