const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');
const Utils = require('./utils');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with successful response when success is true', function(done) {
    console.log('Starting test for success=true');
    getPaymentTokenFromAPI(true).then(result => {
      console.log('Test completed successfully');
      expect(result.data).to.equal('Successful response from the API');
      done();
    }).catch(error => {
      console.error('Error in success=true test:', error);
      throw error;
    });
  });

  it('should not reject when success is false', function(done) {
    console.log('Starting test for success=false');
    getPaymentTokenFromAPI(false).then(() => {
      console.log('Test completed successfully');
      done();
    }).catch(error => {
      console.error('Unexpected rejection in success=false test:', error);
      throw new Error('Unexpected rejection');
    });
  });
});
