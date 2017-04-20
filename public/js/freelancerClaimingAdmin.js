/*jshint esversion: 6 */
const FREELANCERCLAIMADMIN = {
	name: 'FREELANCERCLAIMADMIN',

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
	acceptRequest: function(e) {
		let claimId = e.target.value;
		doJSONRequest("POST", "/api/claimrequest/" + claimId, null, {
			status: "Accepted"
		}, function(res) {
			location.reload(true);
		});

	},
	refuseRequest: function(e) {
		let claimId = e.target.value;
		doJSONRequest("POST", "/api/claimrequest/" + claimId, null, {
			status: "Refused"
		}, function(res) {
			location.reload(true);
		});

	}
}


$(document).ready(function() {
	FREELANCERCLAIMADMIN.renderTables();
});
