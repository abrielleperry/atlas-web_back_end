import * as utilsFunctions from './utils';

export default function handleProfileSignup() {
  const promises = [utilsFunctions.uploadPhoto(), utilsFunctions.createUser()];

  Promise.all(promises)
    .then((results) => {
      const photoResult = results[0];
      const userResult = results[1];
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => new Error('Signup system offline'));
}
