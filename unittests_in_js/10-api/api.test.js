const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  describe('GET /cart/:id', () => {
    it('Correct status code when :id is a number?', (done) => {
      request('http://localhost:7865/cart/123', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct status code when :id is NOT a number?', (done) => {
      request('http://localhost:7865/cart/abc', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Correct response body when :id is a number?', (done) => {
      request('http://localhost:7865/cart/123', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });
});
