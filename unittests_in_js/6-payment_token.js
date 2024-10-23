const Utils = require('./utils');

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Success response from the API' });
    } else {
      }
    });
  }

module.exports = getPaymentTokenFromAPI;
