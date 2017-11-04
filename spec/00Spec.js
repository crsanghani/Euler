let Code = require('../code/00_multiples_of_3_and_5/code');

describe('Sum of the multiples of 3 and 5 below 100', () => {

    beforeEach(function() {
        code = new Code();
    });
    
    it('should return 3 if given the number 3', () => {
        expect(code.multiples(3)).toBe(3);
    });
});