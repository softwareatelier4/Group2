const FREELANCERCREATION = {

	name: 'freelancerCreation',

	/**
	* Create and send the freelancer trought the json request
	*/
	submitFreelancer: function() {
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let workName = document.getElementById('workName');
		let phoneNumber = document.getElementById('phone');
		let city = document.getElementById('city');
		let street = document.getElementById('street');
		let number = document.getElementById('number');
		let zip = document.getElementById('zip');
		let mail = document.getElementById('email');
		let profilePic = document.getElementById('profilePicture');
		let description = document.getElementById('description');
		let freelancer = {
			'firstName' : firstName.value,
			'lastName' : lastName.value,
			'workName' : workName.value,
			'email' : mail.value,
			'phone' : phoneNumber.value,
			'description' : description.value,
			'address' : {
				'city' : city.value,
				'street' : street.value,
				'number' : number.value,
				'cap' : zip.value,
				'lat' : 0,
				'long': 0

			},
			'tags' : FREELANCERCREATION.addedTags
		};
		// $("#position")
		// .geocomplete()
		// .bind("geocode:result", function(event, result) {
		// 	const city = result.address_components[0].long_name;
		//
		// 	const addressLen = result.address_components.length;
		// 	const state = result.address_components[addressLen - 1].long_name;
		//
		// 	const lat = result.geometry.location.lat();
		// 	const lng = result.geometry.location.lng();
		// 	SEARCH.setPosition('user', lat, lng, city, state);
		// });

		doJSONRequest("GET", "https://maps.googleapis.com/maps/api/geocode/json?address="+freelancer.address.city+"+"+freelancer.address.street+"+"+freelancer.address.number,null,null,function(res){
			if(res.status == "OK"){
				freelancer.address.lat = res.results[0].geometry.location.lat;
				freelancer.address.long = res.results[0].geometry.location.lng;
			}
			doJSONRequest("POST", "/api/freelancer/create/freelancer", null, freelancer, function(res) {
				if(!res.errors){
					window.location.href ='/#freelancer=' + res._id;
				}
			});
		});
	},

	result : {},
	addedTags : [],

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
				FREELANCERCREATION.result = res;
				for(let tag of res) {
					availableTags = availableTags.concat([tag.name]);
				}
				$( "#tags" ).autocomplete({
					source: availableTags
				});
			});
		}
		if(tagText.value.length > 0 && event.key == "Enter" && !FREELANCERCREATION.addedTags.includes(tagText.value)){
			let badge = `<span class="badge badge-primary">`+ tagText.value +`  <span style="cursor: pointer;" onclick="FREELANCERCREATION.removeTag(this)" data-tag="`+ tagText.value +`" aria-hidden="true">&times;</span></span>  `;
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
		if(index > - 1) {
			FREELANCERCREATION.addedTags.splice(index, 1);
		}
		span.parentNode.parentNode.removeChild(span.parentNode);
	}

}
