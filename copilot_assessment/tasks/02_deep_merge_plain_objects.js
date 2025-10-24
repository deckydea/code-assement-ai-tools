function deepMerge(a, b) {
  // Helper: check if a value is a plain object (and not null, array, function, etc.)
  const isPlainObject = (v) => {
    return Object.prototype.toString.call(v) === "[object Object]";
  };

  // If both a and b are plain objects, merge recursively
  if (isPlainObject(a) && isPlainObject(b)) {
    const out = {};
    // Copy keys from `a` first
    for (const key of Object.keys(a)) {
      // Note: we intentionally copy the value (deep merge will handle nested objects)
      out[key] = a[key];
    }
    // Merge/overwrite with keys from `b`
    for (const key of Object.keys(b)) {
      const av = out.hasOwnProperty(key) ? out[key] : undefined;
      const bv = b[key];
      // If both sides for this key are plain objects, recurse
      if (isPlainObject(av) && isPlainObject(bv)) {
        out[key] = deepMerge(av, bv);
      } else {
        // Otherwise, take value from b (per rules). Ensure we don't keep references to originals.
        out[key] = bv;
      }
    }
    return out;
  }

  // If either value is not a plain object, return b (per rules). For safety, if b is a plain
  // object we should return a shallow clone to avoid accidental mutation of b by callers.
  if (isPlainObject(b)) {
    // Return a shallow clone of b
    const clone = {};
    for (const k of Object.keys(b)) clone[k] = b[k];
    return clone;
  }

  return b;
}
module.exports = { deepMerge };
