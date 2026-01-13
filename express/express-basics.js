const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.get("/about", (req, res) => {
    res.status(200).send("About Us");
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
