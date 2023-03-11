const { main } = require("../hello");

describe("Hello function", () => {
  test("a name is returned if one is provided", () => {
    const firstName = "Marco";
    const response = main({ name: firstName });

    expect(response.body).toContain(firstName);
  });
  test("stranger gets returned if no name is provided", () => {
    const response = main();

    expect(response.body).toEqual("Hello stranger!");
  });
});
