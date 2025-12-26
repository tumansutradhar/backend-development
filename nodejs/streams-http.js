let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    // const data = fs.readFileSync("./practice/largefile.txt", "utf8");
    // res.end(data);

    const readableStream = fs.createReadStream("./practice/largefile.txt", "utf8");

    readableStream.on("open", () => {
        readableStream.pipe(res);
    });

    readableStream.on("error", (err) => {
        res.end(err);
    });
}).listen(8080);
