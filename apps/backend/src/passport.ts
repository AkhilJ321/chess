const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";
import dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export function initPassport() {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error(
      "GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be provided"
    );
  }

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
        const user = db.user.upsert({
          create: {
            email: profile.emails[0].value,
            name: profile.displayName,
            provider: "GOOGLE",
          },
          update: {
            name: profile.displayName,
          },
          where: {
            email: profile.emails[0].value,
          },
        });
        done(null, user);
      }
    )
  );

  passport.serializeUser(function (user: any, cb) {
    user.then((actualUser:any) => {
      console.log('[DEBUG] Serialized user:', actualUser); // Log the actual user object
  
      // Serialize the actual user object into the session
      cb(null, {
        id: actualUser.id,
        username: actualUser.username,
        picture: actualUser.picture,
        // Add any other necessary user information you want to serialize
      });
    }).catch((err:any) => {
      // Handle any errors that occur during user resolution
      console.error('[ERROR] Failed to serialize user:', err);
      cb(err); // Pass error to Passport
    });
  });
  
  passport.deserializeUser(function (user: any, cb) {
    process.nextTick(function () {
      console.log('[DEBUG] passport.ts Deserialize result:',user)
      
      return cb(null, user);
    });
  });
}
