const calculateNumber = (type, ...args) => {
  switch(type) {
    case 'SUM':
      return args.reduce((a, b) => a + b, 0);
    case 'SUBTRACT':
      return args[0] - args[1];
    default:
      throw new Error(`Unknown operation type: ${type}`);
  }
};

module.exports = { calculateNumber };
