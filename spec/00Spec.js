let Code = require('../code/00_multiples_of_3_and_5/code');

describe('Sum of the multiples of 3 and 5 below 100', () => {

    beforeEach(function() {
        code = new Code();
    });

    describe('Finding the multiples of 3 and 5', () => {
        // it('should store all the multiples of 3 in an array', () => {
        //     expect(code.multiples)
        // });

        it('should return "No multiples" if arg is < 3 ', () => {
            expect(code.multiples(2)).toBe('No multiples found.');
        });
    });
});

