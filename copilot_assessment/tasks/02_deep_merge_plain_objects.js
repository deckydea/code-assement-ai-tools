function isPlainObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
}

function deepMerge(a, b) {
  const result = {};

  // Copy all keys from a
  for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(a, key)) {
      result[key] = a[key];
    }
  }

  // Merge/overwrite with keys from b
  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      if (isPlainObject(result[key]) && isPlainObject(b[key])) {
        result[key] = deepMerge(result[key], b[key]);
      } else {
        result[key] = b[key];
      }
    }
  }

  return result;
}

module.exports = { deepMerge };