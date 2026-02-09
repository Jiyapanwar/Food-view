const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
//api jiska naam hai register
// jab api ke saath callback use karte hai usko controller bolte hai

module.exports = router;
