/**
 * Module for definition of the routes
 */

var index = require('../routes/index');

module.exports = function(app) {
  app.get('/', index);
}
