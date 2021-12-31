const HttpError = require('../utils/HttpError');
const { logEvents } = require('./logger');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.statusCode}: ${err.message}\n`, 'errorLogs.txt');
    console.error(err);
    res.status(err.statusCode).json({ error: err.message });
}

module.exports = errorHandler;