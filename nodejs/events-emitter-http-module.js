const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
    res.end("Hello from Event Emitter HTTP Module!");
});

server.listen(3000);
