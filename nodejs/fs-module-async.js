const { readFile, writeFile } = require('fs');

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
