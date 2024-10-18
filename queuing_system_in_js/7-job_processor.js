import kue from 'kue';


const blacklistedNumbers = ['4153518780', '4153518781'];

const sendNotification = (phoneNumber, message, job, done) => {
  job.progress(0, 100)

  if (blacklistedNumbers.includes(phoneNumber)) {
    return done(new Error (`Phone number ${phoneNumber} is blacklisted`))
  }

  job.progress(50, 100)
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)
  done();
}

const queue = kue.createQueue();

queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done)
})

queue.on('job enqueue', (id) => {
  kue.Job.get(id, (err, job) => {
    if (err) return;
    console.log(`Notification job ${job.id} 0% complete`)
  })
})

queue.on('job.complete', (id) => {
  kue.Job.get(id, (err, job) => {
    if (err) return;
    console.log(`Notification job ${job.id} completed`)
  })
})

queue.on('job failed', (id, result) => {
  kue.Job.get(id, (err, job) => {
    console.log(`Notification job ${job.id} failed: ${result.message}`)
  })
})

const notifications = [
    { phoneNumber: '4153518743', message: 'This is the code 4321 to verify your account' },
    { phoneNumber: '4153538781', message: 'This is the code 4562 to verify your account' },
    { phoneNumber: '4153118782', message: 'This is the code 4321 to verify your account' },
    { phoneNumber: '4153718781', message: 'This is the code 4562 to verify your account' },
    { phoneNumber: '4159518782', message: 'This is the code 4321 to verify your account' },
    { phoneNumber: '4158718781', message: 'This is the code 4562 to verify your account' },
    { phoneNumber: '4153818782', message: 'This is the code 4321 to verify your account' },
    { phoneNumber: '4154318781', message: 'This is the code 4562 to verify your account' },
    { phoneNumber: '4151218782', message: 'This is the code 4321 to verify your account' },
];

notifications.forEach(({ phoneNumber, message }) => {
  const job = queue.create('push_notification_code_2', { phoneNumber, message })
    .save((err) => {
      if (!err) console.log(`Enqueued job with phone number: ${phoneNumber}`);
    });
});
