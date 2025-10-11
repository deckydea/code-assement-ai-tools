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
  // TODO: implement
}
module.exports = { parseQuery };
