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
const saveTickers = async (topTenSortedTickers) => {
    try {
        await tickerModel.deleteMany();
        console.log("All Previously Present Tickers Deleted from Database");
        await tickerModel.insertMany(topTenSortedTickers);
        console.log("All new tickers saved to database.");
    } catch (error) {
        console.log("Error: ", error);
    }
};

module.exports = { getAlltickers, saveTickers };
