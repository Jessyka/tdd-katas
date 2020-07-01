const { greet } = require('../src/greeter.js');

describe('Greeter Class', () => {
    it('receives a name as input and outputs Hello <name>.', () => {
        expect(greet('Joao')).toBe('Hello Joao')
    })

    it('receives a name as input, trims the input and outputs Hello <name>.', () => {
        expect(greet('Joao  ')).toBe('Hello Joao')
    })

    it('receives a name as input, capitalizes the first letter of the name and outputs Hello <name>.', () => {
        expect(greet('joao')).toBe('Hello Joao')
    })
})