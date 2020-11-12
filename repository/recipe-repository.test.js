// recipe-repository.test.js

const test = require('ava')
const repository = require('./recipe-repository')

// ---retrieveAll tests

test("recipe-repository.retrieveAll -> some string, return false", t => {
    // arrange
    const value = "pollo"

    // act
    let actualResponse = repository.retrieveAll();

    // assersions
    t.false(actualResponse)
})
