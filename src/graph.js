//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.
const getAdjacencyList = (pairs) => {
  let adjacencyList = {};
  pairs.forEach((pair) => {
    if (!adjacencyList[pair[0]]) adjacencyList[pair[0]] = [];
    if (!adjacencyList[pair[1]]) adjacencyList[pair[1]] = [];
    adjacencyList[pair[0]].push(pair[1]);
  });

  return adjacencyList;
};

const bfs = (adjacencyList, source, target) => {
  let queue = [];
  let visitedNodes = [];
  queue.push(...adjacencyList[source]);

  while (queue.length != 0) {
    const node = queue.shift();
    visitedNodes.push(node);

    if (node == target) return true;
    queue.push(...adjacencyList[node]);
  }
  return false;
};

const getUnvisitedNodes = (nodes, visitedNodes) => {
  return nodes.filter((node) => !visitedNodes.includes(node));
};

const dfs = (adjacencyList, source, target) => {
  let stack = [];
  let visitedNodes = [];

  let unvisitedNodes = getUnvisitedNodes(adjacencyList[source], visitedNodes);
  if (unvisitedNodes.length != 0) {
    stack.push(unvisitedNodes[0]);
    visitedNodes.push(unvisitedNodes[0]);
  }
  if (stack[stack.length - 1] == target) return true;

  while (stack.length != 0) {
    unvisitedNodes = getUnvisitedNodes(adjacencyList[stack[stack.length - 1]], visitedNodes);
    if (unvisitedNodes.length != 0) {
      stack.push(unvisitedNodes[0]);
      visitedNodes.push(unvisitedNodes[0]);
    } else {
      stack.pop();
    }

    if (stack[stack.length - 1] == target) return true;
  }

  return false;
};


module.exports = { bfs, dfs, getAdjacencyList };
