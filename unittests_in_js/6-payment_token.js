const Utils = require('./utils');

function getPaymentTokenFromAPI(success) {
  paymentAmount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${paymentAmount}`);
  return paymentAmount;
}

module.exports = sendPaymentRequestToApi;
