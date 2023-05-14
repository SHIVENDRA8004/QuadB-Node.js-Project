const express = require("express");
const mainRoute = express.Router();
mainRoute.get("/", (req, res) => {
    res.send("Backend Working ");
});
module.exports = mainRoute;
