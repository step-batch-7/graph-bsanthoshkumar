//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const bfs = function(pairs,source,target){
  return pairs.some(pair => pair[0] == source && pair[1] == target);
};

module.exports = {bfs};
