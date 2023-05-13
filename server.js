const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDb.js");

const app = express();
const PORT = process.env.PORT || 5500;
dotenv.config();

connectDatabase();

app.get("/", (req, res) => {
    res.send("Middleware working");
});

app.listen(PORT, () => {
    console.log(`Server Started Listening on Port No. ${PORT}`);
});
