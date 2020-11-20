// parser-utils

function isEmpty(value) {
    // lazy
    return !value || !value.trim().length
}

function sanitize(value) {
    return value.trim().toLowerCase()
}

module.exports = { isEmpty, sanitize }

