function validateForm() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	console.log(username)
	console.log(password)
	fetch('http://192.168.56.2/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	})
		.then((res) => console.log(res))
		.catch((err) => console.log(err))
}
