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
					req.pending = true;
					req.accepted = false;
					req.refused = false;
					pendingRequests.push(req);
				} else if (req.status == 'Accepted') {
					req.pending = false;
					req.accepted = true;
					req.refused = false;
					acceptedRequests.push(req);
				} else if (req.status == 'Refused') {
					req.pending = false;
					req.accepted = false;
					req.refused = true;
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
		let row = document.getElementById(claimId).childNodes[2];
		let flId = row.getElementsByTagName('a')[0].href.split('=')[1];
		doJSONRequest("PUT", "/api/claimrequest/" + claimId, null, {
			status: "Accepted"
		}, function(res) {
			doJSONRequest("GET", "/api/claimrequest/", null, null, function(res) {
				for (let req of res) {
					if (req.freelancer._id.toString() == flId && req._id != claimId && (req.user._id).toString() != user) {
						doJSONRequest("PUT", "/api/claimrequest/" + req._id, null, {
							status: "Refused"
						}, function(res) {});
					}
				}
				location.reload(true);
			});
		});

	},
	refuseRequest: function(e) {
		let claimId = e.target.value;
		doJSONRequest("PUT", "/api/claimrequest/" + claimId, null, {
			status: "Refused"
		}, function(res) {
			location.reload(true);
		});

	}
}


$(document).ready(function() {
	FREELANCERCLAIMADMIN.renderTables();
});
