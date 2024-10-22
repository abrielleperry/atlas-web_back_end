import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('Test suite for calculateNumber function', function () {

    describe('SUM operation', function () {
        it('should return 5 when rounding 2.4 and 2.5', function () {
            expect(calculateNumber('SUM', 2.4, 2.5)).to.equal(5);
        });

        it('should return 0 when adding -2.1 and 2.1', function () {
            expect(calculateNumber('SUM', -2.1, 2.1)).to.equal(0);
        });
    });

    describe('SUBTRACT operation', function () {
        it('should return 0 when rounding 2.5 and 2.5', function () {
            expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
        });

        it('should return -5 when subtracting 1.5 from -3.4', function () {
            expect(calculateNumber('SUBTRACT', -3.4, 1.5)).to.equal(-5);
        });
    });

    describe('DIVIDE operation', function () {
        it('should return 2 when dividing 2.4 by 1.2', function () {
            expect(calculateNumber('DIVIDE', 2.4, 1.2)).to.equal(2);
        });

        it('should return "Error" when dividing by 0', function () {
            expect(calculateNumber('DIVIDE', 4.9, 0)).to.equal('Error');
        });

        it('should return "Error" when dividing by a value rounded to 0', function () {
            expect(calculateNumber('DIVIDE', 5.1, 0.4)).to.equal('Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should return "Invalid operation" for unsupported operations', function () {
            expect(calculateNumber('MULTIPLY', 2, 3)).to.equal('Invalid operation');
        });
    });
});
