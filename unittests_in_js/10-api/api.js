const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
  const { id } = request.params;
  if (isNaN(id)) {
    return response.status(404).send('Id must be a number');
  }
  return response.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (request, response) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  response.json(availablePayments);
});

app.post('/login', (request, response) => {
  const { userName } = request.body;
  if (!userName) {
    return response.status(400).send('Username is required');
  }
  response.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
});
module.exports = app;
