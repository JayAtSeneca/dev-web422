let sum = (num1, num2) => num1 + num2;

describe('Practice Tests', () => {
  test('sum function adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
});