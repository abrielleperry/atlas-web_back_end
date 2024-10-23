const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');
const Utils = require('./utils');

describe('getPaymentTokenFromAPI', function() {

  this.beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  this.afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log correct total with 200 and 20', function() {
    sendPaymentRequestToApi(200, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 220')).to.be.true;
  });

  it('should lof the correct totl and be called once for 20 and 10',
    function() {
      sendPaymentRequestToApi(20, 10);
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWith('The total is: 30')).to.be.true;
  });
});
