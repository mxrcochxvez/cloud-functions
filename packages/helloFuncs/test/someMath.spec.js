const { main } = require("../someMath");

describe("someMath function", () => {
  const a = 1;
  const b = 2;
  const sum = a + b;

  test("a positive number is returned", () => {
    const { body } = main({ a: 5, b: 5 });
    expect(body).toBeGreaterThan(0);
  });

  test("the sum is returned", () => {
    const { body } = main({ a: 1, b: 2 });
    expect(body).toEqual(sum);
  });
});
