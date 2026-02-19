import express from "express";
import { body } from "express-validator";
import { registerUser, loginUser, getDashboard } from "../controllers/authController.js";
import { protect } from "../middleware/protect.js";
import {resetPassword , forgotPassword} from "../controllers/authController.js";

const router = express.Router();

// REGISTER
router.post("/register",
  [
    body("fullName").trim().notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Please enter a valid email").normalizeEmail(),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
  ],
  registerUser
);

// LOGIN
router.post("/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required")
  ],
  loginUser
);

// FORGOT PASSWORD
router.post("/forgot-password",
  [
    body("email").isEmail().withMessage("Please enter a valid email").normalizeEmail()
  ],
  forgotPassword
);

// RESET PASSWORD
router.post("/reset-password/:token", resetPassword);

// DASHBOARD (protected)
router.get("/dashboard", protect, getDashboard);

export default router;
