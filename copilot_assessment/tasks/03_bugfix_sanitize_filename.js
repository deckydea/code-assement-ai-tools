/**
 * Implementasi buggy sanitasi filename.
 * Requirement:
 * - Ganti spasi -> '_' (satu underscore untuk 1+ spasi berturut)
 * - Izinkan huruf, angka, underscore, dash, dan dot
 * - Hapus karakter lain
 * - Kompres multiple '_' jadi satu
 * - Jaga tidak ada '_' sebelum '.' jika sebelumnya kosong (contoh '_.txt' -> '_.txt' boleh)
 * Versi buggy di bawah ini gagal pada beberapa edge case.
 * Perbaiki implementasinya agar lolos test.
 * @param {string} name
 * @returns {string}
 */
function sanitizeFilenameBuggy(name) {
  // BUGGY VERSION:
  return name
    .replace(/\s/g, '_')
    .replace(/[^a-zA-Z0-9_\-\.]/g, '') // ok
    .replace(/__+/g, '__');
}
module.exports = { sanitizeFilenameBuggy };
