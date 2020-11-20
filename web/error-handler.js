// error-handler.js

const handleError = (error, req, res, next) => {
    console.log(error)
    // TODO: maybe an error mapping strategy in order to don't expose internal error details and offer a friendly message
    res.status(500).json({'message': 'internal error', 'cause': error})
}

module.exports.handleError = handleError
