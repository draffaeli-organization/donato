// parser-utils

function isEmpty(rawCriteria) {
    // lazy
    return !rawCriteria || !rawCriteria.trim().length
}

function sanitize(rawCriteria) {
    return rawCriteria.trim()
}

module.exports = { isEmpty, sanitize }

