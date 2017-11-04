function Code() {
    storedMultiples: [];
    sum: 0;
}

Code.prototype.multiples = function(int) {

    if (int < 3) {
        return 'No multiples found.';
    }

    this._identifyMultiples(int);
    this._sumOfStoredMultiples();
    return this.sum;
};

Code.prototype._identifyMultiples = function(int) {
    let storedMultiples = [];

    for (let i = 1; i < int; i++) {
        if (i % 15 === 0) {
            storedMultiples.push(i);
        } else if (i % 5 === 0) {
            storedMultiples.push(i);
        } else if (i % 3 === 0) {
            storedMultiples.push(i);
        }
    }

    this.storedMultiples = storedMultiples;
};

Code.prototype._sumOfStoredMultiples = function() {
    let sum = 0;

    this.storedMultiples.forEach(function(element) {
        sum += element;
    });
    
    this.sum = sum;
}

module.exports = Code;
