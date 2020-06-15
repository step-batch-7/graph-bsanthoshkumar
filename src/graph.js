//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const enqueue_chidren = (pairs, parent, visitedNodes, queue) => {
  pairs.forEach((pair) => {
    const isVisited = visitedNodes.includes(pair[1]) || queue.includes(pair[1]);
    if (pair[0] == parent && !isVisited) {
      queue.push(pair[1]);
    }
  });

  return queue;
};

const bfs = function (pairs, source, target) {
  let queue = [];
  let visitedNodes = [];
  queue = enqueue_chidren(pairs, source, visitedNodes, queue);

  while (queue.length != 0) {
    const node = queue.shift();
    visitedNodes.push(node);

    if (node == target) return true;
    queue = enqueue_chidren(pairs, node, visitedNodes, queue);
  }
  return false;
};

const dfs = function (pairs, source, target) {
  let stack = [];
  let visitedNodes = [];
};

module.exports = { bfs, dfs };
