const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!isNaN(id)) {
    const paymentMethods = [
      { method: 'Credit Card', status: 'Active' },
      { mnethod: 'Paypal', status: 'Pending' }
    ];
    res.json({ paymentMethods });
  } else {
    res.status(404).json({ error: 'Cart not found'});
  }
})

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
});

module.exports = app;
