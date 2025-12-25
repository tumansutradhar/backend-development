const { readFile } = require("fs");

const readFilePromise = (filePath) => {
    return new Promise((resolve, rejects) => {
        readFile(filePath, "utf8", (error, data) => {
            if (error) {
                rejects(error);
            } else {
                resolve(data);
            }
        })
    })
}

// readFilePromise("./practice/first.txt")
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

const fileReadOperation = async () => {
    try {
        const data = await readFilePromise("./practice/first.txt");

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fileReadOperation();
