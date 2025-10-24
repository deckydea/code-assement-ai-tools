/**
 * Melakukan topological sort pada modul berdasarkan ketergantungan
 * Menggunakan algoritma Kahn dengan deteksi siklus
 * @param {Array<Array<string>>} edges - Array berisi [dependensi, modul]
 * @returns {Array<string>} - Array urutan modul yang valid
 * @throws {Error} - Error dengan pesan 'CYCLE' jika terdapat siklus
 */
function topoSort(edges) {
  // 1. Inisialisasi struktur data untuk graph
  const inDegree = new Map(); // Menyimpan jumlah incoming edges untuk setiap node
  const adjacencyList = new Map(); // Menyimpan outgoing edges untuk setiap node
  const allNodes = new Set(); // Set untuk menyimpan semua node unik

  // 2. Build graph dari edges dan hitung in-degree
  for (const [dependency, module] of edges) {
    allNodes.add(dependency);
    allNodes.add(module);

    // Update in-degree untuk modul yang memiliki dependensi
    inDegree.set(module, (inDegree.get(module) || 0) + 1);

    // Tambahkan edge ke adjacency list
    if (!adjacencyList.has(dependency)) {
      adjacencyList.set(dependency, []);
    }
    adjacencyList.get(dependency).push(module);
  }

  // 3. Inisialisasi in-degree untuk semua node (yang belum memiliki subnode)
  for (const node of allNodes) {
    if (!inDegree.has(node)) {
      inDegree.set(node, 0);
    }
  }

  // 4. Temukan semua node dengan in-degree 0 (tidak ada dependensi)
  const queue = [];
  for (const [node, degree] of inDegree) {
    if (degree === 0) {
      queue.push(node);
    }
  }

  // 5. Sort queue secara alfabetis untuk stabilitas leksikografis
  queue.sort();

  const result = [];

  // 6. Proses node dengan algoritma Kahn
  while (queue.length > 0) {
    // Ambil node dengan in-degree 0 (prioritas alfabetis)
    const current = queue.shift();
    result.push(current);

    // 7. Kurangi in-degree untuk semua node yang bergantung pada current
    if (adjacencyList.has(current)) {
      for (const neighbor of adjacencyList.get(current)) {
        const newDegree = inDegree.get(neighbor) - 1;
        inDegree.set(neighbor, newDegree);

        // Jika in-degree menjadi 0, tambahkan ke queue
        if (newDegree === 0) {
          queue.push(neighbor);
        }
      }
    }

    // 8. Sort queue lagi untuk mempertahankan stabilitas leksikografis
    queue.sort();
  }

  // 9. Deteksi siklus: jika result.length < allNodes.size, berarti ada siklus
  if (result.length !== allNodes.size) {
    throw new Error("CYCLE");
  }

  return result;
}

module.exports = { topoSort };
