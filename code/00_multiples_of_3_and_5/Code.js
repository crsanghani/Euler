function Code() {
}

Code.prototype.multiples = function(int) {
    if (int < 3) {
        return 'No multiples found.';
    }
};

module.exports = Code;