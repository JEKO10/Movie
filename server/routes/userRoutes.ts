import express from "express";

import {
  getUserByUsername,
  profile,
  searchUsers
} from "../controllers/userController";

const router = express.Router();

router.get("/profile", profile);
router.get("/:username", getUserByUsername);
router.get("/searchUsers", searchUsers);

export default router;
