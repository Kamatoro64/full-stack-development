const moment = require('moment');

// Create middleware that uses moment

const logger = (req, res, next) => {
	console.log(`${moment().format()} ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} Request Body: ${JSON.stringify(req.body)} Request Params: ${JSON.stringify(req.params)}`);

	next();
}

module.exports = logger;

// To use logger in future applications, copy this file in a middleware folder and add
// the following to index.js to initialise the middleware

// const logger = require('./middleware/logger');
// app.use(logger); 

// Sample output
// 2019-07-06T14:35:21+08:00 GET http://localhost:5000/api/members/1 Request Body: undefined Request Params: {}