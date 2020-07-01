const { ValidateIpv4Address } = require('../src/ipValidator');

describe('Ip Validator', () => {
  it('returns false when ip address is empty', () => {
    expect(ValidateIpv4Address('')).toBe(false);
  })

  it('returns false when ip address is 0.0.0.0', () => {
    expect(ValidateIpv4Address('0.0.0.0')).toBe(false);
  })

  it('returns false when incomplete ip address 10.0.1', () => {
    expect(ValidateIpv4Address('10.0.1')).toBe(false);
  })

  it('returns false when broadcast ip address', () => {
    expect(ValidateIpv4Address('255.255.255.255')).toBe(false);
  })

  it('returns true when ip address is 1.1.1.1', () => {
    expect(ValidateIpv4Address('1.1.1.1')).toBe(true);
  })

  it('returns true when ip address is 192.168.1.1', () => {
    expect(ValidateIpv4Address('192.168.1.1')).toBe(true);
  })

  it('returns true when ip address is 10.0.0.1', () => {
    expect(ValidateIpv4Address('10.0.0.1')).toBe(true);
  })
})