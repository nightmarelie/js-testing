// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createJestRunner } = require('create-jest-runner');

module.exports = createJestRunner(require.resolve('./node-runner'));
