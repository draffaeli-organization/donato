// recipe-repository.test.js

const test = require('ava')
const sinon = require('sinon')
const repository = require('./recipe-repository')

const fs = require('fs')

// ---retrieveAll tests

test("recipe-repository.retrieveAll -> return json items", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = '{ "items": [{"id": 1, "name": "recipe 1"}, {"id": 2, "name": "recipe 2"}] }'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)
    const expectedResponse = [
        {
            "id" : 1,
            "name": "recipe 1"
        },
        {
            "id" : 2,
            "name": "recipe 2"
        }
    ];

    // act
    let actualResponse = repository.retrieveAll();

    // assertions
    t.deepEqual(actualResponse, expectedResponse)
    sinon.assert.calledOnce(readFileSyncStub)

    sandbox.restore();
})

test("recipe-repository.retrieveAll -> invalid json throw error", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = 'some invalid json'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)

    // act
    try {
        t.throws(repository.retrieveAll())
    } catch (err) {
        // assertions
        t.is('Unexpected token s in JSON at position 0', err.message)
    }

    //sinon.assert.calledOnce(readFileSyncStub)
    sandbox.restore();
})

// ---retrieve tests

test("recipe-repository.retrieve -> by id, return found recipe", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = '{ "items": [{"id": 1, "name": "recipe 1"}, {"id": 2, "name": "recipe 2"}] }'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)
    const expectedResponse = {
        "id" : 1,
        "name": "recipe 1"
    }

    // act
    const actualResponse = repository.retrieve(repository.searchMode.BY_ID, 1)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(readFileSyncStub)

    sandbox.restore()
})

test("recipe-repository.retrieve -> by id, not found, return undefined recipe", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = '{ "items": [{"id": 1, "name": "recipe 1"}, {"id": 2, "name": "recipe 2"}] }'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)

    // act
    const actualResponse = repository.retrieve(repository.searchMode.BY_ID, 4)

    // assertions
    t.is(undefined, actualResponse)
    sinon.assert.calledOnce(readFileSyncStub)

    sandbox.restore()
})

test("recipe-repository.retrieve -> by description, some recipes found matching by name, by description and ingredients", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = '{"items":[{"id":1,"name":"Milanesas con papas fritas","description":"Milanesas","ingredients":[{"name":"pan rallado","quantity":3,"measure":"unidad"}]},{"id":2,"name":"Pan de carne","description":"--","punctuations":[3],"ingredients":[{"name":"carne picada","quantity":1,"measure":"kg"}]},{"id":3,"name":"huevos revueltos","description":"huevos revueltos en tostada de pan integral","punctuations":[3],"ingredients":[{"name":"huevos","quantity":3,"measure":"unidad"}]},{"id":4,"name":"ensalada rusa","description":"ensalada rusa con mayonesa y perejil","punctuations":[3],"ingredients":[{"name":"papas","quantity":3,"measure":"unidad"}]}]}'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)
    const expectedResponse = [
        {"id":1,"name":"Milanesas con papas fritas","description":"Milanesas","ingredients":[{"name":"pan rallado","quantity":3,"measure":"unidad"}]},
        {"id":2,"name":"Pan de carne","description":"--","punctuations":[3],"ingredients":[{"name":"carne picada","quantity":1,"measure":"kg"}]},
        {"id":3,"name":"huevos revueltos","description":"huevos revueltos en tostada de pan integral","punctuations":[3],"ingredients":[{"name":"huevos","quantity":3,"measure":"unidad"}]}
        ]
    // act
    const actualResponse = repository.retrieve(repository.searchMode.BY_DESCRIPTION, "pan")

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(readFileSyncStub)

    sandbox.restore()
})

test("recipe-repository.retrieve -> by description, not found, return empty array", t => {
    const sandbox = sinon.createSandbox();

    // arrange
    const json = '{"items":[{"id":1,"name":"Milanesas con papas fritas","description":"Milanesas","ingredients":[{"name":"pan rallado","quantity":3,"measure":"unidad"}]},{"id":2,"name":"Pan de carne","description":"--","punctuations":[3],"ingredients":[{"name":"carne picada","quantity":1,"measure":"kg"}]},{"id":3,"name":"huevos revueltos","description":"huevos revueltos en tostada de pan integral","punctuations":[3],"ingredients":[{"name":"huevos","quantity":3,"measure":"unidad"}]},{"id":4,"name":"ensalada rusa","description":"ensalada rusa con mayonesa y perejil","punctuations":[3],"ingredients":[{"name":"papas","quantity":3,"measure":"unidad"}]}]}'
    const readFileSyncStub = sandbox.stub(fs, "readFileSync")
    readFileSyncStub.returns(json)
    const expectedResponse = []

    // act
    const actualResponse = repository.retrieve(repository.searchMode.BY_DESCRIPTION, "xxxx")

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    sinon.assert.calledOnce(readFileSyncStub)

    sandbox.restore()
})
