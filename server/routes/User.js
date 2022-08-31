const express = require("express");
const protectUser = require("../middleware/authentication")
const { getUsers, registerUser, authUser, getUserProfile } = require("../controllers/User");

const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protectUser, getUserProfile);

module.exports = router;
