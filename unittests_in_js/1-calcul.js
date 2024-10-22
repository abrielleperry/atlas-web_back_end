function calculate(a, b, type) {
  const roundedA = Math.round(a * 100) / 100;
  const roundedB = Math.round(b * 100) / 100;

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
