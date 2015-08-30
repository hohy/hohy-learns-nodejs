/**
 * Route for the home page.
 */

/* GET home page. */
module.exports = function(req, res, next) {
  res.render('index', { title: 'Express' });
};
