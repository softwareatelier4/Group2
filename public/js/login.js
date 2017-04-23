const LOGIN = {
	checkData: function() {
		//CHECK THE LOGIN DATA
		document.getElementById("form-login").submit();
	},
	submitLogin: function() {
		//   console.log("dentro");
		let email = document.getElementById('login-email');
		let password = document.getElementById('modal-password');

		let login = {
			'email': email.value,
			'password': password.value
		}
		doJSONRequest("POST", "/api/passport/login", null, login, function(res) {
			if (res.result == "success") {
				location.reload();
			} else {
				document.getElementById("modal-title").innerText = "User name or password wrong, try again!";
			}
		});
	},

	logout: function() {
		doJSONRequest('GET', '/api/passport/logout', null, null, function(res) {
			location.reload();
		});
	}
}
