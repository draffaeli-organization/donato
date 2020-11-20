// server.js

const express = require('express')
const http = require('http');
const routes = require('./routes')
const interceptors = require('./interceptors')
const errorHandler = require('./error-handler')
const bodyParser = require('body-parser');

const expressApp = express()
// parser
expressApp.use(bodyParser.json())

// request interceptors
expressApp.use('/', interceptors)

// routes
routes.forEach(r => expressApp.use('/',r))

// error handling
expressApp.use(errorHandler.handleError)

// server init
const port = 3000
http.createServer(expressApp).listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
});
