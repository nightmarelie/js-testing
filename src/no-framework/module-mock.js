// eslint-disable-next-line @typescript-eslint/no-empty-function
function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = {
    calls: [],
  };

  mockFn.mockImplementation = (newImpl) => (impl = newImpl);

  return mockFn;
}

const utilsPath = require.resolve('../utils');
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    thumbWar: fn((p1, p2) => p1),
  },
};

/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('John', 'Ken');
assert.strictEqual(winner, 'John');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['John', 'Ken'],
  ['John', 'Ken'],
]);

// cleanup
delete require.cache[utilsPath];
