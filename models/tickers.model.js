const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tickersSchema = new Schema(
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
            type: Number,
            required: [true, "Base Unit is Required"],
        },
    },
    {
        timestamps: true,
    }
);
const tickersModel = mongoose.model("tickers", tickersSchema);

module.exports = tickersModel;
