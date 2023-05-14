const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/connectDb.js");
const morgan = require("morgan");
const mainRoute = require("./routes/main.router.js");
const fetchAndSortTickers = require("./controllers/fetchAndSortTickers.js");

const app = express();
const PORT = process.env.PORT || 5500;

dotenv.config();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
fetchAndSortTickers();

app.get("/", (req, res) => {
    res.redirect("/api/v1");
});
app.use("/api/v1", mainRoute);

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started Listening on Port No. ${PORT}`);
    });
});
