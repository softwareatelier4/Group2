const FREELANCERCREATION = {

	name: 'freelancerCreation',

	submitFreelancer: function() {
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let workName = document.getElementById('workName');
		let phoneNumber = document.getElementById('phone');
		let city = document.getElementById('city');
		let street = document.getElementById('street');
		let number = document.getElementById('number');
		let zip = document.getElementById('zip');
		let mail = document.getElementById('email');
		let profilePic = document.getElementById('profilePicture');
		let freelancer = {
			'firstName' : firstName.value,
			'lastName' : lastName.value,
			'workName' : workName.value,
			'email' : mail.value,
			'phone' : phoneNumber.value,
			address : {
				'city' : city.value,
				'street' : street.value,
				'number' : number.value,
				'zip' : zip.value
			}
		};
		doJSONRequest("POST", "/api/freelancer/create/freelancer", null, freelancer, function(res) {
			console.log(res);
		});
	}

}
