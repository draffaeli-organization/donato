// criteria-factory.js

const parser = require('./query-param-parser')
const key = parser.QueryKey
const CriteriaBuilder = require('./../service/model/criteria').CriteriaBuilder

function create(queryParams) {
    const sanitizedParams = parser.parse(queryParams)

    if (!Object.entries(sanitizedParams).length) {
        return new CriteriaBuilder().build();
    }

    return new CriteriaBuilder()
        .withSearchValue(sanitizedParams[key.SEARCH_TEXT])
        .withSelectedFields(sanitizedParams[key.FIELDS_SELECTION])
        .withSortingField(sanitizedParams[key.SORTING_FIELD])
        .withOrderMode(sanitizedParams[key.ORDER_FIELD])
        .build()
}

module.exports.create = create
