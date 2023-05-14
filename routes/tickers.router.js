const express = require("express");
const getAlltickers = require("../controllers/getAllTickers");
const tickersRoute = express.Router();

tickersRoute.get("/getAllTicker", getAlltickers);
module.exports = tickersRoute;
