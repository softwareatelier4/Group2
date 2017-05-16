$(document).ready(function() {

	const page = location.hash.split('#')[1];

	switch (page) {
		case 'newpassword':
			$('#newPasswordForm').show();

			break;
		default:
			$('#passwordLostForm').show();
			passwordLost();
	}
});


function passwordLost() {
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
				const message = 'Error!';

				$('#content')
					.html(message)
					.css({
						color: 'red'
					});
			})


	})
}
