const { greet } = require('../src/greeter.js');

describe('Greeter Class', () => {
    it('receives a name as input and outputs Hello <name>.', () => {
        const mockDate =  new Date(2020, 1, 1, 15, 20);;
        const spy = jest
                .spyOn(global, 'Date')
                .mockImplementation(() => mockDate);
        expect(greet('Joao')).toBe('Hello Joao');
        spy.mockRestore();
    })

    it('receives a name as input, trims the input and outputs Hello <name>.', () => {
        const mockDate =  new Date(2020, 1, 1, 15, 20);;
        const spy = jest
                .spyOn(global, 'Date')
                .mockImplementation(() => mockDate);
        expect(greet('Joao  ')).toBe('Hello Joao');
        spy.mockRestore();
    })

    it('receives a name as input, capitalizes the first letter of the name and outputs Hello <name>.', () => {
        const mockDate =  new Date(2020, 1, 1, 15, 20);;
        const spy = jest
                .spyOn(global, 'Date')
                .mockImplementation(() => mockDate);
        expect(greet('joao')).toBe('Hello Joao');
        spy.mockRestore();
    })
    
    it('greet returns Good morning <name> when the time is 06:00-12:00', () => {
        const mockDate = new Date(2020, 1, 1, 6, 30);
        const spy = jest
                .spyOn(global, 'Date')
                .mockImplementation(() => mockDate);
        expect(greet('joao')).toBe('Good morning Joao');
        spy.mockRestore();
    })

    it('greet returns Good evening <name> when the time is 18:00-22:00', () => {
        const mockDate =  new Date(2020, 1, 1, 19, 20);;
        const spy = jest
                .spyOn(global, 'Date')
                .mockImplementation(() => mockDate);
        expect(greet('joao')).toBe('Good evening Joao');
        spy.mockRestore();
    })
})