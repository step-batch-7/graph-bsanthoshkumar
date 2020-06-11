//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const bfs = function (pairs, source, target) {
  let queue = [];
  let visitedNodes = [];

  pairs.forEach((pair) => {
    if (pair[0] == source && !visitedNodes.includes(pair[1])) {
      queue.push(pair[1]);
    }
  });

  while (queue.length != 0) {
    const node = queue.shift();
    visitedNodes.push(node);
    if (node == target) return true;

    pairs.forEach((pair) => {
      if (pair[0] == node && !visitedNodes.includes(pair[1])) {
        queue.push(pair[1]);
      }
    });
  }
  return false;
};

module.exports = { bfs };
