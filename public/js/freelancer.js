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

					let freelancerReplayButtons = document.getElementsByName('freelacer-replay');
					for (let freelancerReplayButton of freelancerReplayButtons) {
						freelancerReplayButton.addEventListener('click', FREELANCER.showReplayReview);
					}
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

	},

	showReplayReview: function(e) {
		const form = e.target.parentNode.getElementsByTagName('form')[0];
		const submitButton = form.getElementsByTagName('button')[0];

		$(e.target).fadeOut(100);
		$(form).fadeIn(400);

		submitButton.addEventListener('click', FREELANCER.senderReplayReview);
	},

	senderReplayReview: function(e) {
		e.preventDefault();

		const form = e.target.parentNode;
		const replay = form.parentNode.getElementsByClassName('replay')[0];
		const cardBlock = replay.getElementsByClassName('card-block')[0];
		const reviewId = e.target.parentNode.name;
		const textArea = e.target.parentNode.getElementsByTagName('textarea')[0];
		const data = {
			review: textArea.value
		};

		doJSONRequest("POST", "/api/review/" + reviewId, null, data, function(result) {
			$(form).fadeOut(400);
			$(cardBlock).fadeIn(400);
			replay.getElementsByTagName('p')[0].innerHTML = textArea.value;
		});

	}
}
