/**
 *
 * @param {{ a: number, b: number }} args
 */
function main(args) {
  let { a, b } = args;
  let result = Number(a) + Number(b);

  if (!a || !b) {
    return {
      body: "You are missing a function parameter.",
      status: 406,
    };
  }

  return {
    body: result,
  };
}

exports.main = main;
