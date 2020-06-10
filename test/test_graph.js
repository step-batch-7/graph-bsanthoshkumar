const assert = require('chai').assert;
const { bfs } = require('../src/graph');

describe('bfs', function () {
  it('should give true for adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isTrue(bfs(pairs.slice(), 'a', 'b'));
  });

  it('should give false for adjacent non connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(bfs(pairs.slice(), 'b', 'a'));
  });
});
