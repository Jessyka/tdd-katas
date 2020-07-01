const { greet } = require('../src/greeter.js');

describe('Greeter Class', () => {
    it('receives a name as input and outputs Hello <name>.', () => {
        expect(greet('Joao')).toBe('Hello Joao')
    })
})