const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDb.js");
const app = express();
dotenv.config();
connectDatabase();

app.get("/", (req, res) => {
    res.send("Middleware working");
});
app.listen(5500, () => {
    console.log("Listening on Port 5500");
});
