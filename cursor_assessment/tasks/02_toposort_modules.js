/**
 * Urutkan Modul Berdasarkan Ketergantungan (Topological Sort)
 *
 * Diberi daftar pasangan dependensi `edges`, misalnya: [ ['a','b'], ['b','c'] ].
 * Arti pasangan ['a','b'] adalah: **a harus dijalankan sebelum b** (a -> b).
 *
 * Tugas:
 * - Kembalikan urutan modul yang valid sesuai semua aturan ketergantungan.
 * - Jika ada beberapa modul yang bisa dipilih (tidak punya incoming edge),
 *   pilih yang **urut alfabet (ASC)** terlebih dahulu.
 * - Jika ketemu **siklus** (misalnya a->b dan b->a), lempar `Error('CYCLE')`.
 * - Setiap nama modul yang muncul di edges harus muncul **tepat satu kali** di hasil.
 *
 * Contoh:
 *   edges = [['a','c'], ['b','c']]  → hasil: ['a','b','c']
 *
 * @param {Array<[string, string]>} edges  // setiap item: [sebelum, sesudah]
 * @returns {string[]}                      // urutan modul yang valid
 */
function topoSort(edges) {
  // TODO: implement
}

module.exports = { topoSort };
