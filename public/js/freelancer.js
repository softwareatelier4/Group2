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
			if (res.error) {
				console.log("error");
			} else {
				$.get("/html/freelancer.html", function(html) {
					let templateTag = {
						'f.city': res.address.city,
						'f.profilePic': res.profilePhoto,
						'f.firstName': res.firstName,
						'f.lastName': res.lastName,
						'f.workName': res.workName,
						'f.mail': res.email,
						'f.phone': res.phone,
						'f.description': res.description
					};

					for (label in templateTag) {
						let startTag = "{?" + label + "}";
						let endTag = "{?" + label + "/}";
						let startBloc = html.indexOf(startTag);
						let endBloc = html.indexOf(endTag) + endTag.length;

						if (templateTag[label] && startBloc != -1) {
							html = html
								.replace(startTag, '')
								.replace(endTag, '')
								.replace('{' + label + '}', templateTag[label]);
						} else if (!templateTag[label] && startBloc != -1) {
							html = html.substring(0, startBloc) + html.substring(endBloc, html.length);
						} else {
							html = html.replace('{' + label + '}', templateTag[label]);
						}
					}

					MAIN_JS.innerHTML = html;
				});
			}
		});
	}
}
