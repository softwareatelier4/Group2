const FAVORITE = {

	name: 'favorite',
	init: function() {
		FAVORITE.displayFavorite();
		FAVORITE.flag = 0;
		SEARCH.searchHeader();
		SEARCH.addon_init();
		SORTING_OPTIONS.style.visibility = 'hidden';
		MAIN_JS.innerHTML = "";
		$('#emergency-btn').hide();
		if (FAVORITE.flag) FAVORITE.displayFavorite();
		console.log('favorite init');
	},

	displayFavorite: function() {
		isLogged(function(user) {
			if (user.result) {
				doJSONRequest("GET", "/api/freelancer/userfavorites/" + user.result._id + "?lat=" + userPosition.latitude + "&" + "lng=" + userPosition.longitude, null, null, function(result) {
					let favorites = result.favorites;
					$.get("/html/searchCard.html", function(card) {
						$(MAIN_JS).innerHTML = "";
						for (let f of favorites) {
							doJSONRequest("GET", "/api/freelancer/" + f.id, null, null, function(res) {
								res.score = FREELANCER.getHtmlRankStar({
									full: res.score,
									empty: 5 - res.score
								});
								let data = {
									freelancer: {
										id: res._id,
										name: res.firstName + " " + res.lastName,
										score: res.score,
										price: res.price,
										tags: res.tags,
										photo: res.profilePhoto,
										distance: f.distance + " km"
									}
								}
								dust.renderSource(card, data, function(err, out) {
									$(MAIN_JS).append(out);
									$('#' + data.freelancer.id).click(function() {
										window.location.href = '/#freelancer=' + data.freelancer.id;
									});
								});
							});
						}
					});
				});
			}
		});
	},

	remover: function() {

	}
}
