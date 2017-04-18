const REGISTRATION = {
	name: 'registration',

	clearForm: function() {
		console.log("calling clear!");
		let passwordError = document.getElementById("repeatPassword-label"); //different passwords
		let firstNameError = document.getElementById("firstName-label"); //firstname contains special characters
		let firstNameErrorLength = document.getElementById("firstName-label2"); //firstname length error
		let lastNameError = document.getElementById("lastName-label"); //lastname contains special characters
		let lastNameErrorLength = document.getElementById("lastName-label2"); //lastname length error
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeatPassword');

		passwordError.style.display = "none";
		firstNameError.style.display = "none";
		lastNameError.style.display = "none";
		firstNameErrorLength.style.display = "none";
		lastNameErrorLength.style.display = "none";
		password.value = "";
		repeatPassword.value = "";
	},

	checkData: function(){
		console.log("calling this function!");
		REGISTRATION.clearForm();
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let email = document.getElementById('email');
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeatPassword');
		let passwordError = document.getElementById("repeatPassword-label"); //different passwords
		let firstNameError = document.getElementById("firstName-label"); //firstname contains special characters
		let firstNameErrorLength = document.getElementById("firstName-label2"); //firstname length error
		let lastNameError = document.getElementById("lastName-label"); //lastname contains special characters
		let lastNameErrorLength = document.getElementById("lastName-label2"); //lastname length error
		let pattStrings = /^([A-Za-z_ _-_è_ü_é_ö_à_ä_á_']{3,15})+$/;
		let flag = true;
		if(password.value !== repeatPassword.value) {
			flag = false;
			passwordError.style.display = "block";
		}
		if(!pattStrings.test(firstName.value)){
			flag = false;
			firstNameError.style.display = "block";
		}
		if(!pattStrings.test(lastName.value)){
			flag = false;
			lastNameError.style.display = "block";
		}
		if(firstName.value.length < 4 || firstName.value.length > 18) {
			flag = false;
			firstNameErrorLength.style.display = "block";
		}
		if(lastName.value.length < 4 || lastName.value.length > 18) {
			flag = false;
			lastNameErrorLength.style.display = "block";
		}
		if(flag){
			REGISTRATION.submitUser();
		}
	},

	submitUser: function() {
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let email = document.getElementById('email');
		let password = document.getElementById('password');
		let emailError = document.getElementById("email-label"); //email already taken
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
