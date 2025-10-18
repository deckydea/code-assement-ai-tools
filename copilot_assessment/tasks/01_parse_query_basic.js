/**
 * Detail parsing.
 * Aturan:
 * - '' -> {}
 * - 'a=1&b=hello%20world' -> { a:'1', b:'hello world' } (decodeURIComponent)
 * - 'flag' -> { flag:'' }
 * - Abaikan pasangan kosong dan entri tanpa key (mis. '=x' diabaikan)
 * @param {string} qs
 * @returns {Record<string,string>}
 */
function parseQuery(qs) {
  const res = {};
  if (!qs) return res;
  const safeDecode = (s) => {
    try {
      return decodeURIComponent(s);
    } catch (e) {
      return s;
    }
  };
  const parts = qs.split('&');
  for (const part of parts) {
    if (part === '') continue; // skip empty segments from repeated &
    const idx = part.indexOf('=');
    if (idx === -1) {
      // flag-like entry: 'flag' => { flag: '' }
      const key = safeDecode(part);
      if (key.length > 0) res[key] = '';
      continue;
    }
    if (idx === 0) {
      // no key like '=x' -> ignore
      continue;
    }
    const key = safeDecode(part.slice(0, idx));
    const value = safeDecode(part.slice(idx + 1));
    // accept empty value (e.g. 'k=')
    if (key.length > 0) res[key] = value;
  }
  return res;
}
module.exports = { parseQuery };
