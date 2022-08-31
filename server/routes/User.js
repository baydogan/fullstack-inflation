import express from "express";
import { getUsers, authUser, getUserProfile, registerUser } from "../controllers/User.js";
import { protectUser } from "../middleware/authentication.js";

const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protectUser, getUserProfile);

export default router;
