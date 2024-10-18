const kue = require('kue');

const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
  console.log(`Sending notifiction to ${phoneNumber}, with message: ${message}`);
}
