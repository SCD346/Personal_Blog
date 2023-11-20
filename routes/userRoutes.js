const express = require("express");
const { registerUser } = require("../controllers/userController");
// const userController = require("./../controllers/userController");
// const authController = require("./../controllers/authController");
// const { model } = require("mongoose");

const router = express.Router();

router.route("/").post(registerUser);

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);

// router.post("/forgotPassword", authController.forgotPassword);
// router.patch("/resetPassword/:token", authController.resetPassword);

module.exports = router;
