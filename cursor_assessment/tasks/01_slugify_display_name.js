/**
 * Mengubah string menjadi slug yang valid untuk URL atau identifier
 * @param {string} s - String yang akan diubah menjadi slug
 * @returns {string} - Slug yang sudah dibersihkan dan diformat
 */
function slugify(s) {
  // 1. Trim: Hapus spasi di awal dan akhir string
  let result = s.trim();

  // 2. Lowercase: Ubah semua karakter menjadi huruf kecil
  result = result.toLowerCase();

  // 3. Replace whitespace: Ganti spasi berlebih dengan tanda minus
  // Menggunakan regex untuk mengganti satu atau lebih spasi dengan satu tanda minus
  result = result.replace(/\s+/g, "-");

  // 4. Filter karakter: Hapus karakter yang bukan alfanumerik, underscore, atau minus
  // Regex ini mempertahankan huruf (a-z), angka (0-9), underscore (_), dan minus (-)
  result = result.replace(/[^a-z0-9_-]/g, "");

  // 5. Kompres tanda minus: Ganti multiple minus dengan single minus
  // Mengganti dua atau lebih tanda minus berturut-turut dengan satu tanda minus
  result = result.replace(/-+/g, "-");

  // 6. Hapus minus berlebih: Hapus minus di awal dan akhir string
  result = result.replace(/^-+|-+$/g, "");

  return result;
}
module.exports = { slugify };
