const { readFile, writeFile } = require("fs").promises;
// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const fileOperation = async () => {
    try {
        const firstData = await readFile("./practice/first.txt", "utf8");
        const secondData = await readFile("./practice/second.txt", "utf8");
        await writeFile("./practice/result-native.txt", `Here is the result: ${firstData}${secondData}`, { flag: "a" });

        console.log(firstData, secondData);
    } catch (error) {
        console.log(error);
    }
}

fileOperation();
