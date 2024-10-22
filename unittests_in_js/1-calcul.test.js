const assert = require('assert');
const { calculate } = require('./1-calcul');

describe('calculate function', () => {
  it('should sum two numbers', () => {
    assert.strictEqual(calculate(5, 3, 'sum'), 8);
    assert.strictEqual(calculate(-5, 3, 'sum'), -2);
    assert.strictEqual(calculate(5, -3, 'sum'), 2);
  })
})
