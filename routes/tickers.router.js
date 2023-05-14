const express = require("express");
const tickersRoute = express.Router();

tickersRoute.get("/getAllTicker", (req, res) => {
    res.send("All Tickers");
});
module.exports = tickersRoute;
