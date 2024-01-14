import express from "express";
import {
  login,
  registration,
  forgotPassword,
  verifyOTP,
  resetPassword,
  googleAuth,
} from "../controllers/authController.js";

const authRoutes = express.Router();

// CREATE A USER
authRoutes.post("/register", registration);

// SIGN IN
authRoutes.post("/login", login);

// FORGOT PASSWORD
authRoutes.post("/forgotpassword", forgotPassword);

// Verify OTP
authRoutes.post("/verify-otp", verifyOTP);

// RESET PASSWORD
authRoutes.post("/resetpassword/:id/:token", resetPassword);

// GOOGLE AUTH
authRoutes.post('/googleSignIn', googleAuth)

export default authRoutes;
