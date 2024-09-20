const express = require("express");
const passport = require("passport");
const {
  googleLogin,
  getUserProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), googleLogin);

// User profile route
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
