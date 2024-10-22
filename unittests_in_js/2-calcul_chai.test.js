const assert = require('assert');
const calculate = require('./1-calcul');

describe('Test suite for calculate function', function () {
    describe('SUM operation', function () {
        it('should return 5 when rounding 2.4 and 2.5', function () {
            assert.strictEqual(calculate('SUM', 2.4, 2.5), 5);
        });

        it('should return 0 when adding -2.1 and 2.1', function () {
            assert.strictEqual(calculate('SUM', -2.1, 2.1), 0);
        });
    });

    describe('SUBTRACT operation', function () {
        it('should return 0 when rounding 2.5 and 2.5', function () {
            assert.strictEqual(calculate('SUBTRACT', 2.5, 2.5), 0);
        });

        it('should return -5 when subtracting 1.5 from -3.4', function () {
            assert.strictEqual(calculate('SUBTRACT', -3.4, 1.5), -5);
        });
    });

    describe('DIVIDE operation', function () {
        it('should return 2 when dividing 2.4 by 1.2', function () {
            assert.strictEqual(calculate('DIVIDE', 2.4, 1.2), 2);
        });

        it('should return Error when dividing by 0', function () {
            assert.strictEqual(calculate('DIVIDE', 4.9, 0), 'Error');
        });

        it('should return Error when dividing by a value rounded to 0', function () {
            assert.strictEqual(calculate('DIVIDE', 5.1, 0.4), 'Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should return "Invalid operation" for unsupported operations', function () {
            assert.strictEqual(calculate('MULTIPLY', 2, 3), 'Invalid operation');
        });
    });
});
