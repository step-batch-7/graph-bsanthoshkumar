const assert = require('chai').assert;
const { bfs, dfs, findPath, getAdjacencyList } = require('../src/graph');

describe('getAdjacencyList', function () {
  it('should give adjacency list of all graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    const expected = { a: ['b', 'c'], b: ['c', 'd'], c: [], d: [] };
    assert.deepStrictEqual(getAdjacencyList(pairs), expected);
  });
});

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
    assert.isTrue(dfs(getAdjacencyList(pairs.slice()), 'a', 'b'));
  });

  it('should give false for adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(dfs(getAdjacencyList(pairs.slice()), 'b', 'a'));
  });

  it('should give true for non-adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.isTrue(dfs(getAdjacencyList(pairs.slice()), 'a', 'd'));
  });

  it('should give false for non-adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
      ['d', 'e'],
    ];
    assert.isFalse(dfs(getAdjacencyList(pairs.slice()), 'c', 'e'));
  });

  it('should give false for same node not connected to itself', function () {
    const pairs = [['a', 'b']];
    assert.isFalse(dfs(getAdjacencyList(pairs.slice()), 'a', 'a'));
  });

  it('should give true for same node connected to itself', function () {
    const pairs = [
      ['a', 'a'],
      ['a', 'b'],
    ];
    assert.isTrue(dfs(getAdjacencyList(pairs.slice()), 'a', 'a'));
  });

  it('should give false for non-adjacent and non-connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
    ];
    assert.isFalse(dfs(getAdjacencyList(pairs.slice()), 'a', 'a'));
  });

  it('should give true for non-adjacent and connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'b'],
      ['c', 'a'],
    ];
    assert.isTrue(dfs(getAdjacencyList(pairs.slice()), 'a', 'a'));
  });
});

describe('findPath', function () {
  it('should give true for adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'b'), ['a', 'b']);
  });

  it('should give false for adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'b', 'a'), []);
  });

  it('should give true for non-adjacent connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'd'), ['a', 'b', 'd']);
  });

  it('should give false for non-adjacent non-connected nodes', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
      ['d', 'e'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'c', 'e'), []);
  });

  it('should give false for same node not connected to itself', function () {
    const pairs = [['a', 'b']];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'a'), []);
  });

  it('should give true for same node connected to itself', function () {
    const pairs = [
      ['a', 'a'],
      ['a', 'b'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'a'), ['a', 'a']);
  });

  it('should give false for non-adjacent and non-connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'a'), []);
  });

  it('should give true for non-adjacent and connected nodes in recursive graph', function () {
    const pairs = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'b'],
      ['c', 'a'],
    ];
    assert.deepStrictEqual(findPath(getAdjacencyList(pairs.slice()), 'a', 'a'), ['a', 'b', 'c', 'a']);
  });
});
