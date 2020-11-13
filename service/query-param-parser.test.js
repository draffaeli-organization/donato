// query-param-parser-test.js

const test = require('ava')
const parser = require('./query-param-parser')
const key = parser.QueryKey
const field = parser.FieldSelection

// ---parse test

test("query-param-parser.parse -> invalid keys, return empty array", t => {
    // arrange
    const expectedResponse = []

    const rawQueryParam = {
        search_key : "some_value",
        key1 : "some value",
        key2 : "some value   "
    }

    // act
    const actualResponse = parser.parse(rawQueryParam)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    t.is(0,Object.entries(actualResponse).length)
})

test("query-param-parser.parse -> search text only, return search text", t => {
    // arrange
    let expectedResponse = []
    expectedResponse[key.SEARCH_TEXT] = "cebolla"

    const rawQueryParam = {
        search_text : "cebolla",
        key1 : "some value",
        key2 : "some value   "
    }

    // act
    const actualResponse = parser.parse(rawQueryParam)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    t.is(1,Object.entries(actualResponse).length)
})

test("query-param-parser.parse -> empty search text, fields selection, sort field order mode", t => {
    // arrange
    let expectedResponse = []
    expectedResponse[key.FIELDS_SELECTION] = `${field.NAME},${field.DESCRIPTION},${field.PUNCTUATION}`
    expectedResponse[key.SORTING_FIELD] = "punctuation.average"
    expectedResponse[key.ORDER_FIELD] = "desc"

    const rawQueryParam = {
        search_text : "",
        fields : "name    ,  Description ,punctuation",
        sort_by : "punctuation.average",
        order : "    Desc"
    }

    // act
    const actualResponse = parser.parse(rawQueryParam)

    console.log(actualResponse)

    // assertions
    t.deepEqual(expectedResponse, actualResponse)
    t.is(3,Object.entries(actualResponse).length)
})
