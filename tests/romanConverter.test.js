
const { romanToDecimal } = require('../src/romanConverter.js');

describe('Roman Converter', () => {
  it('returns 1 when I', () => {
    expect(romanToDecimal('I')).toBe(1);
  })

  it('returns 5 when V', () => {
    expect(romanToDecimal('V')).toBe(5);
  })

  it('returns 10 when X', () => {
    expect(romanToDecimal('X')).toBe(10);
  })

  it('returns 50 when L', () => {
    expect(romanToDecimal('L')).toBe(50);
  })

  it('returns 100 when C', () => {
    expect(romanToDecimal('C')).toBe(100);
  })

  it('returns 500 when D', () => {
    expect(romanToDecimal('D')).toBe(500);
  })

  it('returns 1000 when M', () => {
    expect(romanToDecimal('M')).toBe(1000);
  })

  it('returns 2006 when MMVI', () => {
    expect(romanToDecimal('MMVI')).toBe(2006);
  })

  it('returns 1944 when MCMXLIV', () => {
    expect(romanToDecimal('MCMXLIV')).toBe(1944);
  })
})