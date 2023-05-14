const express = require("express");
const { getAlltickers } = require("../controllers/tickers.controller");
const tickersRoute = express.Router();

tickersRoute.get("/getAllTicker", getAlltickers);
module.exports = tickersRoute;
