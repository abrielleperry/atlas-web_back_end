function handleResponseFromAPI(promise) {
  return new Promise() => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject new Error;
    }
  }
}
export default handleResponseFromAPI;
