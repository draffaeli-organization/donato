// server.js

const express = require('express')
const http = require('http');
const routerController = require('./controller')
const interceptors = require('./interceptors')
const packageJson = require('../package.json')

const expressApp = express()
const port = 3000

// interceptors
expressApp.use('/', interceptors)

// routes
expressApp.use('/', routerController)

// server
http.createServer(expressApp).listen(port, ()=> {
    console.log(`${packageJson.name} is listening on port ${port}`)
});
