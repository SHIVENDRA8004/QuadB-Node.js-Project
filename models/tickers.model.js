const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tickerSchema = new Schema(
    {
        storeName: {
            type: String,
            required: [true, "Store Name is Required"],
        },
        last: {
            type: Number,
            required: [true, "Last Price is Required"],
        },
        buy: {
            type: Number,
            required: [true, "Buying Price is Required"],
        },
        sell: {
            type: Number,
            required: [true, "Selling Price is Required"],
        },
        volume: {
            type: Number,
            required: [true, "Volume is Required"],
        },
        baseUnit: {
            type: String,
            required: [true, "Base Unit is Required"],
        },
    },
    {
        timestamps: true,
    }
);
const tickerModel = mongoose.model("Ticker", tickerSchema);

module.exports = tickerModel;
