const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (a, b) =>
  new Promise((resolve) => setTimeout(() => resolve(sum(a, b)), 0));
const subtractAsync = (a, b) =>
  new Promise((resolve) => setTimeout(() => resolve(subtract(a, b)), 0));

test("sum adds numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(5, 2);
  const expected = 3;

  expect(result).toBe(expected);
});
