import express from "express";

import authRoutes from "./authController";
import userRoutes from "./userController";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
