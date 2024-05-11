import { Strategy } from "passport-google-oauth20"
import passport from "passport"

const GoogleStrategy = Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: "896840456638-gc1kcuvon9jkla4refu31lhuebuirvlh.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/api/auth/google/callback",
      scope: ["email", "profile"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile)
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