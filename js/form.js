function validateForm() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	var body = {
		username,
		password,
	}
	console.log(body)
	fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((res) => {
			if (res.status == 403) {
				var error = 'Error : Wrong username or password '
				var popup = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
								<strong>${error}</strong>
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>`
				document.getElementById('popup').innerHTML = popup
			} else {
				window.location = 'http://localhost:3000/login'
			}
		})
		.catch((err) => console.log(err))
}
