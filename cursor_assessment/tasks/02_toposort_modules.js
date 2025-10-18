function topoSort(edges) {
  // Build set of all nodes, adjacency list (deduped), and indegree map
  const nodes = new Set();
  const adjacency = new Map(); // node -> Set of neighbors
  const indegree = new Map(); // node -> number

  for (const pair of edges || []) {
    if (!Array.isArray(pair) || pair.length !== 2) continue;
    const [from, to] = pair;
    nodes.add(from);
    nodes.add(to);
    if (from === to) {
      throw new Error("CYCLE");
    }
    if (!adjacency.has(from)) adjacency.set(from, new Set());
    const neighbors = adjacency.get(from);
    // Deduplicate edges to avoid double counting indegree
    if (!neighbors.has(to)) {
      neighbors.add(to);
      adjacency.set(from, neighbors);
      indegree.set(to, (indegree.get(to) || 0) + 1);
      if (!indegree.has(from)) indegree.set(from, indegree.get(from) || 0);
    }
  }

  // Ensure all nodes are present in indegree map (default 0)
  for (const n of nodes) {
    if (!indegree.has(n)) indegree.set(n, 0);
  }

  // Initialize queue with nodes having zero indegree, sorted lexicographically
  const zeroIn = Array.from(nodes)
    .filter((n) => (indegree.get(n) || 0) === 0)
    .sort();
  const result = [];

  while (zeroIn.length) {
    const current = zeroIn.shift();
    result.push(current);

    const nexts = adjacency.get(current);
    if (!nexts) continue;
    for (const nb of nexts) {
      const newIn = (indegree.get(nb) || 0) - 1;
      indegree.set(nb, newIn);
      if (newIn === 0) {
        zeroIn.push(nb);
        zeroIn.sort(); // maintain lexicographic order preference
      }
    }
  }

  if (result.length !== nodes.size) {
    throw new Error("CYCLE");
  }

  return result;
}

module.exports = { topoSort };
