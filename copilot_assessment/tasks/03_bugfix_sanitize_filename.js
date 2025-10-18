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
  // FIXED VERSION:
  if (!name) return '';
  // 1) Replace one-or-more whitespace with single underscore
  let out = name.replace(/\s+/g, '_');
  // 2) Remove disallowed characters (allow letters, numbers, underscore, dash, dot)
  out = out.replace(/[^a-zA-Z0-9_\-\.]/g, '');
  // 3) Compress multiple underscores into one
  out = out.replace(/_+/g, '_');
  // 4) Remove an underscore immediately before a dot, but allow the special case of "_.ext"
  //    We only remove the underscore if there is at least one other character before it.
  //    Use a regex that finds a non-underscore char followed by underscore(s) and a dot,
  //    and collapse the underscore(s).
  out = out.replace(/([^_])_+\./g, '$1.');
  return out;
}
module.exports = { sanitizeFilenameBuggy };
