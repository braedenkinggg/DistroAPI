const HttpError = require('../utils/HttpError');

const errorHandler = (err, req, res, next) => {
    if (err instanceof HttpError) {
        res.status(err.statusCode).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = errorHandler;