// criteria-factory.test.js

const test = require('ava')
const sinon = require('sinon')
const factory = require('./criteria-factory')
const parser = require('./query-param-parser')
const CriteriaBuilder = require("./model/criteria").CriteriaBuilder
const CriteriaType = require("./model/criteria").CriteriaType

// ---create tests

test("criteria-factory.create -> no criteria, return all", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedCriteria = new CriteriaBuilder().build()
    const parserStub = sandbox.stub(parser, "parse")
    let parsedParams = []
    parserStub.returns(parsedParams)

    // act
    const actualCriteria = factory.create({ a : "b" })

    // assertions
    t.deepEqual(expectedCriteria, actualCriteria)
    sinon.assert.calledOnce(parserStub)

    sandbox.restore()
})

test("criteria-factory.create -> only search value, return type restricted", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedCriteria = new CriteriaBuilder().withSearchValue("cebolla").build()
    const parserStub = sandbox.stub(parser, "parse")
    let parsedParams = []
    parsedParams["search_text"] = "cebolla"
    parserStub.returns(parsedParams)

    // act
    const actualCriteria = factory.create({ search_text : "cebolla" })

    console.log(expectedCriteria)
    console.log(actualCriteria)

    // assertions
    t.deepEqual(expectedCriteria, actualCriteria)
    sinon.assert.calledOnce(parserStub)

    sandbox.restore()
})
