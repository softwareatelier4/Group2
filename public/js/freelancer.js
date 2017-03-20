const FREELANCER = {

	name: 'freelancer',

	init: function() {
		console.log('Freelancer - initialization');

		SEARCH.searchHeader();
		SEARCH.hashUpdater();

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
						'f.description': res.description,
						'f.margin': `class="ml-15"`
					};

					for (label in templateTag) {
						if (label == 'f.margin' && res.photos.length == 0) {
							html = renderTemplateString(html, " ", label);
						} else {
							html = renderTemplateString(html, templateTag[label], label);
						}
					}

					let tags = []
					for (let tag of res.tags) {
						tags.push(tag.name);
					}
					html = renderTemplateArray(html, tags, 'f.tag');

					html = renderTemplateArray(html, res.photos, 'f.photos');



					FREELANCER.renderReview(html, idFreelancer);
				});
			}
		});
	},

	renderReview: function(html, idFreelancer) {
		doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {

			$.get("/html/review.html", function(reviewHtml) {
				if (result.length != 0) {

					let htmlReviews = '';

					for (review of result) {
						let templateTag = {
							'r.title': review.title,
							'r.firstName': review.user.firstName,
							'r.lastName': review.user.lastName,
							'r.description': review.description,
							'r.answer': review.answer
						};
						let htmlReview = reviewHtml;
						for (label in templateTag) {
							htmlReview = renderTemplateString(htmlReview, templateTag[label], label);
						}

						htmlReview = htmlReview.replace('{r.score}', FREELANCER.getHtmlRankStar({
							full: review.score,
							empty: 5 - review.score
						}))

						htmlReview = renderTemplateArray(htmlReview, review.photo, 'r.photos');

						htmlReviews += htmlReview;
					}


					html = html.replace('{f.rank}', FREELANCER.calculateAverageRank(result));
					html = html.replace('{f.review}', htmlReviews);
				} else {
					html = html.replace('{f.review}', 'There aren\'t any reviews at the moment');
					html = html.replace('{f.rank}', FREELANCER.getHtmlRankStar({
						empty: 5
					}));

				}

				MAIN_JS.innerHTML = html;
			});

		});
	},

	calculateAverageRank: function(reviews) {
		let starObj = {
			full: 0,
			half: 0,
			empty: 0
		}
		let totScore = 0;
		for (review of reviews) {
			totScore += review.score;
		}

		let media = totScore / reviews.length;
		starObj.full = Math.floor(media);
		starObj.half = (media - starObj.full >= 0.5) ? 1 : 0;
		starObj.empty = 5 - starObj.full - starObj.half;

		return FREELANCER.getHtmlRankStar(starObj);
	},

	getHtmlRankStar: function(starObj) {
		// starObj = {full, half, empty}
		starObj.full = starObj.full | 0;
		starObj.half = starObj.half | 0;
		starObj.empty = starObj.empty | 0;

		html = '';
		for (let i = 0; i < starObj.full; i++) {
			html += "<i class='fa fa-star blue' aria-hidden='true'></i>";
		}

		for (let i = 0; i < starObj.half; i++) {
			html += "<i class='fa fa-star-half-o blue' aria-hidden='true'></i>";
		}

		for (let i = 0; i < starObj.empty; i++) {
			html += "<i class='fa fa-star-o blue' aria-hidden='true'></i>";
		}

		return html;

	}
}
