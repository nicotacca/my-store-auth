const boom = require('@hapi/boom');

const { config } = require('./../config/config');

/* function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
} */

function checkApiKey(req, res, next) {
    // nos traemos del header la api
    const apiKey = req.headers['api'];
    if (apiKey === '123') {
      next();
    } else {
      next(boom.unauthorized());
    }
  }

module.exports = { checkApiKey }