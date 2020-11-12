// welcome.js

const router = require('express').Router();

// welcome
router.get('/', (req, res) => {
    res.send('Welcome To Donato')
})

module.exports = router
