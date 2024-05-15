import express from "express"
import passport from "passport"
import { googleLoginAuth } from "../controllers/googleAuthController.js"

const router = express.Router()

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "/google/login/failed",
  })
)

router.get("/google/login/success", googleLoginAuth)

router.get("/google/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failed to login!",
  })
})

router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res) => {
  req.session.destroy()
  res.redirect(process.env.CLIENT_URL)
})

export default router
