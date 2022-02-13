require('../__no-framework-mocks__/utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');

const utilsPath = require.resolve('../utils');
require.cache[utilsPath] = require.cache[mockUtilsPath];

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
