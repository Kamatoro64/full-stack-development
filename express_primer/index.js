const express = require('express');
const path = require('path');
const moment = require('moment');


const app = express();

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// Create middleware that uses moment
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
}

// Init middleware so now each request will trigger the logger middleware
app.use(logger);





// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));