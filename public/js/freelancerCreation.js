const FREELANCERCREATION = {

	name: 'freelancerCreation',

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
		doJSONRequest("POST", "/api/freelancer/create/freelancer", null, freelancer, function(res) {

		});
	},

	result : {},
	addedTags : [],

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
			// doJSONRequest("POST", "/api/tag/", null, { 'name' : tagText.value }, function(res) {
			// 	let badge = `<span class="badge badge-primary">`+ res.name +`  <span style="cursor: pointer;" onclick="FREELANCERCREATION.removeTag(this)" data-id="`+ res._id +`" aria-hidden="true">&times;</span></span>  `;
			// 	FREELANCERCREATION.addedTags.push(res._id);
			// 	tagText.value = '';
			// 	tagsList.innerHTML += badge;
			// });
				let badge = `<span class="badge badge-primary">`+ tagText.value +`  <span style="cursor: pointer;" onclick="FREELANCERCREATION.removeTag(this)" data-tag="`+ tagText.value +`" aria-hidden="true">&times;</span></span>  `;
				FREELANCERCREATION.addedTags.push(tagText.value);
				tagText.value = '';
				tagsList.innerHTML += badge;
		}
	},

	removeTag: function(span) {
		let tagName = span.dataset.tag;
		let index = FREELANCERCREATION.addedTags.indexOf(tagName);
		if(index > - 1) {
			FREELANCERCREATION.addedTags.splice(index, 1);
		}
		span.parentNode.parentNode.removeChild(span.parentNode);
	}

}
