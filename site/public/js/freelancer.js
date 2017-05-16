var dropZoneId = "drop-zone";
var buttonId = "clickHere";
var mouseOverClass = "mouse-over";
var dropZone;
var inputFile;
var finalFiles = {};



const FREELANCER = {

	name: 'freelancer',

	/**
	 * Set up the freelancer
	 * @return {void}
	 */
	init: function() {
		console.log('Freelancer - initialization');

		SEARCH.searchHeader();
		SEARCH.addon_init();

		let main = document.getElementById('main');
		main.style.display = "inherit";
		main.style.backgroundColor = "rgb(231, 231, 231)";

		SORTING_OPTIONS.style.visibility = 'hidden';

		FREELANCER.renderProfile();
	},

	remover: function() {
		SEARCH.remover();
		$('#form-freelancer-claim').off();
	},

	/**
	 * Render the profile of freelancer
	 * @return {void}
	 */

	renderProfile: function() {
		var url = window.location.href;
		var idFreelancer = url.split('=')[1];

		doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(res) {
			let owner = res.ownerId;
			if (res.error) {
				console.log("error");
			} else {
				$.get("/html/freelancer.html", function(html) {
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});

					//display photos of work, if more than 9, display only in the lightbox
					res.photosThumbnail = [];
					for (var i in res.photos) {
						if (i == 9) {
							break;
						}

						res.photosThumbnail.push(res.photos[i]);
					}
					if (i == 9) {
						res.photos = res.photos.splice(i, res.photos.length);
					} else {
						res.photos = [];
					}
					let data = {
						freelancer: res
					};

					dust.renderSource(html, data, function(err, out) {
						MAIN_JS.innerHTML = out;
						$('#verified-sign').tooltip();
						$('#emergency-sign').tooltip();
						$('#disabled-emergency-sign').tooltip();

						FREELANCER.uploadImageZone();

						FREELANCER.renderReview(idFreelancer);
					});
					isLogged(function(ress) {
						userId = ress.result;
						doJSONRequest("GET", "/api/claimrequest", null, null, function(response) {
							let hasReqPending = false;
							let userHasFreelancer = false;
							if (userId.freeLancerId != undefined) {
								userHasFreelancer = true;
							}
							for (let r of response) {
								if (r.user._id === userId._id && r.freelancer._id === idFreelancer && r.status === 'Pending') {
									hasReqPending = true;
								}
							}
							if (owner === undefined && userId !== false && hasReqPending === false && userHasFreelancer === false) {
								$(document.getElementById("claim-button")).show();
							}
							if (hasReqPending === true) {
								$(document.getElementById("pending-claim-button")).show();
							}
							if (owner && owner._id === userId._id) {
								$(document.getElementById("modify-button")).show();
							}
						})
					});
				});
			}
		});
	},


	/**
	 * Render reviews of a freelancer
	 * @param {idFreelancer} - id of the Freelancer
	 * @return {void}
	 */
	renderReview: function(idFreelancer) {
		doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {
			$.get("/html/review.html", function(reviewHtml) {

				for (res of result) {
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});
				}

				isLogged(function(loginRes) {
					loginRes = loginRes.result;
					if (loginRes && loginRes.freeLancerId == idFreelancer) {
						// the user has the current profile
						result.ableReply = true;

						for (res of result) {
							res.ableReply = true;
						}
					}

					dust.renderSource(reviewHtml, result, function(err, out) {
						document.getElementById('cardReviews').innerHTML = out;
						const replyNum = $('.reply button[name=freelancer-reply-edit]').length;

						for (let i = 0; i < replyNum; i++) {
							$('.reply button[name=freelancer-reply-edit]')[i].addEventListener('click', FREELANCER.editReview);
							$('.reply button[name=freelancer-reply-save]')[i].addEventListener('click', FREELANCER.saveReview);
							$('.reply button[name=freelancer-reply-delete]')[i].addEventListener('click', FREELANCER.deleteReview);
							$('.reply button[name=freelancer-reply-eraser]')[i].addEventListener('click', FREELANCER.eraserReview);
							$('.reply button[name=freelancer-reply-times]')[i].addEventListener('click', FREELANCER.timesReview);
							$('.reply button[name=freelancer-reply-delete-no]')[i].addEventListener('click', FREELANCER.deleteConfirm);
							$('.reply button[name=freelancer-reply-delete-yes]')[i].addEventListener('click', FREELANCER.deleteConfirm);
							const replyButton = $('button[name=freelancer-reply]')[i];
							if (replyButton)
								replyButton.addEventListener('click', FREELANCER.showReplyReview);
						}
					});
				})
			});
		});

	},

	editReview: function(e) {
		const cardBlock = this.parentNode.parentNode.parentNode;
		const textArea = cardBlock.getElementsByTagName('textarea')[0];
		const text = cardBlock.getElementsByTagName('p')[0];
		const editBtn = cardBlock.querySelector('button[name=freelancer-reply-edit]');
		const saveBtn = cardBlock.querySelector('button[name=freelancer-reply-save]');
		const deleteBtn = cardBlock.querySelector('button[name=freelancer-reply-delete]');
		const eraserBtn = cardBlock.querySelector('button[name=freelancer-reply-eraser]');
		const timesBtn = cardBlock.querySelector('button[name=freelancer-reply-times]');

		$(textArea).val(text.innerHTML)
		$(text).slideUp(100);
		$(textArea).slideDown(400);
		$(textArea).focus();

		$(editBtn).hide();
		$(saveBtn).show();
		$(eraserBtn).show();
		$(timesBtn).show();
	},

	saveReview: function(e) {
		const cardBlock = this.parentNode.parentNode.parentNode;
		const textArea = cardBlock.getElementsByTagName('textarea')[0];
		const text = cardBlock.getElementsByTagName('p')[0];
		const reviewId = cardBlock.parentNode.parentNode.getElementsByTagName('form')[0].name;
		const data = {
			review: textArea.value
		};
		doJSONRequest("POST", "/api/review/" + reviewId, null, data, function(result) {
			text.innerHTML = $(textArea).val();
			FREELANCER.timesReview(e);
		});
	},

	eraserReview: function(w) {
		const cardBlock = this.parentNode.parentNode.parentNode;
		const textArea = cardBlock.getElementsByTagName('textarea')[0];
		const text = cardBlock.getElementsByTagName('p')[0];

		$(textArea).val(text.innerHTML);
	},

	timesReview: function(e) {
		const cardBlock = e.target.parentNode.parentNode.parentNode;
		const textArea = cardBlock.getElementsByTagName('textarea')[0];
		const text = cardBlock.getElementsByTagName('p')[0];
		const editBtn = cardBlock.querySelector('button[name=freelancer-reply-edit]');
		const saveBtn = cardBlock.querySelector('button[name=freelancer-reply-save]');
		const eraserBtn = cardBlock.querySelector('button[name=freelancer-reply-eraser]');
		const timesBtn = cardBlock.querySelector('button[name=freelancer-reply-times]');
		const confirmYesBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-yes]');
		const confirmNoBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-no]');

		$(text).slideDown(400);
		$(textArea).slideUp(100);
		$(saveBtn).hide();
		$(editBtn).show();
		$(eraserBtn).hide();
		$(timesBtn).hide();
		$(confirmYesBtn).hide();
		$(confirmNoBtn).hide();
	},

	deleteReview: function(e) {
		const cardBlock = e.target.parentNode.parentNode.parentNode;
		const confirmYesBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-yes]');
		const confirmNoBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-no]');


		$(confirmYesBtn).show();
		$(confirmNoBtn).show();
	},

	deleteConfirm: function(e) {

		if (this.classList.contains('delete-yes')) {
			// delete the reply
			const cardBlock = this.parentNode.parentNode.parentNode;
			const reviewBox = this.parentNode.parentNode.parentNode;
			const replyBtn = reviewBox.parentNode.parentNode.querySelector('button[name=freelancer-reply]');
			const textArea = cardBlock.getElementsByTagName('textarea')[0];
			const text = cardBlock.getElementsByTagName('p')[0];
			const reviewId = cardBlock.parentNode.parentNode.getElementsByTagName('form')[0].name;

			const data = {
				review: ''
			};
			doJSONRequest("POST", "/api/review/" + reviewId, null, data, function(result) {
				FREELANCER.timesReview(e);
				$(reviewBox).slideUp(500);
				$(replyBtn).show();
				$(textArea).val('');
				text.innerHTML = '';
			});

		} else {
			// DO NOT delete the reply
			const cardBlock = this.parentNode.parentNode.parentNode;
			const confirmYesBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-yes]');
			const confirmNoBtn = cardBlock.querySelector('button[name=freelancer-reply-delete-no]');

			$(confirmYesBtn).hide();
			$(confirmNoBtn).hide();
		}

	},
	/**
	 * Create html code for show the rank of a single review
	 * @param {Object} - starObj = {full, half, empty}
	 * @return {string} - return string of html code
	 */

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

	/**
	 * Show button and form for add a new review's reply
	 * @param {event} - event
	 * @return {void}
	 */
	showReplyReview: function(e) {
		const form = e.target.parentNode.getElementsByTagName('form')[0];
		const textArea = form.getElementsByTagName('textarea')[0];
		const submitButton = form.getElementsByTagName('button')[0];

		$(e.target).fadeOut(100);
		$(form).slideDown(400);
		$(textArea).focus();


		submitButton.addEventListener('click', FREELANCER.senderReplyReview);
	},

	/**
	 * Abilitate button for send the reply
	 * @param {event} - event
	 * @return {void}
	 */
	senderReplyReview: function(e) {
		e.preventDefault();

		const form = e.target.parentNode;
		const reply = form.parentNode.getElementsByClassName('reply')[0];
		const cardBlock = reply.getElementsByClassName('card-block')[0];
		const reviewId = e.target.parentNode.name;
		const textArea = e.target.parentNode.getElementsByTagName('textarea')[0];
		const data = {
			review: textArea.value
		};

		doJSONRequest("POST", "/api/review/" + reviewId, null, data, function(result) {
			$(form).slideUp(400);
			$(cardBlock).slideDown(400);
			reply.getElementsByTagName('p')[0].innerHTML = textArea.value;
		});
	},

	sendClaimingRequest: function(e) {
		e.preventDefault();
		let idfrlc = window.location.href.split("=")[1];
		// console.log(idfrlc);
		let data, xhr;

		let descriptionDom = document.getElementById('modal-descriptionClaim');

		isLogged(function(res) {
			let userId = res.result._id;
			let freelancerId = idfrlc;
			let description = descriptionDom.value;

			data = new FormData();
			data.append('file', $('#uploadPictureClaim')[0].files[0]);
			data.append('userid', userId);
			data.append('freelancerid', freelancerId);
			data.append('description', description);

			xhr = new XMLHttpRequest();

			xhr.open('POST', '/api/claimrequest/', true);
			xhr.onreadystatechange = function(response) {
				console.log(response);
			};
			xhr.send(data);

			location.reload();
		});
	},
	checkData: function() {
		let description = document.getElementById('modal-descriptionClaim').value;
		let photo = document.getElementById('uploadPictureClaim').value;
		document.getElementById("modal-photos-label").className = '';
		document.getElementById("modal-photos-label").innerHTML = "Please, upload your identity card.";
		document.getElementById("modal-description-label").className = '';
		document.getElementById("modal-description-label").innerHTML = "Description";
		if (photo === "") {
			document.getElementById("modal-photos-label").className = 'error-red';
			document.getElementById("modal-photos-label").innerHTML = "You need to upload your identity card!";
		} else if (description === "") {
			document.getElementById("modal-description-label").className = 'error-red';
			document.getElementById("modal-description-label").innerHTML = "Please, write a request.";
		} else {
			document.getElementById("form-freelancer-claim").submit();
		}


	},

	uploadImageZone: function() {
		dropZone = $("#" + dropZoneId);
		inputFile = dropZone.find("input");


		if (window.File && window.FileList && window.FileReader) {
			$("#gallery-upload").on("change", function(e) {
				var files = e.target.files,
					filesLength = files.length;
				for (var i = 0; i < filesLength; i++) {
					var f = files[i]
					var fileReader = new FileReader();
					fileReader.onload = (function(e) {
						var file = e.target;
						$("<span class=\"pip\">" +
							"<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
							"<br/><span class=\"remove\">Remove image</span>" +
							"</span>").insertAfter("#gallery-upload");
						$(".remove").click(function() {
							$(this).parent(".pip").remove();
						});

					});
					fileReader.readAsDataURL(f);
				}
			});
		} else {
			alert("Your browser doesn't support to File API")
		}


		var ooleft = dropZone.offset().left;
		var ooright = dropZone.outerWidth() + ooleft;
		var ootop = dropZone.offset().top;
		var oobottom = dropZone.outerHeight() + ootop;

		document.getElementById(dropZoneId).addEventListener("dragover", function(e) {
			e.preventDefault();
			e.stopPropagation();
			dropZone.addClass(mouseOverClass);
			var x = e.pageX;
			var y = e.pageY;

			if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
				inputFile.offset({
					top: y - 15,
					left: x - 100
				});
			} else {
				inputFile.offset({
					top: -400,
					left: -400
				});
			}

		}, true);

		if (buttonId != "") {
			var clickZone = $("#" + buttonId);

			var oleft = clickZone.offset().left;
			var oright = clickZone.outerWidth() + oleft;
			var otop = clickZone.offset().top;
			var obottom = clickZone.outerHeight() + otop;

			$("#" + buttonId).mousemove(function(e) {
				var x = e.pageX;
				var y = e.pageY;
				if (!(x < oleft || x > oright || y < otop || y > obottom)) {
					inputFile.offset({
						top: y - 15,
						left: x - 160
					});
				} else {
					inputFile.offset({
						top: -400,
						left: -400
					});
				}
			});
		}

		document.getElementById(dropZoneId).addEventListener("drop", function(e) {
			$("#" + dropZoneId).removeClass(mouseOverClass);
		}, true);


		inputFile.on('change', function(e) {
			finalFiles = {};
			$('#filename').html("");
			var fileNum = this.files.length,
				initial = 0,
				counter = 0;

			$.each(this.files, function(idx, elm) {
				finalFiles[idx] = elm;
			});

			for (initial; initial < fileNum; initial++) {
				counter = counter + 1;
				$('#filename').append('<div id="file_' + initial + '"><span class="fa-stack fa-lg"><i class="fa fa-file fa-stack-1x "></i><strong class="fa-stack-1x" style="color:#FFF; font-size:12px; margin-top:2px;">' + counter + '</strong></span> ' + this.files[initial].name + '&nbsp;&nbsp;<span class="fa fa-times-circle fa-lg closeBtn" onclick="removeLine(this)" title="remove"></span></div>');
			}
		});
	},

	writeReviewHoverStar: function(e, number) {

		for (let i = 1; i <= 5; i++) {
			$('#star' + i).removeClass('fa-star').removeClass('fa-star-o');
			if (i <= number) {
				$('#star' + i).addClass('fa-star');
			} else {
				$('#star' + i).addClass('fa-star-o');
			}
		}

	},

	writeReviewClickStar: function(e, number) {
		for (let i = 1; i <= 5; i++) {
			$('#star' + i).removeClass('fa-star').removeClass('fa-star-o');
			if (i <= number) {
				$('#star' + i).addClass('fa-star');
			} else {
				$('#star' + i).addClass('fa-star-o');
			}
		}
	},

	writeReviewSubmit: function(e) {
		e.preventDefault();

		let form = e.target;
		$('#writeReviewError').remove();
		const numberStar = form.getElementsByClassName('fa-star').length;

		const idFreelancer = window.location.href.split("=")[1];

		if (numberStar <= 0) {
			// error
			const error = `<div id="writeReviewError" style="margin-top: 10px" class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Please, select a score.
</div>`;

			$(form).before(error);
		} else {

			isLogged(function(user) {
				user = user.result;
				if (user) {
					console.log(user);
					//if ok, do an ajax request
					data = new FormData();

					data.append('title', $("#new-review-title").val());
					data.append('description', $("#new-review-description").val());
					data.append('score', numberStar);
					data.append('user', user._id);

					for (let i = 0; i < Object.keys(finalFiles).length; i++) {
						data.append('file' + i + 1, finalFiles[i]);
					}

					let request = new XMLHttpRequest();

					request.onreadystatechange = function() {
						//correctly handle the errors based on the HTTP status returned by the called API
						if (request.readyState == 4 && request.status == 202) {
							let newReview = JSON.parse(request.responseText);

							console.log(newReview);

							$.get("/html/review.html", function(reviewHtml) {

								newReview.user = user;

								newReview.score = FREELANCER.getHtmlRankStar({
									full: newReview.score,
									empty: 5 - newReview.score
								});
								dust.renderSource(reviewHtml, [newReview], function(err, out) {
									$('#cardReviews').append(out);
									$('#writeReviews').slideUp(800);
								})
							});
						}
					}

					request.open("PUT", "/api/review/" + idFreelancer);
					request.send(data);
				}
			})
		}
	}
}


function removeLine(obj) {
	inputFile.val('');
	var jqObj = $(obj);
	var container = jqObj.closest('div');
	var index = container.attr("id").split('_')[1];
	container.remove();

	delete finalFiles[index];
	// console.log(finalFiles);
}
