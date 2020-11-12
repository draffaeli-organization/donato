// recipe-service.test.js

// search-criteria-utils-test.js

const test = require('ava')
const sinon = require('sinon')
const service = require('./recipe-service')

const repository = require('./../repository/recipe-repository')
const criteriaUtils = require('./../repository/search-criteria-utils')

// ---fetch tests

test("recipe-service.fetch -> empty criteria, return all recipes", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = [{"name":"recipe1"},{"name":"recipe2"},{"name":"recipe3"},{"name":"recipe4"}]
    const isEmptyStub = sandbox.stub(criteriaUtils, "isEmpty")
    const retrieveAllStub = sandbox.stub(repository, "retrieveAll")

    isEmptyStub.returns(true)
    retrieveAllStub.returns(expectedResponse)

    // act
    const actualResponse = service.fetch("some empty criteria")

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(retrieveAllStub)
    sinon.assert.calledOnce(isEmptyStub)

    sandbox.restore()
})

test("recipe-service.fetch -> search criteria, found 1 recipe", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = [{"name":"recipe1"}]
    const criteria = "some criteria   "
    const sanitizedCriteria = "some criteria"

    const isEmptyStub = sandbox.stub(criteriaUtils, "isEmpty")
    const sanitizeStub = sandbox.stub(criteriaUtils, "sanitize")
    const retrieveStub = sandbox.stub(repository, "retrieve")
    isEmptyStub.returns(false)
    sanitizeStub.withArgs(criteria).returns(sanitizedCriteria)
    retrieveStub.withArgs(repository.searchMode.BY_DESCRIPTION, sanitizedCriteria).returns(expectedResponse)

    // act
    const actualResponse = service.fetch(criteria)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(isEmptyStub)
    sinon.assert.calledOnce(sanitizeStub)
    sinon.assert.calledOnce(retrieveStub)

    sandbox.restore()
})

test("recipe-service.fetch -> search criteria, recipes not found, empty response", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = []
    const criteria = "some criteria   "
    const sanitizedCriteria = "some criteria"

    const isEmptyStub = sandbox.stub(criteriaUtils, "isEmpty")
    const sanitizeStub = sandbox.stub(criteriaUtils, "sanitize")
    const retrieveStub = sandbox.stub(repository, "retrieve")
    isEmptyStub.returns(false)
    sanitizeStub.withArgs(criteria).returns(sanitizedCriteria)
    retrieveStub.withArgs(repository.searchMode.BY_DESCRIPTION, sanitizedCriteria).returns(expectedResponse)

    // act
    const actualResponse = service.fetch(criteria)

    // assertions
    t.is(expectedResponse, actualResponse)
    sinon.assert.calledOnce(isEmptyStub)
    sinon.assert.calledOnce(sanitizeStub)
    sinon.assert.calledOnce(retrieveStub)

    sandbox.restore()
})

// ---fetchById tests
test("recipe-service.fetchById -> valid id, return recipe", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = {"name":"recipe1"}
    const retrieveStub = sandbox.stub(repository, "retrieve")
    retrieveStub.withArgs(repository.searchMode.BY_ID, 10).returns(expectedResponse)

    // act
    const actualResponse = service.fetchById("10")

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(retrieveStub)

    sandbox.restore()
})

test("recipe-service.fetchById -> not numeric id, return undefined", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = undefined
    const retrieveStub = sandbox.stub(repository, "retrieve")
    retrieveStub.withArgs(repository.searchMode.BY_ID, NaN).returns(expectedResponse)

    // act
    const actualResponse = service.fetchById("aa")

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(retrieveStub)

    sandbox.restore()
})
