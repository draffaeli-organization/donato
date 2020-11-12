// interceptors.js

const express = require('express')
const router = express.Router();

// dummy interceptor
router.use((request, response, next) => {
    next()
})

// last interceptor -> error handler
router.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send('ups something broke!')
})

module.exports = router
