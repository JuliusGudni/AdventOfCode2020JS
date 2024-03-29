function parse(input) {
  const lines = input
    .split("\n")
    .map((x) => x.trim())
    .filter((x) => x !== "");


  return lines.map((x) => {
    let line = "";
    console.log(x)
    for (let i = 0; i < 32; i++) {
      line += x;
    }

    return line;
  });
}

function howManyTreesDidWeHit(forest) {
  let hits = 0;
  for (let row = 0; row < forest.length; row++) {
    if (forest[row][row * 3] === "#") {
      hits++;
    }
  }
  return hits;
}
module.exports.parse = parse;
module.exports.howManyTreesDidWeHit = howManyTreesDidWeHit;
const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf8");
const forest = parse(text);

console.log(`Part A solution: ${this.howManyTreesDidWeHit(forest)}`);