const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/connectDb.js");
const fetchAndSortTickers = require("./controllers/fetchAndSortTickers.js");

const app = express();
const PORT = process.env.PORT || 5500;

dotenv.config();
app.use(cors());
connectDatabase();
fetchAndSortTickers();
app.get("/", (req, res) => {
    res.send("Middleware working");
});

app.listen(PORT, () => {
    console.log(`Server Started Listening on Port No. ${PORT}`);
});
