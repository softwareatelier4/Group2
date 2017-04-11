const FREELANCERCLAIM = {
	name: 'FREELANCERCLAIM',

	claimProfile: function() {
		console.log("Hello, world!");
	},

	sendClaimingRequest: function() {
		let id = window.location.href.split('=')[1];
		let photos = [] // temp, need the upload function
		let description = document.getElementById('modal-descriptionClaim');
		console.log(description);


		let freelancer_claim = {
			'userId': 'b00000000000000000000000', //temp, need to take this from the login
			'freelancerId': id,
			'photos': photos,
			'description': description.value
		};

		doJSONRequest("PUT", "/api/claimrequest/", null, freelancer_claim, function(res) {
			location.reload();
		});
	},
	checkData: function() {

		if (false) {
			document.getElementById("modal-photos-label").className = 'error-red';
			document.getElementById("modal-photos-label").innerHTML = "You need to upload your identity card!";
		} else {
			document.getElementById("form-freelancer-claim").submit();
		}


	},
	renderTables: function() {
		doJSONRequest("GET", "/api/claimrequest/", null, null, function(res) {
			$.get("/html/claimRequestsView.html", function(claimHtml) {
				dust.renderSource(reviewHtml, result, function(err, out) {});
			});
		});
		// doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {
		//
		// 	$.get("/html/review.html", function(reviewHtml) {
		//
		// 		for (res of result) {
		// 			res.score = FREELANCER.getHtmlRankStar({
		// 				full: res.score,
		// 				empty: 5 - res.score
		// 			});
		// 		}
		// 		dust.renderSource(reviewHtml, result, function(err, out) {
		// 			document.getElementById('cardReviews').innerHTML = out;
		//
		// 			let freelancerReplyButtons = document.getElementsByName('freelancer-reply');
		// 			for (let freelancerReplyButton of freelancerReplyButtons) {
		// 				freelancerReplyButton.addEventListener('click', FREELANCER.showReplyReview);
		// 			}
		// 		});
		// 	});
		// });

	},
}
Listener('click', FREELANCER.showReplyReview);
}
});
});
});

},
}
