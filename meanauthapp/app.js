const express = require('express');
const path = require('path'); // Core module no explicit installation required
const bodyParser = require('body-parser');
const cors = require('cors'); // https://www.npmjs.com/package/cors basically helps us achieve https://enable-cors.org/server_expressjs.html
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
// Deprecated: mongoose.connect(config.database);
mongoose.connect(config.database, { useNewUrlParser: true });

// On Connection
mongoose.connection.on('connected', () => {
	console.log(`Connected to database ${config.database}`);
});

// On Error
mongoose.connection.on('error', (err) => {
	console.log(`Database error ${err}`);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users); // The users middlware triggers only when /users is hit

// Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint')
});

// Start Server
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
