import express from "express";
import { getUsers, authUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/login").post(authUser);

export default router;
