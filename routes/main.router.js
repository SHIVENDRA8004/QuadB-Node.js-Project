const express = require("express");
const tickersRoute = require("./tickers.router");
const mainRoute = express.Router();
mainRoute.get("/", (req, res) => {
    res.send("Backend Working ");
});
mainRoute.use("/tickers", tickersRoute);
module.exports = mainRoute;
