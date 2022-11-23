let numArray = [6, 1, 8, 3, 12];

describe('test 5 test suite', () => {
    test('the shopping list has milk on it', () => {
        //It must have at least 4 elements
        expect(numArray.length).toBeGreaterThanOrEqual(4);
        //It must not have the number 2 as any of it's elements
        expect(numArray).not.toContain(2);
        //The total of all numbers in the array must add up to 30
        expect(numArray.reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(30);
    });
});