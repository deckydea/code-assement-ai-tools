/**
 * BUG-FIX (Sulit) — Implementasi buggy: backoff tidak eksponensial & tidak menghormati batas retry.
 * Perbaiki agar:
 * - Tunggu 100ms, 200ms, 400ms, ... sebelum percobaan ke-2, ke-3, dst.
 * - `retries` = jumlah percobaan total (mis. retries=3 -> max 3 percobaan).
 * - Resolve saat sukses; throw error terakhir bila semua gagal.
 * @param {() => Promise<any>} fn
 * @param {number} retries
 */
async function retryWithBackoffBuggy(fn, retries) {
  // BUGGY VERSION (untuk diperbaiki peserta):
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, 50));
      }
    }
  }
  throw lastErr;
}
module.exports = { retryWithBackoffBuggy };
