
function topoSort(edges) {
  // Deduplicate edges and collect all nodes
  const uniqueEdges = new Set();
  const nodes = new Set();

  for (const pair of edges || []) {
    if (!Array.isArray(pair) || pair.length !== 2) continue;
    const [a, b] = pair;
    const key = `${a}\u0000${b}`;
    if (!uniqueEdges.has(key)) {
      uniqueEdges.add(key);
      nodes.add(a);
      nodes.add(b);
    }
  }

  // If no nodes found, return empty order
  if (nodes.size === 0) return [];

  // Build adjacency list and indegree map
  const adj = new Map();
  const indeg = new Map();
  for (const n of nodes) {
    adj.set(n, new Set());
    indeg.set(n, 0);
  }

  for (const key of uniqueEdges) {
    const [a, b] = key.split('\u0000');
    if (!adj.get(a).has(b)) {
      adj.get(a).add(b);
      indeg.set(b, indeg.get(b) + 1);
    }
  }

  // Initialize zero-indegree queue with lexicographic ordering
  const zero = [];
  for (const n of nodes) {
    if (indeg.get(n) === 0) zero.push(n);
  }
  zero.sort();

  const order = [];
  while (zero.length) {
    // Always pick the lexicographically smallest available node
    const n = zero.shift();
    order.push(n);

    for (const m of adj.get(n)) {
      indeg.set(m, indeg.get(m) - 1);
      if (indeg.get(m) === 0) {
        zero.push(m);
        zero.sort();
      }
    }
  }

  // If not all nodes processed, there is a cycle
  if (order.length !== nodes.size) throw new Error('CYCLE');

  return order;
}

module.exports = { topoSort };
