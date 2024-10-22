const assert = require('assert');
const { calculate } = require('./1-calcul');

describe('calculate function', () => {
  it('should sum two numbers', () => {
    assert.strictEqual(calculate(5, 3, 'sum'), 8);
    assert.strictEqual(calculate(-5, 3, 'sum'), -2);
    assert.strictEqual(calculate(5, -3, 'sum'), 2);
  });

  it('should subtract two numbers', () => {
    assert.strictEqual(calculate(5, 3, 'subtract'), 2);
    assert.strictEqual(calculate(-5, 3, 'subtract'), -8);
    assert.strictEqual(calculate(5, -3, 'subtract'), 8);
  });

  it('should divide two numbers', () => {
    assert.strictEqual(calculate(6, 2, 'divide'), 3);
    assert.strictEqual(calculate(-6, 2, 'divide'), -3);
    assert.strictEqual(calculate(6, -2, 'divide'), -3);
    assert.strictEqual(calculate(6, 0, 'divide'), 'Error');
    assert.strictEqual(calculate(0, 2, 'divide'), 0);
  });

  it('should round numbers before calculation', () => {
    assert.strictEqual(calculate(3.7, 2.9, 'sum'), 6);
    assert.strictEqual(calculate(3.7, 2.9, 'subtract'), 0.8);
    assert.strictEqual(calculate(3.7, 2.9, 'divide'), 1.27);
  });

  it('should handle invalid operations', () => {
    assert.throws(calculate(5, 3, 'invalid'), { name: 'Error' });
  });
})
