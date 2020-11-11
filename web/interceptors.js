// interceptors.js

const express = require('express')
const router = express.Router();

// interceptor
router.use((request, response, next) => {
    console.log(`request received from ${request.rawHeaders}`)
    next()
})

// last interceptor -> error handler
router.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send('ups something broke!')
})

module.exports = router
