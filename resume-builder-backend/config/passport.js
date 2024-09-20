const GoogleStrategy = require("passport-google-oauth20").Strategy;
const pool = require("../config/db");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/users/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const [user] = await pool.query(
            "SELECT * FROM users WHERE google_id = ?",
            [profile.id]
          );

          if (user.length) {
            return done(null, user[0]);
          } else {
            const newUser = {
              google_id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            };

            await pool.query("INSERT INTO users SET ?", newUser);
            return done(null, newUser);
          }
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
      done(null, user[0]);
    } catch (error) {
      done(error, false);
    }
  });
};
