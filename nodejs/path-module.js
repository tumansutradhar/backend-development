const path = require('path');

console.log(path.sep);

const pathJoin = path.join("practice", "path-practice", "path.txt");

console.log(pathJoin);

const baseName = path.basename(pathJoin);

console.log(baseName);

const absolutePath = path.resolve(__dirname, "practice", "path-practice", "path.txt");

console.log(absolutePath);
