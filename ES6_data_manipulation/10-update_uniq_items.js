function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw Error('Cannot process');
  }
  items.forEach((quantity, item) => {
    if (quantity === 1) {
      items.set(item, 100);
    }
  });
  return items;
}
export default updateUniqueItems;
