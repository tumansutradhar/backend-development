const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
        return;
    }
    if (req.url === "/about") {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(`${i} : ${j}`);
            }
        }

        res.end("About Page");
        return;
    }
    res.end("Error Page");
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
