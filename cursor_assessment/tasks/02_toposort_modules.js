
function topoSort(edges) {
  const adjacency = new Map();
  const indegree = new Map();
  const nodes = new Set();

  for (const [from, to] of edges) {
    nodes.add(from);
    nodes.add(to);
  }

  for (const node of nodes) {
    adjacency.set(node, new Set());
    indegree.set(node, 0);
  }

  for (const [from, to] of edges) {
    const neighbors = adjacency.get(from);
    if (!neighbors.has(to)) {
      neighbors.add(to);
      indegree.set(to, indegree.get(to) + 1);
    }
  }

  const candidates = Array.from(nodes).filter(node => indegree.get(node) === 0).sort();
  const result = [];

  while (candidates.length > 0) {
    const node = candidates.shift();
    result.push(node);

    for (const neighbor of adjacency.get(node)) {
      const newDegree = indegree.get(neighbor) - 1;
      indegree.set(neighbor, newDegree);
      if (newDegree === 0) {
        candidates.push(neighbor);
      }
    }

    candidates.sort();
  }

  if (result.length !== nodes.size) {
    throw new Error('CYCLE');
  }

  return result;
}

module.exports = { topoSort };
