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
						html = renderTemplateString(html, templateTag[label], label);
					}

					let tags = []
					for (let tag of res.tags) {
						tags.push(tag.name);
					}
					html = renderTemplateArray(html, tags, 'f.tag')


					FREELANCER.renderReview(html, idFreelancer);
				});
			}
		});
	},

	renderReview: function(html, idFreelancer) {
		doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {


			$.get("/html/review.html", function(reviewHtml) {
				let htmlReview = '';

				for (review of result) {

					htmlReview += reviewHtml
						.replace('{r.title}', review.title)
						.replace('{r.firstName}', review.user.firstName)
						.replace('{r.lastName}', review.user.lastName)
						.replace('{r.description}', review.description)

					if (review.answer) {
						document.getElementById("reply").innerHTML = `<div class="card-block">
			            <h6 class="card-subtitle mb-2 text-muted">Reply:</h6>
			            <p class="card-text"> {review.answer} </p>
			         </div>`;
					}
				}


				html = html.replace('{f.rank}', FREELANCER.calculateAverageRank(result));
				html = html.replace('{r.review}', htmlReview);
				MAIN_JS.innerHTML = html;
			});

		});
	},

	calculateAverageRank: function(reviews) {
		let html = '';
		let totScore = 0;
		for (review of reviews) {
			totScore += review.score;
		}

		let media = totScore / reviews.length;
		let floorMedia = Math.floor(media);

		let i;
		for (i = 0; i != floorMedia; i++) {
			html += "<i class='fa fa-star blue' aria-hidden='true'></i>";
		}

		if ((media - floorMedia) >= 0.5) {
			html += "<i class='fa fa-star-half-o blue' aria-hidden='true'></i>";
			i++;
		}

		for (let j = i; j < 5; j++) {
			html += "<i class='fa fa-star-o blue' aria-hidden='true'></i>";
		}
		return html;
	}
}
