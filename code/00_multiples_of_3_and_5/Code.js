function Code() {
    multiplesOfThree: [];
    multiplesOfFive: [];
    multiplesOfFifteen: [];
}

Code.prototype.multiples = function(int) {
    let storedMultiplesOfThree = [];
    let storedMultiplesOfFive = [];
    let storedMultiplesOfFifteen = [];

    if (int < 3) {
        return 'No multiples found.';
    }

    for (let i = 1; i < int + 1; i++) {
        if (i % 15 === 0) {
            storedMultiplesOfFifteen.push(i);
        } else if (i % 5 === 0) {
            storedMultiplesOfFive.push(i);
        } else if (i % 3 === 0) {
            storedMultiplesOfThree.push(i);
        }
    }

    this.multiplesOfThree = storedMultiplesOfThree;
    this.multiplesOfFive = storedMultiplesOfFive;
    this.multiplesOfFifteen = storedMultiplesOfFifteen;
};

module.exports = Code;
