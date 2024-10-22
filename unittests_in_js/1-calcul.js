function calculate(a, b, type) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type.toUpperCase()) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid operation');
  }
}

module.exports = { calculate };
