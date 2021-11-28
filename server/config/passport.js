import GS from "passport-google-oauth20";
import mongoose from "mongoose";
import User from "../models/User.js";
import passport from "passport";

const GoogleStrategy = GS.Strategy;
const Pass = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:6000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        //create newUser based on schema and the profile object returned from google
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        //strategy
        try {
          //store user
          let user = await User.findOne({ googleId: profile.id });

          //if the user exists, call null for error(since no error), and pass in the user
          if (user) {
            done(null, user);
          } else {
            //create new user
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

export default Pass;
