// index.js
const recipesRoutes = require('./recipes');
const healthCheckRoute = require('./health-check')

const configure = (expressApp) => {

    // Welcome
    expressApp.get('/', (req, res) => {
        res.send('Welcome To Donato')
    });

    // recipes routes
    recipesRoutes.configure(expressApp)

    // health-check route
    healthCheckRoute.configure(expressApp)

};

module.exports.configure = configure;
