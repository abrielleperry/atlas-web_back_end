function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw Error('Cannot process');
  }
  itemsMap.forEach((quantity, item) => { // iterate over map
    if (quantity === 1) { // update the quanity to 100 if 1
      itemsMap.set(item, 100);
    }
  });
  return itemsMap;
}
export default updateUniqueItems;
