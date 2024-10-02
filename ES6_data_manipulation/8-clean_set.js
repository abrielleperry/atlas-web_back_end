function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';
  if (startString === '') return '';

  let result = ''; // initialize empty string to store result
  // iterate over each value in the set
  set.forEach((value) => {
    // check if value starts with startString
    if (value.startsWith(startString)) {
      // if not empty
      if (result !== '') {
        // add hyhen to result
        result += '-';
      }
      // add part of value after startString to result
      result += value.slice(startString.length);
    }
  });
  return result;
}

export default cleanSet;
