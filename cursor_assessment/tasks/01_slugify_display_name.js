/**
 * Struktur & standardisasi nama (mendukung perencanaan naming).
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
  // 1. lowercase and trim
  let result = s.toLowerCase().trim();
  
  // 2. replace whitespace (1+ spaces/tabs) with '-'
  result = result.replace(/\s+/g, '-');
  
  // 3. allow only [a-z0-9-_] - remove any other characters
  result = result.replace(/[^a-z0-9\-_]/g, '');
  
  // 4. replace '--' into '-' (double strip) - compress multiple dashes
  result = result.replace(/-+/g, '-');
  
  // 5. remove '-' at the beginning and end of the value
  result = result.replace(/^-+|-+$/g, '');
  
  return result;
}
module.exports = { slugify };
