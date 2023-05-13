const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Middleware working");
});
app.listen(5500, () => {
    console.log("Listening on Port 5500");
});
