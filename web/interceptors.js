// interceptors.js

const express = require('express')
const router = express.Router();

// dummy interceptor
router.use((request, response, next) => {
    next()
})

module.exports = router
