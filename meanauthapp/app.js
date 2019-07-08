const express = require('express');
const path = require('path'); // Core module no explicit installation required
const bodyParser = require('body-parser');
const cors = require('cors'); // https://www.npmjs.com/package/cors basically helps us achieve https://enable-cors.org/server_expressjs.html
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

// cors middleware
app.use(cors());

app.get('/', (req, res) => {
	res.send('Invalid Endpoint')
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});