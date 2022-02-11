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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}
