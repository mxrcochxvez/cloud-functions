/**
 *
 * @param {{ name: string }} args
 * @returns {object}
 */
function main(args) {
  let name = args?.name || "stranger";
  let greeting = "Hello " + name + "!";

  return { body: greeting };
}

exports.main = main;
