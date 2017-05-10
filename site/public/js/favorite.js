const FAVORITE = {

	name: 'favorite',

	init: function() {
		SEARCH.searchHeader();
		SEARCH.addon_init();
		SORTING_OPTIONS.style.visibility = 'hidden';
		MAIN_JS.innerHTML = "";
		$('#emergency-btn').hide();


		isLogged(function(user) {
			if(user.result){
				let favorites = user.result.favorites;
				console.log(favorites);
				$.get("/html/searchCard.html", function(card) {
					for(let f of favorites){
						doJSONRequest("GET", "/api/freelancer/" + f, null, null, function(res) {
							res.score = FREELANCER.getHtmlRankStar({
								full: res.score,
								empty: 5 - res.score
							});
							let data = {
								freelancer:{
									id: res._id,
									name: res.firstName + " " + res.lastName,
									score: res.score,
									price: res.price,
									tags: res.tags,
									photo: res.profilePhoto
								}
							}
							console.log(data);
							dust.renderSource(card, data, function(err, out) {
								$(MAIN_JS).append(out);
								$('#' + data.freelancer.id).click(function(){
									window.location.href = '/#freelancer=' + data.freelancer.id;
								})
							})
						});
					}
				});
			}
		});
		console.log('favorite init');
	},

	remover: function() {

	}
}
