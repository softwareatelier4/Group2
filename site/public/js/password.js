$(document).ready(function() {

	const hash = location.hash.split('#')[1];
	const page = (hash) ? hash.split('=')[0] : undefined;

	doJSONRequest("GET", "/api/passport/islogged", null, null, function(res) {
		console.log(res);
		if (res.result || page == 'token') {
			//user is logged
			passwordChange(res.result, page, hash);
		} else {
			// user is not logged
			passwordLost();
		}
	});
});


function passwordLost() {
	$('#passwordLostForm').show();
	$('#passwordLostForm').submit(function(e) {
		e.preventDefault();

		let email = $('#email').val();

		$.get("/api/passport/newpassword/" + email, function() {
				const message = 'An email has been sent to you. Please, check your inbox.';

				$('#content')
					.html(message)
					.css({
						color: 'white'
					});
			})
			.fail(function() {
				const message = 'Error! No account with the email providden found.';

				$('#content')
					.html(message)
					.css({
						color: 'red'
					});
			})


	})
}

function passwordChange(user, page, hash) {

	const token = (hash) ? hash.split('=')[1].split('&')[0] : undefined;
	const secondPage = (hash) ? hash.split('&')[1].split('=')[0] : undefined;
	let email = (hash) ? hash.split('&')[1].split('=')[1] : undefined;

	email = email || user.email;

	$('#passwordChange').show();
	if (page == 'token' && secondPage == 'email') {
		$('#old-password').remove();
	} else {
		$('#old-password').show();
	}

	$('#passwordChange').submit(function(e) {
		e.preventDefault();

		let oldPassword = $('#old-password').val();
		let newPassword = $('#new-password').val();
		let confirmPassword = $('#new-confirm-password').val();

		if (newPassword != confirmPassword) {
			const message = '<p style="color: red">The new passwords inserted are not equal.</p><br />';

			$('#content')
				.prepend(message)
			return console.log('ERRORRRREEEE');
		}

		let data = {
			password: newPassword
		}

		if (token) {
			data.token = token;
		} else {
			data.oldPassword = oldPassword;
		}

		doJSONRequest("POST", "/api/passport/changepassword/" + email, null, data, function(res) {
			if (res.error) {
				const message = 'Error! ' + res.error;

				$('#content')
					.html(message)
					.css({
						color: 'red'
					});
			} else {
				// password changes
				const message = 'You password has been changed successfully. <br><a href="/">Go to homepage</a>';

				$('#content')
					.html(message)
					.css({
						color: 'white'
					});
			}
		});

	});
}
