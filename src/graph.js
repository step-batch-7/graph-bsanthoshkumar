//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const bfs = function (pairs, source, target) {
  const sourceChilds = pairs.filter((pair) => pair[0] == source);
  return (
    pairs.some((pair) => pair[0] == source && pair[1] == target) ||
    sourceChilds.some((pair) => bfs(pairs, pair[1], target))
  );
};

module.exports = { bfs };
