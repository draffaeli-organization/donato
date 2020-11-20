// query-param-parser.js

const parserUtils = require('./parser-utils')

// TODO: refactor to reduce code
function parse(rawQueryParam) {
    console.log(`Parsing query params "${rawQueryParam}"`)
    let parsedParams = []

    const searchTextValue = rawQueryParam[QueryKey.SEARCH_TEXT]

    if (!parserUtils.isEmpty(searchTextValue)) {
        console.log("parsing search text")
        parsedParams[QueryKey.SEARCH_TEXT] = parserUtils.sanitize(searchTextValue)
    }

    const fieldsSelectionValue = rawQueryParam[QueryKey.FIELDS_SELECTION]
    if (!parserUtils.isEmpty(fieldsSelectionValue)) {
        console.log("parsing fields selection")
        const validFields = fieldsSelectionValue
            .split(",")
            .map(f => parserUtils.sanitize(f))
            .filter(f => fieldsSelection.some(validField => validField === f ))
            .join()
        if (validFields.length) {
            parsedParams[QueryKey.FIELDS_SELECTION] = validFields
        }
    }

    const rawSortingFieldValue = rawQueryParam[QueryKey.SORTING_FIELD]
    if (!parserUtils.isEmpty(rawSortingFieldValue)) {
        console.log("parsing sorting field")
        const sanitizedSortingFieldValue = parserUtils.sanitize(rawSortingFieldValue)
        if (fieldsSelection.some(f => f === sanitizedSortingFieldValue)) {
            parsedParams[QueryKey.SORTING_FIELD] = sanitizedSortingFieldValue
            parsedParams[QueryKey.ORDER_FIELD] = resolveOrderValue(rawQueryParam[QueryKey.ORDER_FIELD])
        }
    }

    return parsedParams
}

function resolveOrderValue(rawOrderFieldValue) {
    if (rawOrderFieldValue) {
        const sanitized = parserUtils.sanitize(rawOrderFieldValue)
        if (sanitized === Order.ASC) {
            return Order.ASC
        }
        if (sanitized === Order.DESC) {
            return Order.DESC
        }
    }
    //default ascending
    return Order.ASC
}

const QueryKey = {
    SEARCH_TEXT: "search_text",
    FIELDS_SELECTION: "fields",
    SORTING_FIELD: "sort_by",
    ORDER_FIELD: "order",
}

const fieldsSelection = ["name","description","punctuation","punctuation.values","punctuation.average"]

const FieldsSelection = {
    NAME: fieldsSelection[0],
    DESCRIPTION: fieldsSelection[1],
    PUNCTUATION: fieldsSelection[2],
    PUNCTUATION_VALUES: fieldsSelection[3],
    PUNCTUATION_AVERAGE: fieldsSelection[4]
}

const Order = {
    ASC: "asc",
    DESC: "desc"
}

module.exports.parse = parse
module.exports.QueryKey = QueryKey
module.exports.FieldSelection = FieldsSelection
