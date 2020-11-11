// controller.js

const express = require('express')
const router = express.Router();
const packageJson = require('../package.json')

// health-check
router.get('/health-check', (request, response) => {
    response.json({
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version
    })
})

module.exports = router;
