/**
 * Configuration file for the passport authentification middleware.
 */

// Module dependencies
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(app, passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });  

  // Facebook login
  passport.use(new FacebookStrategy({
    clientID: app.get('configurations').facebook.clientID,
    clientSecret: app.get('configurations').facebook.clientSecret,
    callbackURL: app.get('configurations').facebook.callbackURL
    },
    // Verify callback for the facebook login
    function(accessToken, refreshToken, profile, done) {
      console.info("User logged in via facebook as ", profile.displayName);
      // TODO: add verification with the database
      return done(null, profile);
    }
  ));

}
