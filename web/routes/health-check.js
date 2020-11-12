// health-check.js

const packageJson = require('../../package.json')
const router = require('express').Router();

router.get('/health-check', (rq, rs) => {
    rs.json({
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version
    })
})

module.exports = router
