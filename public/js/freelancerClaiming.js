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
			let acceptedRequests = [];
			let refusedRequests = [];
			let pendingRequests = [];
			for (let req of res) {
				if (req.status == 'Pending') {
					req.check = true;
					pendingRequests.push(req);
				} else if (req.status == 'Accepted') {
					acceptedRequests.push(req);
				} else if (req.status == 'Refused') {
					refusedRequests.push(req);
				}
			}

			$.get("/html/claimRequestsTable.html", function(claimHtml) {
				dust.renderSource(claimHtml, {
					request: pendingRequests
				}, function(err, out) {
					document.getElementById('table-pending-req').innerHTML += out;
				});
				dust.renderSource(claimHtml, {
					request: acceptedRequests
				}, function(err, out) {
					document.getElementById('table-accepted-req').innerHTML += out;
				});
				dust.renderSource(claimHtml, {
					request: refusedRequests
				}, function(err, out) {
					document.getElementById('table-refused-req').innerHTML += out;
				});
			});
		});

	},
}


$(document).ready(function() {
	FREELANCERCLAIM.renderTables();
});
