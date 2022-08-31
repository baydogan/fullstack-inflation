import express from "express";
import { getUsers, authUser, getUserProfile } from "../controllers/userController.js";
import { protectUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/login").post(authUser);
router.route("/profile").get(protectUser, getUserProfile);

export default router;
