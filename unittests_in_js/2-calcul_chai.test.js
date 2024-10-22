const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('Calculations', () => {
  it('should add two numbers correctly', () => {
    const result = calculateNumber('SUM', 2.4, 3.6);
    expect(result).to.equal(6);
  });

  it('should subtract two numbers correctly', () => {
    const result = calculateNumber('SUBTRACT', 5.7, 3.2);
    expect(result).to.equal(3);
  });

  it('should divide two numbers correctly', () => {
    const result = calculateNumber('DIVIDE', 6.8, 3.1);
    expect(result).to.be.closeTo(2.3333333333333335, 0.01);
  });

  it('should return error when dividing by zero', () => {
    const result = calculateNumber('DIVIDE', 6.8, 0);
    expect(result).to.equal('Error');
  });

  it('should return invalid operation for unknown type', () => {
    const result = calculateNumber('MULTIPLY', 2, 3);
    expect(result).to.equal('Invalid operation');
  });
});
