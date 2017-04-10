const LOGIN = {
     checkData: function(){
         //CHECK THE LOGIN DATA
         document.getElementById("form-login").submit();
     },
     submitLogin: function(){
        console.log("dentro");
        let email = document.getElementById('modal-email');
		let password = document.getElementById('modal-password');

        let login = {
            'email' : email.value,
			'password' : password.value
        }
        doJSONRequest("POST", "/api/passport/login", null, login, function(res) {
            console.log("Logged");
		});
     }
}