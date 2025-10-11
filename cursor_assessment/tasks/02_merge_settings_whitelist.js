/**
 * Sedang — Manajemen konfigurasi (whitelist keys).
 * Hanya key yang ada di `defaults` muncul di hasil. Nilai `user` menimpa bila ada.
 * Tidak memodifikasi input.
 * @param {Record<string,any>} defaults
 * @param {Record<string,any>} user
 * @returns {Record<string,any>}
 */
function mergeSettings(defaults, user) {
  // TODO: implement
}
module.exports = { mergeSettings };
