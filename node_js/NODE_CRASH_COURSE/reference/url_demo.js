const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialised URL
console.log(myUrl.href);

// Serialised URL
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host (root domain) no port!
console.log(myUrl.hostname);

// Pathname	
console.log(myUrl.pathname);

// Serialised Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append('abc', '123');

// Params Object
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`)
})

