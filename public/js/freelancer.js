const FREELANCER = {

	name: 'freelancer',

	init: function() {
		console.log('Freelancer - initialization');

		SEARCH.searchHeader();

		let main = document.getElementById('main');
		main.style.display = "inherit";
		main.style.backgroundColor = "rgb(231, 231, 231)";

		FREELANCER.renderProfile();
	},

	remover: function() {

	},

	renderProfile: function() {
		var url = window.location.href;
		var idFreelancer = url.split('=')[1];

		doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(res) {
			console.log(res);
			if (res.error) {
				console.log("error");
			} else {
				$.get("/html/freelancer.html", function(html) {
					html = html
						.replace('{f.profilePic}', res.profilePhoto)
						.replace('{f.firstName}', res.firstName)
						.replace('{f.lastName}', res.lastName)
						.replace('{f.city}', res.address.city)
						.replace('{f.workName}', res.workName)
						.replace('{f.mail}', res.email)
						.replace('{f.phone}', res.phone)
						.replace('{f.description}', res.description);

					MAIN_JS.innerHTML = html;
				});
			}
		});
	}
}
