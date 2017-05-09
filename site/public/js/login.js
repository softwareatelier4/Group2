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
			} else if (res.motivation == 'not-found') {
				$('#login-error').html('<strong>Error: </strong> User name or password are wrong');
				$('#login-error').slideDown();
			} else if (res.motivation == 'inactive') {
				$('#login-error').html('<strong>Error: </strong> Please, confirm your mail');
				$('#login-error').slideDown();
			} else {
				$('#login-error').html('<strong>Error: </strong> I am not feeling well. Sorry :\'(');
				$('#login-error').slideDown();
			}
		});
	},

	logout: function() {
		doJSONRequest('GET', '/api/passport/logout', null, null, function(res) {
			location.reload();
		});
	}
}
