function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw Error('Cannot process');
  }
  itemsMap.forEach((quantity, item) => {
    if (quantity === 1) {
      itemsMap.set(item, 100);
    }
  });
  return itemsMap;
}
export default updateUniqueItems;
