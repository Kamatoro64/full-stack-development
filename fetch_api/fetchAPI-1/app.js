
document.getElementById('button1').addEventListener('click', getTextES6);
document.getElementById('button2').addEventListener('click', getJsonES6);
document.getElementById('button3').addEventListener('click', getExternalES6);

// function getTextES5() {
// 	// Fetch returns a promise
// 	fetch('test.txt')
// 		.then(function (res) {
// 			return res.text();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 			document.getElementById('output').innerHTML = data;
// 		})
// 		.catch(function (err) {
// 			console.log(err);
// 		})
// }

function getTextES6() {
	fetch('test.txt')
		.then(res => res.text())
		.then(data => {
			document.getElementById('output').innerHTML = data
		})
		.catch(err => console.log(err))
}

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



