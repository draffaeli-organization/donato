// interceptors.js

const express = require('express')
const router = express.Router();

// dummy interceptor
/*
router.use((request, response, next) => {
    next()
})
*/

// last interceptor -> error handler
router.use((error, req, res, next) => {
    console.log(error)
    res.status(500).send('ups something broke!')
})

const errorHandler = (error, req, res, next) => {
    console.log(error)
    res.status(500).json({'message': 'internal error', 'cause': error})
}

module.exports = router
module.exports.errorHandler = errorHandler
