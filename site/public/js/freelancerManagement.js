var city = "";
var stree_number = "";
var road = "";
var postal_code = "";
var lat = 0;
var lng = 0;

var deletedFiles = [];

const FREELANCERMANAGEMENT = {
	data: null,
	idFreelancer : null,
	tagsTemp : null,
	name: 'FREELANCERMANAGEMENT',
	addedTags : [],
	getFreelancerInfo: function() {

		let tagText = document.getElementById('tags');
		let tagsList = document.getElementById('tags-list');

		tagText.value = '';
		tagsList.value = '';
		tagsList.innerHTML = '';
		tagText.innerHTML = '';
		FREELANCERMANAGEMENT.addedTags = [];

		document.getElementById('delete_gallery').innerHTML = "";
		$("#modify_position")
		.geocomplete()
		.bind("geocode:result", function(event, result) {
			city = FREELANCERMANAGEMENT.googleFindType(result.address_components, 'locality');
			stree_number = FREELANCERMANAGEMENT.googleFindType(result.address_components, 'street_number');
			road = FREELANCERMANAGEMENT.googleFindType(result.address_components, 'route');//postal_code
			postal_code = FREELANCERMANAGEMENT.googleFindType(result.address_components, 'postal_code');

			if (city) {
				city = city.long_name;
			} else {
				city = result.address_components[0].long_name;
			}

			if(stree_number){
				stree_number = stree_number.long_name;
			}

			if(road){
				road = road.long_name;
			}

			if(postal_code){
				postal_code = postal_code.long_name;
			}

			lat = result.geometry.location.lat();
			lng = result.geometry.location.lng();
		});

		var url = window.location.href;
		idFreelancer = url.split('=')[1];

		doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(res) {
			if (res.error) {
				console.log("error");
			} else {
				$.get("/html/freelancer.html", function(html) {
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});
					data = {
						freelancer: res
					};

					$("#modal-workName").val(data.freelancer.workName);
					$("#modal-phone").val(data.freelancer.phone);

					let pos = "";
					if(data.freelancer.address.road){
						pos += data.freelancer.address.road;
						road = data.freelancer.address.road;
					}

					if(data.freelancer.address.number){
						pos += " " + data.freelancer.address.number;
						stree_number = data.freelancer.address.number;
					}

					if(data.freelancer.address.city){
						if(data.freelancer.address.road){
							pos += ", "
						}
						pos += data.freelancer.address.city;
						city = data.freelancer.address.city;
						lat = data.freelancer.address.lat;
						lng = data.freelancer.address.long;
					}

					$("#modify_position").val(pos);

					simulate(document.getElementById('modify_position'), 'click');

					$("#modal-description").val(data.freelancer.description);
					$("#modal-price").val(data.freelancer.price);
					if(data.freelancer.emergency){
						$("#modal-emergency").prop("checked", true);
					}

					tagsTemp = [];

					if(data.freelancer.tags != null){
						tagsTemp = data.freelancer.tags.map(function(el) {
							return el['name'];
						});
					}

					//   console.log(data.freelancer.tags);

					let tagsList = document.getElementById('tags-list');

					for (let i = 0; i < tagsTemp.length; i++) {
						let badge = `<span class="badge badge-primary">`+ tagsTemp[i] +`  <span style="cursor: pointer;" onclick="FREELANCERMANAGEMENT.removeTag(this)" data-tag="`+ tagsTemp[i] +`" aria-hidden="true">&times;</span></span>  `;
						FREELANCERMANAGEMENT.addedTags.push(tagsTemp[i]);
						tagsList.innerHTML += badge;
					}

					let gallery = document.getElementById('delete_gallery');
					for(let i = 0; i < data.freelancer.photos.length; i++){
						let temp = '<div class="img-del" id = "'+data.freelancer.photos[i]+'"> <span class="close">&times;</span> <img height = "50px" src="'+data.freelancer.photos[i]+'" data-id="'+data.freelancer.photos[i]+'"></div>';
						gallery.innerHTML += temp;
					}
				});
			}
		});
	},

	checkData: function(){
		// console.log(document.getElementById("modal-firstName").value);
		var pattStrings = /^([A-Za-z_ _-_è_ü_é_ö_à_ä_á_']{3,15})+$/;
		var pattPhone = /^[0-9_+_ _(_)]*(?:\.\d{1,2})?$/;
		var pattNumbers = /^[0-9]*(?:\.\d{1,2})?$/;
		var pattEmail = /[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;

		let flag = true;

		if(!pattStrings.test(document.getElementById("modal-workName").value) && document.getElementById("modal-workName").value != ""){
			flag = false;
			document.getElementById("modal-workName-label").className = 'error-red';
			document.getElementById("modal-workName-label").innerHTML = "Workame can only contain letters(a-z,A-Z) and spaces";
		}

		else if(pattStrings.test(document.getElementById("modal-workName").value) &&
		document.getElementById("modal-workName-label").className == 'error-red'){
			document.getElementById("modal-workName-label").className = 'error-green';
			document.getElementById("modal-workName-label").innerHTML = "Workname input was corrected";

		}

		if(!pattPhone.test(document.getElementById("modal-phone").value)){
			flag = false;
			document.getElementById("modal-phone-label").className = 'error-red';
			document.getElementById("modal-phone-label").innerHTML = "Phone number can only contain numbers and '+'";
		}

		else if(pattPhone.test(document.getElementById("modal-phone").value) &&
		document.getElementById("modal-phone-label").className == 'error-red'){
			document.getElementById("modal-phone-label").className = 'error-green';
			document.getElementById("modal-phone-label").innerHTML = "Phone input was corrected";

		}

		if(flag){
			document.getElementById("form-freelancer-management").submit();
		}

	},

	submitFreelancer: function(){
		//  eventFire(document.getElementById('modify_position'), 'click');
		//  simulate(document.getElementById('modify_position'), 'click');
		let id = idFreelancer;
		let workName = document.getElementById('modal-workName');
		let phoneNumber = document.getElementById('modal-phone');

		// console.log(workName.value);
		let profilePic = data.freelancer.profilePhoto;
		let photos = data.freelancer.photos;

		let description = document.getElementById('modal-description');
		let price = document.getElementById('modal-price');
		let emergency = false;
		if(document.getElementById('modal-emergency').checked){
			emergency = true;
		}

		let freelancer_update = {
			'workName' : workName.value,
			'phone' : phoneNumber.value,
			'description' : description.value,
			'address' : {
				'city' : city,
				'road' : road,
				'number' : stree_number,
				'cap' : postal_code,
				'lat' : lat,
				'long': lng
			},
			'photos' : photos,
			'profilePhoto' : profilePic,
			'tags' : FREELANCERMANAGEMENT.addedTags,
			'score' : null,
			'price' : price.value,
			'emergency' : emergency
		};
		if(FREELANCERMANAGEMENT.addedTags.length > 0){
			doJSONRequest("PUT", "/api/freelancer/"+id, null, freelancer_update, function(res) {
				let data, xhr;

				data = new FormData();

				let title = [];

				if($('#profilePicture')[0].files[0] != null){
					data.append('file0', $('#profilePicture')[0].files[0]);
					data.append('profile_check', 'true');
				} else {
					data.append('profile_check', 'false');
				}

				let files = $("#modal-file-management")[0].files;

				for (let i = 1; i <= files.length; i++)
				{
					data.append('file' + i, files[i - 1]);
				}

				data.append('freelancerId', id);

				data.append('deletedFiles', deletedFiles);

				xhr = new XMLHttpRequest();

				xhr.open('PUT', '/api/freelancer/galleryModification/' + id, true);
				xhr.onreadystatechange = function(response) {
					// console.log(response);
				};
				xhr.send(data);

				location.reload();
				window.location.href ='/#freelancer=' + res._id;
				console.log(freelancer_update.address.lat);
			});
		} else {
			let tagerror = document.getElementById('tagerror');
			tagerror.style.display = "block";
		}

	},

	googleFindType: function(address, searchType) {
		for (let a of address) {
			let types = a.types;

			for (let type of types) {
				if (type == searchType)
				return a;
			}
		}
	},

	result : {},

	/**
	* Do the json request for hinting the tags
	*/
	tagHinter: function() {
		let tagText = document.getElementById('tags');
		let tagsList = document.getElementById('tags-list');
		let oldInput = tagText.value;
		tagText.value = tagText.value.replace(/[^A-Za-z]/g, '');
		if(tagText.value.length > 0 && oldInput == tagText.value && event.key != "Enter") {
			var availableTags = [];
			doJSONRequest("GET", "/api/tag/search/" + tagText.value, null, null, function(res) {
				FREELANCERMANAGEMENT.result = res;
				for(let tag of res) {
					availableTags = availableTags.concat([tag.name]);
				}
				$( "#tags" ).autocomplete({
					source: availableTags
				});
			});
		}
		if(tagText.value.length > 0 && event.key == "Enter" && !FREELANCERMANAGEMENT.addedTags.includes(tagText.value)){
			let badge = `<span class="badge badge-primary hint">`+ tagText.value +`  <span style="cursor: pointer;" onclick="FREELANCERMANAGEMENT.removeTag(this)" data-tag="`+ tagText.value +`" aria-hidden="true">&times;</span></span>  `;
			FREELANCERMANAGEMENT.addedTags.push(tagText.value);
			let tagerror = document.getElementById('tagerror');
			tagerror.style.display = "none";
			tagText.value = '';
			tagsList.innerHTML += badge;
		}
	},

	/**
	* Function called when clicking on the "x" of a tag
	*/
	removeTag: function(span) {
		let tagName = span.dataset.tag;
		let index = FREELANCERMANAGEMENT.addedTags.indexOf(tagName);
		if(index > - 1) {
			FREELANCERMANAGEMENT.addedTags.splice(index, 1);
		}
		span.parentNode.parentNode.removeChild(span.parentNode);
	}

}

function simulate(element, eventName)
{
	var options = extend(defaultOptions, arguments[2] || {});
	var oEvent, eventType = null;

	for (var name in eventMatchers)
	{
		if (eventMatchers[name].test(eventName)) { eventType = name; break; }
	}

	if (!eventType)
	throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

	if (document.createEvent)
	{
		oEvent = document.createEvent(eventType);
		if (eventType == 'HTMLEvents')
		{
			oEvent.initEvent(eventName, options.bubbles, options.cancelable);
		}
		else
		{
			oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
				options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
				options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
			}
			element.dispatchEvent(oEvent);
		}
		else
		{
			options.clientX = options.pointerX;
			options.clientY = options.pointerY;
			var evt = document.createEventObject();
			oEvent = extend(evt, options);
			element.fireEvent('on' + eventName, oEvent);
		}
		return element;
	}

	function extend(destination, source) {
		for (var property in source)
		destination[property] = source[property];
		return destination;
	}

	var eventMatchers = {
		'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
		'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
	}
	var defaultOptions = {
		pointerX: 0,
		pointerY: 0,
		button: 0,
		ctrlKey: false,
		altKey: false,
		shiftKey: false,
		metaKey: false,
		bubbles: true,
		cancelable: true
	}

	$(document).ready( function () {
		$(document).on('click', '.img-del .close', function(){
			let id = $(this).closest('.img-del').find('img').data('id');
			deletedFiles.push(id);
			let elem = document.getElementById(id);
			elem.parentNode.removeChild(elem);
		});

		$("#modify-button" ).click(function() {


			console.log("closed");
		});
	});
