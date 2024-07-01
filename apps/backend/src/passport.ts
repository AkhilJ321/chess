const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: (error: any, user?: any) => void
    ) => {
      if (profile) {
        console.log(profile);
        return done(null, profile);
      } else {
        return done(new Error("Failed to verify user"), null);
      }
    }
  )
);

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user);
});
passport.deserializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user);
});
