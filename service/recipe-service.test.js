// recipe-service.test.js

const test = require('ava')
const sinon = require('sinon')
const service = require('./recipe-service')
const repository = require('./../repository/recipe-repository')
const CriteriaBuilder = require('./../service/model/criteria').CriteriaBuilder
const CriteriaType = require('./../service/model/criteria').CriteriaType

// ---fetch tests

test("recipe-service.fetch -> empty search text, return all recipes", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = [{"name":"recipe1"},{"name":"recipe2"},{"name":"recipe3"},{"name":"recipe4"}]
    const retrieveAllStub = sandbox.stub(repository, "retrieveAll")
    retrieveAllStub.returns(expectedResponse)
    const newCriteria = new CriteriaBuilder().build()

    // act
    const actualResponse = service.fetch(newCriteria)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(retrieveAllStub)

    sandbox.restore()
})

test("recipe-service.fetch -> search text, found 1 recipe", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = [{"name":"recipe1"}]
    const newCriteria = new CriteriaBuilder().withSearchValue("some criteria").build()

    const retrieveStub = sandbox.stub(repository, "retrieve")
    retrieveStub.withArgs(repository.searchMode.BY_TEXT, "some criteria").returns(expectedResponse)

    // act
    const actualResponse = service.fetch(newCriteria)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(retrieveStub)

    sandbox.restore()
})

test("recipe-service.fetch -> search text, recipes not found, empty response", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const expectedResponse = []
    const newCriteria = new CriteriaBuilder().withSearchValue("some criteria").build()

    const retrieveStub = sandbox.stub(repository, "retrieve")
    retrieveStub.withArgs(repository.searchMode.BY_TEXT, "some criteria").returns(expectedResponse)

    // act
    const actualResponse = service.fetch(newCriteria)

    // assertions
    t.is(expectedResponse, actualResponse)
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
