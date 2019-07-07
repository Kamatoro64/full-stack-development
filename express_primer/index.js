const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// express-handlebars middleware - see: https://www.npmjs.com/package/express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // For form submissions

// Logger middlware (Interestingly this relies on the body parser so it has to come after!)
app.use(logger);

// Create a route
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Member App',
		members // this is the same as members:members 
	});
})

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Router
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));