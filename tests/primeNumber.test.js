const { findPrimes } = require('../src/primeNumber.js')

describe('Prime Numbers', () => {
  it('returns [] when 1', () => {
    expect(findPrimes(1)).toStrictEqual([]);
  })

  it('returns [2] when 2', () => {
    expect(findPrimes(2)).toStrictEqual([2]);
  })

  it('returns [2,3] when 3', () => {
    expect(findPrimes(3)).toStrictEqual([2,3]);
  })

  it('returns [2,3,5,7] when 7', () => {
    expect(findPrimes(7)).toStrictEqual([2,3,5,7]);
  })
})