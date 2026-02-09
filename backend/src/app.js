const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");

const app = express();
app.use(cookieParser());
app.use(express.json());

//server instance

app.get("/", (req, res) => {
  res.send("Hello World");
});
//dummy route
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
// iska matlab auth ki koi bhi api use krne se pehle ye prefix lagana padega

module.exports = app;

// server banaya aur usko export kiya banake
