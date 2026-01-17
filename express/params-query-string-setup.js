const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send("Welcome to the Products API");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, brand, price } = product
        return { id, name, brand, price }
    });

    res.json(newProducts);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
