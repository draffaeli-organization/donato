// server.js

const express = require('express')
const http = require('http');
const routes = require('./routes')
const interceptors = require('./interceptors')
const bodyParser = require('body-parser');

const expressApp = express()
// parser
expressApp.use(bodyParser.json())

// interceptors & error handling
expressApp.use('/', interceptors)

// routes
routes.forEach(r => expressApp.use('/',r))

// server init
const port = 3000
http.createServer(expressApp).listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
});
