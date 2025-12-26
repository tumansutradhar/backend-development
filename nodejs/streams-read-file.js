const { createReadStream } = require('fs');
const path = createReadStream("./practice/largefile.txt", { highWaterMark: 220, encoding: "utf8" });

path.on("data", (result) => {
    console.log(result);
});

path.on("error", (err) => console.log(err));
