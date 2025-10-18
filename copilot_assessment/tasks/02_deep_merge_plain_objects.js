/**
 * Perincian rekursif & detail immutability.
 * Deep-merge dua plain object (tanpa array/func). Bila keduanya object -> merge rekursif.
 * Selain itu, pakai nilai dari `b`. Hasil harus objek BARU (immutable).
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */
function deepMerge(a, b) {
  const isPlainObject = (v) => {
    return (
      v !== null && typeof v === 'object' && !Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'
    );
  };

  const aa = a || {};
  const bb = b || {};
  const res = {};

  const keys = new Set([...Object.keys(aa), ...Object.keys(bb)]);
  for (const key of keys) {
    const aHas = Object.prototype.hasOwnProperty.call(aa, key);
    const bHas = Object.prototype.hasOwnProperty.call(bb, key);
    const va = aHas ? aa[key] : undefined;
    const vb = bHas ? bb[key] : undefined;

    if (isPlainObject(va) && isPlainObject(vb)) {
      res[key] = deepMerge(va, vb);
    } else if (bHas) {
      // prefer b's value (may be undefined/null/non-object)
      // if it's a plain object, clone it to keep immutability
      res[key] = isPlainObject(vb) ? deepMerge({}, vb) : vb;
    } else if (aHas) {
      // only present in a
      res[key] = isPlainObject(va) ? deepMerge({}, va) : va;
    }
  }

  return res;
}
module.exports = { deepMerge };
