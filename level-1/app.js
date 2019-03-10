// Dynamically populate dropdown on page load
window.onload = populateDropdown;

// Retrieve values when dropdown selection is changed
document.getElementById('dropdown1').addEventListener('change', getValues)

// Reduce scope, exclude these keys and use them in the filter function
const excludedKeys = ['id', 'name', 'address', 'company'];

function populateDropdown() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			let output = '';

			Object.keys(data[0]).filter(key => !excludedKeys.includes(key)).forEach(key => {
				output += `<option value="${key}">${key}</option>`
			})
			document.getElementById('dropdown1').innerHTML = output
		})

}

function getValues() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			let selectedKey = document.getElementById('dropdown1').value
			let selectedKeyUpper = selectedKey.charAt(0).toUpperCase() + selectedKey.slice(1)
			let output = '';

			document.getElementById('th1').innerText = selectedKeyUpper

			data.forEach(user => {

				let userName = user['name']
				let userSelect = user[selectedKey]
				output += `
				<tr>
				<td>${userName}</td>
				<td>${userSelect}</td>
			  <tr>`
			})
			document.getElementById('tbody1').innerHTML = output

		})
}





