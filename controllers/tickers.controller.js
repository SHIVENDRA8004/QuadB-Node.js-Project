const tickerModel = require("../models/tickers.model");

const getAlltickers = async (req, res) => {
    try {
        const tickers = await tickerModel.find({});
        if (tickers.length === 0) {
            res.json("There are no tickers in database");
        } else {
            res.status(200).json(tickers);
        }
    } catch (error) {
        res.status(404).json(error);
        console.log("Error: ", error);
    }
};
const saveTickers = async (sortedTickers) => {
    try {
        for (const ticker of sortedTickers) {
            const { storeName, last, buy, sell, volume, baseUnit } = ticker;
            const Ticker = new tickerModel({ storeName, last, buy, sell, volume, baseUnit });
            await Ticker.save();
        }
        console.log("All tickers saved to database.");
    } catch (error) {
        console.log("Error: ", error);
    }
};

module.exports = { getAlltickers, saveTickers };
