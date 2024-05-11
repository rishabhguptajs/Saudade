import express from "express"
import passport from "passport"

const router = express.Router()

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "/login/failed",
  })
)

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
    })
  } else {
    res.status(401).json({
      success: false,
      message: "User failed to authenticate.",
    })
  }
})

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failed to login!",
  })
})

router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect(process.env.CLIENT_URL)
})

export default router
