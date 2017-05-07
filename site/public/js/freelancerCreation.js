var dropZoneId = "drop-zone";
var buttonId = "clickHere";
var mouseOverClass = "mouse-over";
var dropZone = $("#" + dropZoneId);
var inputFile = dropZone.find("input");
var finalFiles = {};

var freelancerId = 0;


var city = undefined;
var stree_number = undefined;
var route = undefined;
var postal_code = undefined;
var lat = 0;
var lng = 0;

const FREELANCERCREATION = {

	name: 'freelancerCreation',

	/**
	 * Create and send the freelancer trought the json request
	 */
	submitFreelancer: function() {
		let firstName = document.getElementById('firstName-complex');
		let lastName = document.getElementById('lastName');
		let workName = document.getElementById('workName');
		let phoneNumber = document.getElementById('phone');
		let mail = document.getElementById('email');
		let profilePic = document.getElementById('profilePicture');
		let description = document.getElementById('description');
		let emergency = false;

		let title = [];

		if (document.getElementById('modal-emergency').checked) {
			emergency = true;
		}
		let freelancer = {
			'firstName': firstName.value,
			'lastName': lastName.value,
			'workName': workName.value,
			'email': mail.value,
			'phone': phoneNumber.value,
			'description': description.value,
			'address': {
				'city': city,
				'road': route,
				'number': stree_number,
				'cap': postal_code,
				'lat': lat,
				'long': lng

			},
			'emergency': emergency,
			'tags': FREELANCERCREATION.addedTags
		};

			doJSONRequest("POST", "/api/freelancer/create/freelancer", null, freelancer, function(res) {
				// console.log(freelancer);
				if (!res.errors) {
					// console.log(res.result._id)
					freelancerId = res._id;
					let data, xhr;

					// console.log(freelancerId);

					data = new FormData();

					let title = [];

					data.append('file0', $('#profilePicture')[0].files[0]);

					for (var i = 0; i < Object.keys(finalFiles).length; i++) {
						title.push(finalFiles[i].name);
						data.append('file' + i + 1, finalFiles[i]);
					}


					data.append('title', title);
					data.append('freelancerId', freelancerId);

					xhr = new XMLHttpRequest();

					xhr.open('PUT', '/api/freelancer/galleryUpload/' + freelancerId, true);
					xhr.onreadystatechange = function(response) {
						console.log(response);
					};
					xhr.send(data);

					let email2 = location.hash.split("=")[1];
					if (email2 != mail.value) {

						let verification = {
							'id': freelancerId,
							'work': workName.value
						};
						// console.log(mail.value);
						doJSONRequest("POST", "/api/freelancer/sendEmailFreelancer/" + mail.value, null, verification, function(res) {
							// if(!res.errors){
							// 	console.log("YEBOI");
							// }
							window.location.href = "http://127.0.0.1:3000/#freelancer="+freelancerId;
						});
					}
				} else {
					console.log("Error: " + res.errors[0]);
				}
			});

		/*
			Send later the photos to be added, profile photo and also gallery photos
		*/


	},

	result: {},
	addedTags: [],

	/**
	 * Do the json request for hinting the tags
	 */
	tagHinter: function() {
		let tagText = document.getElementById('tags');
		let tagsList = document.getElementById('tags-list');
		let oldInput = tagText.value;
		tagText.value = tagText.value.replace(/[^A-Za-z]/g, '');
		if (tagText.value.length > 0 && oldInput == tagText.value && event.key != "Enter") {
			var availableTags = [];
			doJSONRequest("GET", "/api/tag/search/" + tagText.value, null, null, function(res) {
				FREELANCERCREATION.result = res;
				for (let tag of res) {
					availableTags = availableTags.concat([tag.name]);
				}
				$("#tags").autocomplete({
					source: availableTags
				});
			});
		}
		if (tagText.value.length > 0 && event.key == "Enter" && !FREELANCERCREATION.addedTags.includes(tagText.value)) {
			let badge = `<span class="badge badge-primary">` + tagText.value + `  <span style="cursor: pointer;" onclick="FREELANCERCREATION.removeTag(this)" data-tag="` + tagText.value + `" aria-hidden="true">&times;</span></span>  `;
			FREELANCERCREATION.addedTags.push(tagText.value);
			tagText.value = '';
			tagsList.innerHTML += badge;
		}
	},

	/**
	 * Function called when clicking on the "x" of a tag
	 */
	removeTag: function(span) {
		let tagName = span.dataset.tag;
		let index = FREELANCERCREATION.addedTags.indexOf(tagName);
		if (index > -1) {
			FREELANCERCREATION.addedTags.splice(index, 1);
		}
		span.parentNode.parentNode.removeChild(span.parentNode);
	},

	googleFindType: function(address, searchType) {
		for (let a of address) {
			let types = a.types;

			for (let type of types) {
				if (type == searchType)
					return a;
			}
		}
	}

}

$(document).ready(function() {
	console.log($('#position'));
	$("#position")
		.geocomplete()
		.bind("geocode:result", function(event, result) {
			city = FREELANCERCREATION.googleFindType(result.address_components, 'locality');
			stree_number = FREELANCERCREATION.googleFindType(result.address_components, 'street_number');
			route = FREELANCERCREATION.googleFindType(result.address_components, 'route');//postal_code
			postal_code = FREELANCERCREATION.googleFindType(result.address_components, 'postal_code');

			if (city) {
				city = city.long_name;
			} else {
				city = result.address_components[0].long_name;
			}

			if(stree_number){
				stree_number = stree_number.long_name;
			}

			if(route){
				route = route.long_name;
			}

			if(postal_code){
				postal_code = postal_code.long_name;
			}

			lat = result.geometry.location.lat();
			lng = result.geometry.location.lng();
		});


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
});

$(function() {
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



})

function removeLine(obj) {
	inputFile.val('');
	var jqObj = $(obj);
	var container = jqObj.closest('div');
	var index = container.attr("id").split('_')[1];
	container.remove();

	delete finalFiles[index];
	// console.log(finalFiles);
}


/*******/
//position
