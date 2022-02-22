const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

//Route for the user to signin
router.post("/login", authController.login);

//Route for the user to signup
router.post("/register", authController.register);

module.exports = router;