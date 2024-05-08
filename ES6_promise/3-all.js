import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = 'photo-profile-1';
  const user = { firstName: 'Guillaume', lastName: 'Salva' };

  Promise.all([
    uploadPhoto(photo),
    createUser(user),
  ])
    .then(([photoResult, userResult]) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
