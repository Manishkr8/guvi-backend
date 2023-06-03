import express from "express";
import {
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";
import { authorizeAdmin, isAutheticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(singleUpload, register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAutheticated, getMyProfile);


// UpdateProfile
router.route("/updateprofile").put(isAutheticated, updateProfile);

export default router;
