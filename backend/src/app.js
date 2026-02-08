const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;

// server banaya aur usko export kiya banake
