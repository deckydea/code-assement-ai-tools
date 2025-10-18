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
  // Build adjacency list and in-degree count
  const graph = new Map();
  const inDegree = new Map();
  const allNodes = new Set();
  
  // Initialize all nodes and build graph
  for (const [from, to] of edges) {
    allNodes.add(from);
    allNodes.add(to);
    
    // Build adjacency list
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
    
    // Count incoming edges
    inDegree.set(to, (inDegree.get(to) || 0) + 1);
    if (!inDegree.has(from)) {
      inDegree.set(from, 0);
    }
  }
  
  // Find all nodes with no incoming edges (in-degree = 0)
  const queue = [];
  for (const node of allNodes) {
    if ((inDegree.get(node) || 0) === 0) {
      queue.push(node);
    }
  }
  
  // Sort queue alphabetically for stable ordering
  queue.sort();
  
  const result = [];
  
  while (queue.length > 0) {
    // Process nodes in alphabetical order
    const current = queue.shift();
    result.push(current);
    
    // Process all neighbors of current node
    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      const newInDegree = (inDegree.get(neighbor) || 0) - 1;
      inDegree.set(neighbor, newInDegree);
      
      // If neighbor has no more incoming edges, add to queue
      if (newInDegree === 0) {
        queue.push(neighbor);
        // Keep queue sorted alphabetically
        queue.sort();
      }
    }
  }
  
  // Check for cycle: if result length != all nodes, there's a cycle
  if (result.length !== allNodes.size) {
    throw new Error('CYCLE');
  }
  
  return result;
}

module.exports = { topoSort };
