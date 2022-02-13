function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = {
    calls: [],
  };

  return mockFn;
}

module.exports = {
  thumbWar: fn((p1, p2) => p1),
};
