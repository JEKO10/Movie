import express from "express";

import {
  getProfile,
  getUserByUsername,
  searchUsers
} from "../controllers/userController";

const router = express.Router();

router.get("/profile", getProfile);
router.get("/:username", getUserByUsername);
router.get("/searchUsers", searchUsers);

export default router;
