const { logEvents } = require('./logger');

const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode).json({ error: err.message });
    logEvents(`${err.statusCode}: ${err.message}\n`, 'errorLogs.txt');
}

module.exports = errorHandler;