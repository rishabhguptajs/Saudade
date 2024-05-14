import User from "../models/userModel.js"

export const googleLoginAuth = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne({ email: req.user.emails[0].value })

      if (!user) {
        const user = new User({
          name: req.user.displayName,
          email: req.user.emails[0].value,
          channelName: "",
          channelURL: "",
          description: "",
          socialLinks: [],
          uploadedVideoLinks: [],
          isVerified: false,
        })

        user.save()
      } else {
        localStorage.setItem("user", JSON.stringify(req.user))

        res.status(200).json({
          success: true,
          message: "User has successfully authenticated",
          user: {
            name: req.user.displayName,
            email: req.user.emails[0].value,
          },
        })
      }
    } else {
      res.status(401).json({
        success: false,
        message: "User failed to authenticate.",
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
