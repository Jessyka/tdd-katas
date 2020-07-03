const { sumOfNumbers } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('returns 0 when empty string', () => {
    expect(sumOfNumbers('')).toBe(0);
  })

  it('retuns the value when a single number', () => {
    expect(sumOfNumbers('5')).toBe(5);
  })

  it('returns the sum when two numbers, comma delimited', () => {
    expect(sumOfNumbers('10,2')).toBe(12);
  })
  
  it('returns the sum when two numbers, newline delimited', () => {
    expect(sumOfNumbers('1\n2')).toBe(3);
  })
  
  it('returns the sum when three numbers,  delimited either way', () => {
    expect(sumOfNumbers('1\n2,3\n4')).toBe(10);
  })
  
  it('returns error message when negative numbers', () => {
    expect(sumOfNumbers('-1,2,-3')).toBe('negatives not allowed: -1,-3');
  })
  
  it('ignores numbers greater than 1000', () => {
    expect(sumOfNumbers('2,1000')).toBe(2);
  })
  
  it('defines a new single char delimiter first line starting with // (e.g //#\n1#2 for a ‘#’ as the delimiter)', () => {
    expect(sumOfNumbers('//#\n1#2')).toBe(3);
  })
})