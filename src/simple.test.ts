const sum = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const sumAsync = (a: number, b: number) =>
  new Promise((resolve) => setTimeout(() => resolve(sum(a, b)), 0));
const subtractAsync = (a: number, b: number) =>
  new Promise((resolve) => setTimeout(() => resolve(subtract(a, b)), 0));

test('sum adds numbers', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test('subtract subtracts numbers', async () => {
  const result = await subtractAsync(5, 2);
  const expected = 3;

  expect(result).toBe(expected);
});
