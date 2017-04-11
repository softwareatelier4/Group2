const REGISTRATION = {
	name: 'registration',

	submitUser: function() {
		let pattStrings = /^([A-Za-z_ _-_è_ü_é_ö_à_ä_á_']{3,15})+$/;
		let submitBtn = document.getElementById('formButton');
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let email = document.getElementById('email');
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeatPassword');
		let passwordError = document.getElementById("repeatPassword-label"); //different passwords
		let emailError = document.getElementById("email-label"); //email already taken
		let firstNameError = document.getElementById("firstName-label"); //firstname contains special characters
		let firstNameErrorLength = document.getElementById("firstName-label2"); //firstname length error
		let lastNameError = document.getElementById("lastName-label"); //lastname contains special characters
		let lastNameErrorLength = document.getElementById("lastName-label2"); //lastname length error
		submitBtn.addEventListener("click", function() {
			passwordError.style.display = "none";
			emailError.style.display = "none";
			firstNameError.style.display = "none";
			firstNameErrorLength.style.display = "none";
			lastNameError.style.display = "none";
			lastNameErrorLength.style.display = "none";
		});
		if(password.value !== repeatPassword.value) {
			passwordError.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		}
		else if(firstName.value.length < 4) {
			if(lastName.value.length < 4) {
				lastNameErrorLength.style.display = "block";
			}
			firstNameErrorLength.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		}
		else if(lastName.value.length < 4) {
			if(firstName.value.length < 4) {
				firstNameErrorLength.style.display = "block";
			}
			lastNameErrorLength.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		}
		else if(!pattStrings.test(firstName.value)) {
			firstNameError.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		}
		else if(!pattStrings.test(lastName.value)) {
			lastNameError.style.display = "block";
			password.value = "";
			repeatPassword.value = "";
		}
		else {
			let user = {
				'firstName' : firstName.value,
				'lastName' : lastName.value,
				'email' : email.value,
				'password' : password.value
			}
			doJSONRequest("POST", "/api/passport/signup", null, user, function(res) {
				if(res.error){
					emailError.style.display = "block";
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
