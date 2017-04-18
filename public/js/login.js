const LOGIN = {
     checkData: function(){
         //CHECK THE LOGIN DATA
         document.getElementById("form-login").submit();
     },
     submitLogin: function(){
      //   console.log("dentro");
        let email = document.getElementById('modal-email');
		let password = document.getElementById('modal-password');

        let login = {
            'email' : email.value,
			'password' : password.value
        }
        doJSONRequest("POST", "/api/passport/login", null, login, function(res) {
            if(res.result == "success"){
                window.location.replace("http://127.0.0.1:3000");
            } else {
                document.getElementById("modal-title").innerText = "User name or password wrong, try again!";
            }
		});
     }
}
