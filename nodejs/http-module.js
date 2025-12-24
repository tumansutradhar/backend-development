const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("Hello, World!");
    }
    if (request.url === "/about") {
        response.end("This is the about page.");
    }
    response.end("404 Not Found");
})

server.listen(3000)
