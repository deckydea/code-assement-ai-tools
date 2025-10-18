/**
 * Ulangi Proses dengan Jeda Meningkat (Exponential Backoff)
 *
 * Ada fungsi `retryWithBackoffBuggy(fn, retries)` yang tujuannya
 * mencoba menjalankan fungsi `fn` berulang kali kalau gagal.
 * Tapi implementasinya masih salah dan harus diperbaiki.
 *
 * Perbaiki supaya:
 * 1. Saat gagal, tunggu jeda waktu sebelum mencoba lagi.
 *    Waktunya meningkat dua kali lipat tiap kali:
 *      100ms, 200ms, 400ms, ... dan seterusnya.
 * 2. Parameter `retries` menunjukkan **total percobaan maksimum**.
 *    Contoh: `retries = 3` artinya boleh mencoba maksimal 3 kali.
 * 3. Jika fungsi `fn` berhasil (resolve), langsung kembalikan hasilnya.
 * 4. Jika semua percobaan gagal, lempar error terakhir.
 *
 * ⚠️ Hati-hati:
 * - Implementasi sebelumnya selalu menunggu 50ms (konstan) → salah.
 * - Gunakan jeda berdasarkan percobaan ke-(n): (attempt - 1) * 100ms.
 *
 * @param {() => Promise<any>} fn  Fungsi async yang akan dicoba ulang.
 * @param {number} retries         Jumlah percobaan maksimum.
 */
async function retryWithBackoffBuggy(fn, retries) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, attempt * 100));
      }
    }
  }
  throw lastErr;
}
module.exports = { retryWithBackoffBuggy };
