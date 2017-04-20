const REGISTRATION = {
	name: 'registration',

	clearForm: function() {
		let password = document.getElementById('password');
		let repeatPassword = document.getElementById('repeatPassword');
		password.value = "";
		repeatPassword.value = "";
	},

	checkData: function(){
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
		} else {
			passwordError.style.display = "none";
		}
		if(!pattStrings.test(firstName.value)){
			flag = false;
			firstNameError.style.display = "block";
		}
		else {
			firstNameError.style.display = "none";
		}
		if(!pattStrings.test(lastName.value)){
			flag = false;
			lastNameError.style.display = "block";
		}
		else {
			lastNameError.style.display = "none";
		}
		if(firstName.value.length < 4 || firstName.value.length > 18) {
			flag = false;
			firstNameErrorLength.style.display = "block";
		}
		else {
			firstNameErrorLength.style.display = "none";
		}
		if(lastName.value.length < 4 || lastName.value.length > 18) {
			flag = false;
			lastNameErrorLength.style.display = "block";
		}
		else {
			lastNameErrorLength.style.display = "none";
		}
		if(!flag) {
			REGISTRATION.clearForm();
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
