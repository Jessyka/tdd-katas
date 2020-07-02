const { sumOfNumbers } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('returns 0 when empty string', () => {
    expect(sumOfNumbers('')).toBe(0);
  })
})