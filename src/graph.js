//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const enqueue_adjacent_unvisted_chidren = (pairs, parent, visitedNodes, queue) => {
  pairs.forEach((pair) => {
    const isVisited = visitedNodes.includes(pair[1]) || queue.includes(pair[1]);
    if (pair[0] == parent && !isVisited) {
      queue.push(pair[1]);
    }
  });

  return queue;
};

const bfs = (pairs, source, target) => {
  let queue = [];
  let visitedNodes = [];
  queue = enqueue_adjacent_unvisted_chidren(pairs, source, visitedNodes, queue);

  while (queue.length != 0) {
    const node = queue.shift();
    visitedNodes.push(node);

    if (node == target) return true;
    queue = enqueue_adjacent_unvisted_chidren(pairs, node, visitedNodes, queue);
  }
  return false;
};

const get_adjacent_unvisited_child = (pairs, parent, visitedNodes) => {
  for (let index = 0; index < pairs.length; index++) {
    const curr_pair = pairs[index];
    if (curr_pair[0] == parent && !visitedNodes.includes(curr_pair[1])) {
      return curr_pair[1];
    }
  }
  return;
};

const dfs = (pairs, source, target) => {
  let stack = [source];
  let visitedNodes = [source];

  while (stack.length != 0) {
    const node = get_adjacent_unvisited_child(pairs, stack[stack.length - 1], visitedNodes);
    if (node) {
      stack.push(node);
      visitedNodes.push(node);
    } else {
      stack.pop();
    }

    if (node == target) {
      return stack;
    }
  }

  return false;
};

module.exports = { bfs, dfs };
