//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const getAdjacencyList = (pairs, parent, visitedNodes) => {
  let adjacencyList = [];
  pairs.forEach((pair) => {
    if (pair[0] == parent && !visitedNodes.includes(pair[1])) {
      adjacencyList.push(pair[1]);
    }
  });

  return adjacencyList.slice();
};

const bfs = (pairs, source, target) => {
  let queue = [];
  let visitedNodes = [];
  queue.push(...getAdjacencyList(pairs, source, visitedNodes));

  while (queue.length != 0) {
    const node = queue.shift();
    visitedNodes.push(node);

    if (node == target) return true;
    queue.push(...getAdjacencyList(pairs, node, visitedNodes));
  }
  return false;
};

const dfs = (pairs, source, target) => {
  let stack = [source];
  let visitedNodes = [source];

  while (stack.length != 0) {
    const adjacencyList = getAdjacencyList(pairs, stack[stack.length - 1], visitedNodes);
    if (adjacencyList.length != 0) {
      stack.push(adjacencyList[0]);
      visitedNodes.push(adjacencyList[0]);
    } else {
      stack.pop();
    }

    if (adjacencyList[0] == target) {
      return true;
    }
  }

  return false;
};

module.exports = { bfs, dfs };
