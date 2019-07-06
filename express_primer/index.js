const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();



// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // For form submissions

// Logger middlware (Interestingly this relies on the body parser so it has to come after!)
app.use(logger);


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Router
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));