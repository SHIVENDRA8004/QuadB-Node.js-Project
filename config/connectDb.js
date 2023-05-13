const mongoose = require("mongoose");
// Suppressing the terminal warning
mongoose.set("strictQuery", true);
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error: Not able to connect with database", error);
    }
};
module.exports = connectDatabase;
