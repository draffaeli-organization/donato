// health-check.js

const packageJson = require('../../package.json')

const configure = (expressApp) => {
    expressApp.get('/health-check', (rq, rs) => {
        rs.json({
            name: packageJson.name,
            description: packageJson.description,
            version: packageJson.version
        })
    })
}

module.exports.configure = configure
