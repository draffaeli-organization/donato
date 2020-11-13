// index.js

const service = require('./recipe-service')
const criteriaFactory = require('./criteria-factory')
const punctuationValidator = require('./punctuation-validator')

module.exports.service = service
module.exports.criteriaFactory = criteriaFactory
module.exports.punctuationValidator = punctuationValidator
