// index.js
const healthCheckRoute = require('./health-check')
const welcomeRoute = require('./welcome')
const recipesRoute = require('./recipes');

module.exports = [healthCheckRoute, welcomeRoute, recipesRoute]
