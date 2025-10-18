
function topoSort(edges) {
  // The edges looks like this: [['a','c'],['b','c']]
  // We need to sort the modules in the correct order
  // The modules are represented by the letters 'a', 'b', 'c', etc.
  // The edges represent the dependencies between the modules
  // For example, ['a','c'] means that module 'c' depends on module 'a'

  const modules = [];

  // Build the graph and indegree map
  const graph = {};
  const indegree = {};

  for (const [from, to] of edges) {
    if (!graph[from]) graph[from] = new Set();
    if (!graph[to]) graph[to] = new Set(); // ensure every node is in graph
    graph[from].add(to);

    indegree[to] = (indegree[to] || 0) + 1;
    if (!(from in indegree)) indegree[from] = indegree[from] || 0;
  }

  // Find all unique nodes in the graph
  const nodes = Object.keys(graph);

  // Priority Queue for lexicographical stability
  const queue = [];
  for (const node of nodes) {
    if (indegree[node] === 0) queue.push(node);
  }
  queue.sort();

  const result = [];
  while (queue.length > 0) {
    // always pick lexicographically smallest node
    const node = queue.shift();
    result.push(node);

    for (const neighbor of [...graph[node]]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
        queue.sort();
      }
    }
  }

  if (result.length !== nodes.length) {
    return "CYCLE";
  }

  modules.push(...result);
  return modules;
}

module.exports = { topoSort };
