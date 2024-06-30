const GoogleStrategy = require("passport-google-oauth20").Strategy;

import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "",
    function(
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: (error: any, user?: any) => void
    ) {
      console.log(profile);
      return done(null, profile);
    },
  })
);

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user);
});
passport.deserializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user);
});
