function updateData(currentObject: Object, newDataObject: Object): Object {
  const result = {};

  for (const key in currentObject) {
    if (newDataObject.hasOwnProperty(key)) {
      result[key] = newDataObject[key];
    } else {
      result[key] = currentObject[key];
    }
  }

  return result;
}

module.exports = updateData;
