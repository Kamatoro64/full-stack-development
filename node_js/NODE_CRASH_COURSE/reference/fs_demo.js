// https://nodejs.org/docs/latest-v11.x/api/fs.html
const fs = require('fs');
const path = require('path');

// Create folder (asynchronous)
fs.mkdir(path.join(__dirname, '/test'), {}, err => { // Single parameter err so no parentheses required
	if (err) throw err;
	console.log('Folder created...')
});


// Create and write to file using fs.writeFile, then append to it using fs.appendFile
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => { // Single parameter err so no parentheses required
	if (err) throw err;
	console.log('File written to...')

	// Use fs.appendFile to append to file
	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => { // Single parameter err so no parentheses required
		if (err) throw err;
		console.log('File appended to...')

		// Use fs.readFile to read file, noticed that if readFile was not added to the callback of append, it would read only the first 'Hello World!' line since it is asynchronous
		fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
			if (err) throw err;
			console.log(data)

			// Oh god callback hell. Now rename it!
			fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
				if (err) throw err;
				console.log('File renamed...')
			});
		});
	});

});











