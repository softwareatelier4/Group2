const REGISTRATION = {
	name: 'registration',

	submitUser: function() {
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let email = document.getElementById('email');
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeatPassword');
		let repeatPasswordLabel = document.getElementById("repeatPassword-label");
		let emailLabel = document.getElementById("email-label");
		if(password.value !== repeatPassword.value) {
			repeatPasswordLabel.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		} else {
			let user = {
				'firstName' : firstName.value,
				'lastName' : lastName.value,
				'email' : email.value,
				'password' : password.value
			}
			doJSONRequest("POST", "/api/passport/signup", null, user, function(res) {
				if(res.error){
					emailLabel.style.display = "block";
					email.value = "";
					password.value = "";
					repeatPassword.value = "";
				}
				else if(res.success){
					window.location.href ='/';
				}
			});
		}
	}
}
