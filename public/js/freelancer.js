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
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});
					let data = {
						freelancer: res
					};

					dust.renderSource(html, data, function(err, out) {
						MAIN_JS.innerHTML = out;
						FREELANCER.renderReview(idFreelancer);
					});
				});
			}
		});
	},

	renderReview: function(idFreelancer) {
		doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {

			$.get("/html/review.html", function(reviewHtml) {

				for (res of result) {
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});
				}

				dust.renderSource(reviewHtml, result, function(err, out) {
					document.getElementById('cardReviews').innerHTML = out;
				});
			});

		});
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
