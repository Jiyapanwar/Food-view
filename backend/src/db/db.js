const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/food-view")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log("MongoDB connection error:", err);
    });
}

module.exports = connectDB;
// kis tarah se server connect krega database se
// jab ye function chalega server database se connect hoga
