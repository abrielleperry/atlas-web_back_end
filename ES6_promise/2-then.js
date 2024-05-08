// func takes promise as arg
function handleResponseFromAPI(promise) {
  // return new promise obj
  return new Promise((resolve, reject) => {
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
        // reject promise with new Error obj
        reject(new Error());
      });
  });
}
export default handleResponseFromAPI;
