import User from "../models/userModel.js"

export const googleLoginAuth = async (req, res) => {

  try {
    console.log("user: ", req.user)
    if (req.user) {
      const user = await User.findOne({ email: req.user.email })

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
      }

      req.session.user = user

      // console.log(req.session.user)

      res.status(200).json({
        success: true,
        message: "User has successfully authenticated",
        user: {
          name: req.user.displayName,
          email: req.user.emails[0].value,
          userId: user._id
        },
      })

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