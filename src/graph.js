//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const bfs = function (pairs, source, target) {
  const sourceChilds = pairs.filter((pair) => pair[0] == source);
  let flag = false;
  flag = flag || pairs.some((pair) => pair[0] == source && pair[1] == target);
  flag = flag || sourceChilds.some((pair) => bfs(pairs, pair[1], target));
  return flag;
};

module.exports = { bfs };
