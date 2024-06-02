import express from "express"
import passport from "passport"
import { callback, googleLoginAuth, googleLogout } from "../controllers/googleAuthController.js"
import { emailSignup } from "../controllers/authController.js"

const router = express.Router()

router.get("/google/callback", callback);

router.get("/google/login/success", googleLoginAuth);

router.get("/google/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failed to login!",
  })
});

router.get("/google", passport.authenticate("google", ["email", "profile"]));

router.get("/logout", googleLogout);

router.post('/signup', emailSignup);

export default router