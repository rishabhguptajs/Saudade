import { Strategy } from "passport-google-oauth20"
import passport from "passport"
import User from "../models/userModel.js";

const GoogleStrategy = Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "896840456638-gc1kcuvon9jkla4refu31lhuebuirvlh.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/api/auth/google/callback",
      scope: ["email", "profile", "https://www.googleapis.com/auth/youtube"],
    },
    async function (accessToken, refreshToken, profile, callback) {
      // check if user already exists in our db with the given profile ID
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if(user){
          callback(null, user);
        } else {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            channelName: "",
            channelURL: "",
            description: "",
            socialLinks: [],
            uploadedVideoLinks: [],
            isVerified: false,
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken,
          })

          await user.save();
          callback(null, user);
        }
      } catch (error) {
        console.log(error);
        callback(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport