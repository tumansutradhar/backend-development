// Synchronous File System Operations in Node.js
const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const firstFile = readFileSync("./practice/first.txt", "utf8");
const secondFile = readFileSync("./practice/second.txt", "utf8");

console.log(firstFile, secondFile);

writeFileSync(
    "./practice/third.txt",
    `This is the third file.`,
)

console.log("done with this task");
console.log("starting the next one");

// Asynchronous File System Operations in Node.js
const { readFile, writeFile } = require('fs');

console.log("start");

readFile("./practice/first.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error);
        return;
    }

    const firstFile = result;

    readFile("./practice/second.txt", "utf8", (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        const secondFile = result;

        writeFile("./practice/fourth.txt", `Here is the result: ${firstFile}${secondFile}`, (error) => {
            if (error) {
                console.log(error);
                return;
            }

            console.log("File written successfully");
        });
    });
})

console.log("starting the next one");