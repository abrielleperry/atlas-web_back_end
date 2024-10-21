import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();

describe('createPushNotificationsJobs', () => {
  beforeEach(() => {
    queue.testMode.enter();
  });
  afterEach(() => {
    queue.testMode.clear();
    queue.testMode.exit();
  });
})
