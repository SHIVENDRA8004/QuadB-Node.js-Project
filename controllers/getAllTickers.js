const tickerModel = require("../models/tickers.model");

const getAlltickers = async (req, res) => {
    try {
        const tickers = await tickerModel.find({});
        console.log(tickers);
        res.status(200).json(tickers);
    } catch (error) {
        res.status(404).json(error);
        console.log("Error: ", error);
    }
};

module.exports = getAlltickers;
