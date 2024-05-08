// func takes promise as arg
function handleResponseFromAPI(promise) {
  // return new promise obj
  return new Promise((resolve) => {
    // arrach then method to promise passed as arg
    promise
      .then(() => {
        console.log('Got a response from the API');
        // resolve promise with obj containing status and body
        resolve({
          status: 200,
          body: 'success',
        });
      })
      // attach catch method to handle errors during promise execution
      .catch(() => {
        // resolve promise with new Error obj instead of rejecting
        resolve(new Error());
      });
  });
}
export default handleResponseFromAPI;
