const kue = require('kue');

const queue = kue.createQueue();

const jobData = {
  phoneNumber: '1234567890',
  message: 'This is a test message'
};

const job = queue.create('push_notifcations_code', jobData)
  .save((err) => {
    if (!err) console.log(`Notifcation job created: ${jov.id}`);
  });
