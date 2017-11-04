let Code = require('../code/00_multiples_of_3_and_5/code');

describe('Sum of the multiples of 3 and 5 below 100: ', () => {

    beforeEach(function() {
        code = new Code();
    });

    describe('Finding the multiples of 3, 5, 15: ', () => {

        it('should return "No multiples" if arg is < 3 ', () => {
            expect(code.multiples(2)).toBe('No multiples found.');
        });

        it('should store multiples of 3 in an array', () => {
            code.multiples(7);
            expect(code.storedMultiples).toContain(3, 6);
        });

        it('should store multiples of 5 in an array', () => {
            code.multiples(10);
            expect(code.storedMultiples).toContain(5);
        });

        it('should store multiples of 15 in an array', () => {
            code.multiples(16);
            expect(code.storedMultiples).toContain(15);
        });
    });

    describe('Finding the sum of the multiples stored', () => {
        
        it('should take the stored multiples and add them together', () => {
            code.multiples(1000);
            console.log(code.sum);
            code.multiples(10);
            expect(code.sum).toBe(23);
        });
    });
});

