function deepMerge(a, b) {
  // Helper function to check if a value is a plain object
  function isPlainObject(val) {
    return val !== null && 
           typeof val === 'object' && 
           !Array.isArray(val) &&
           Object.prototype.toString.call(val) === '[object Object]';
  }

  // If either a or b is not a plain object, return b
  if (!isPlainObject(a) || !isPlainObject(b)) {
    return b;
  }

  // Create a new object to avoid mutating a or b
  const result = {};

  // First, copy all properties from a
  for (const key in a) {
    if (a.hasOwnProperty(key)) {
      result[key] = a[key];
    }
  }

  // Then, merge properties from b
  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      // If both values are plain objects, merge recursively
      if (isPlainObject(result[key]) && isPlainObject(b[key])) {
        result[key] = deepMerge(result[key], b[key]);
      } else {
        // Otherwise, use value from b
        result[key] = b[key];
      }
    }
  }

  return result;
}
module.exports = { deepMerge };
