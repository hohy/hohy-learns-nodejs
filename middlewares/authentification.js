/**
 * Middleware for request authentification.
 */

/**
 * User is redirected to the login page, if he is not
 * authorized by the passport middleware to do the request.
 */
module.exports = function (req, res, next){
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}
