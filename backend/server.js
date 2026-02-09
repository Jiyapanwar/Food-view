require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

// server ko yahan leke aaye start karne ke liye
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// server start
