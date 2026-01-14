const express = require("express");
const app = express();
const { users } = require("./data");

app.get("/", (req, res) => {
    // res.json([{ message: "Hello, World!" }, { message: "Welcome to Express.js JSON response." }]);
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
