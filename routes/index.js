/**
 * Route for the home page.
 */

/* GET home page. */
module.exports = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

/* GET login page. */
module.exports.login = function(req, res, next) {
  res.render('fb-login', { title: 'Express' });
};
