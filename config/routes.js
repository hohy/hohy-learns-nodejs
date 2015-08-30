/**
 * Module for definition of the routes
 */

var index = require('../routes/index');
var isAuthenticated = require('../middlewares/authentification');

module.exports = function(app, passport) {
  app.get('/', isAuthenticated, index);
  app.get('/login', index.login);

  // passport routes for facebook login
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback', passport.authenticate('facebook',
                                      { successRedirect: '/',
                                        failureRedirect: '/login',
                                        failureFlash: false })
                                      );
}
