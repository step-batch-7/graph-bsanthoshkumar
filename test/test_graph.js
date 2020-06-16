const assert = require('chai').assert;
const { bfs, dfs } = require('../src/graph');

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

  it('should give false for adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(bfs(pairs.slice(), 'b', 'a'));
  });

  it('should give true for non-adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isTrue(bfs(pairs.slice(), 'a', 'd'));
  });

  it('should give false for non-adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
      ['d', 'e'],
    ];
    assert.isFalse(bfs(pairs.slice(), 'c', 'e'));
  });

  it('should give false for same node not connected to itself', function () {
    const pairs = [['a', 'b']];
    assert.isFalse(bfs(pairs.slice(), 'a', 'a'));
  });

  it('should give true for same node connected to itself', function () {
    const pairs = [
      ['a', 'b'],
      ['a', 'a'],
    ];
    assert.isTrue(bfs(pairs.slice(), 'a', 'a'));
  });

  it('should give false for non-adjacent and non-connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(bfs(pairs.slice(), 'a', 'a'));
  });

  it('should give true for non-adjacent and connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'b'],
      ['c', 'a'],
    ];
    assert.isTrue(bfs(pairs.slice(), 'a', 'a'));
  });
});

describe('dfs', function () {
  it('should give true for adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isTrue(dfs(pairs.slice(), 'a', 'b'));
  });

  it('should give false for adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(dfs(pairs.slice(), 'b', 'a'));
  });

  it('should give true for non-adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isTrue(dfs(pairs.slice(), 'a', 'd'));
  });

  it('should give false for non-adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
      ['d', 'e'],
    ];
    assert.isFalse(dfs(pairs.slice(), 'c', 'e'));
  });

  it('should give false for same node not connected to itself', function () {
    const pairs = [['a', 'b']];
    assert.isFalse(dfs(pairs.slice(), 'a', 'a'));
  });
});
