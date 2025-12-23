const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./practice/first.txt", "utf8");
const secondFile = readFileSync("./practice/second.txt", "utf8");

console.log(firstFile, secondFile);

writeFileSync(
    "./practice/third.txt",
    `This is the third file.`,
)
