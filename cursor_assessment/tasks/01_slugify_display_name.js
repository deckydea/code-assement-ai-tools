/**
 * Mudah — Struktur & standardisasi nama (mendukung perencanaan naming).
 * Buat slug URL aman:
 * - lowercase, trim
 * - ganti whitespace (1+ spasi/tab) -> '-'
 * - izinkan [a-z0-9-_]
 * - kompres '--' -> '-'
 * - hapus '-' di awal/akhir
 * @param {string} s
 * @returns {string}
 */
function slugify(s) {
  // TODO: implement
}
module.exports = { slugify };
