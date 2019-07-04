# Fetch API

## Prelude

### Set up some buttons:

``` html
<body>
	<div class="container">
		<h1>Fetch API Sandbox</h1>
		<button id="button1">Get Text ES6</button>
		<button id="button2">Get JSON ES6</button>
		<button id="button3">Get Data ES6</button>
		<br>
		<div id="output"></div>
	</div>

	<script src="app.js"></script>
</body>
```

### Event listener on button:

``` js
document.getElementById('button1').addEventListener('click', getTextES6);
document.getElementById('button2').addEventListener('click', getJsonES6);
document.getElementById('button3').addEventListener('click', getExternalES6);
```

## GET Text

### The getText function - ES6 Syntax:

``` js
function getTextES6() {
	fetch('test.txt')
	.then(res => res.text()) 
	.then(data => document.getElementById('output').innerHTML = data) 
	.catch(err => console.log(err))
}
```

## GET JSON
### The getJson function -  ES6 Syntax

This is slightly more complicated since the data is an array of post objects. Loop through each object and create a list element containing the post's title:

``` js
function getJsonES6() {
	fetch('posts.json')
		.then(res => res.json())
		.then(data => {
			let output = '';
			data.forEach(post => output += `<li>${post.title}</li>`)
			document.getElementById('output').innerHTML = output;
		})
		.catch(err => console.log(err))
}
```

### The getExternal function -  ES6 Syntax

Instead of getting a local json file, we'll retrieve json data from the githib API:

``` js
function getExternalES6() {
	fetch('https://api.github.com/users')
		.then(res => res.json())
		.then(data => {
			let output = '';
			data.forEach(user => output += `<li>${user.login}</li>`)
			document.getElementById('output').innerHTML = output;
		})
		.catch(err => console.log(err))
}
```

