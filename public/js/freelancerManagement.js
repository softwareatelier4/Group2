const FREELANCERMANAGEMENT = {
    data: null,
    idFreelancer : null,
    tagsTemp : null,
    name: 'FREELANCERMANAGEMENT',
    addedTags : [],
    getFreelancerInfo: function() {

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
                    
                    console.log(data.freelancer.tags);
                    $("#modal-firstName").val(data.freelancer.firstName);
                    $("#modal-lastName").val(data.freelancer.lastName);
                    $("#modal-workName").val(data.freelancer.workName);
                    $("#modal-email").val(data.freelancer.email);
                    $("#modal-phone").val(data.freelancer.phone);
                    $("#modal-city").val(data.freelancer.address.city);
                    $("#modal-street").val(data.freelancer.address.road);
                    $("#modal-zip").val(data.freelancer.address.cap);
                    $("#modal-number").val(data.freelancer.address.number);
                    $("#modal-description").val(data.freelancer.description);
                    $("#modal-price").val(data.freelancer.price);

                    tagsTemp = [];

                    if(data.freelancer.tags != null){
                        tagsTemp = data.freelancer.tags.map(function(el) {
                            return el['name'];
                        });
                    }


					// var $tags = $('#modal-tags').selectize({
					// 	delimiter: ',',
					// 	persist: false,
					// 	create: true
					// });

					// var selectize_tags = $("#modal-tags")[0].selectize
                    let tagsList = document.getElementById('tags-list');
                    
					for (let i = 0; i < tagsTemp.length; i++) {
                        let badge = `<span class="badge badge-primary">`+ tagsTemp[i] +`  <span style="cursor: pointer;" onclick="FREELANCERMANAGEMENT.removeTag(this)" data-tag="`+ tagsTemp[i] +`" aria-hidden="true">&times;</span></span>  `;
						FREELANCERMANAGEMENT.addedTags.push(tagsTemp[i]);
                        tagsList.innerHTML += badge;
                    }
					// 	selectize_tags.addItem(tagsTemp[i]);
					// }
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
        // console.log(patt.test(document.getElementById("modal-firstName").value));


        if(!pattStrings.test(document.getElementById("modal-firstName").value)){
            flag = false;
            document.getElementById("modal-firstName-label").className = 'error-red';
            document.getElementById("modal-firstName-label").innerHTML = "Firstname can only contain letters(a-z,A-Z) and spaces";
        }
        else if(pattStrings.test(document.getElementById("modal-firstName").value) &&
           document.getElementById("modal-firstName-label").className == 'error-red'){
            document.getElementById("modal-firstName-label").className = 'error-green';
            document.getElementById("modal-firstName-label").innerHTML = "Firstname input was corrected";

        }

        if(!pattStrings.test(document.getElementById("modal-lastName").value)){
            flag = false;
            document.getElementById("modal-lastName-label").className = 'error-red';
            document.getElementById("modal-lastName-label").innerHTML = "Lastname can only contain letters(a-z,A-Z) and spaces";
        }
        else if(pattStrings.test(document.getElementById("modal-lastName").value) &&
           document.getElementById("modal-lastName-label").className == 'error-red'){
            document.getElementById("modal-lastName-label").className = 'error-green';
            document.getElementById("modal-lastName-label").innerHTML = "Lastname input was corrected";

        }

        if(!pattStrings.test(document.getElementById("modal-workName").value)){
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

        if(!pattStrings.test(document.getElementById("modal-city").value)){
            flag = false;
            document.getElementById("modal-city-label").className = 'error-red';
            document.getElementById("modal-city-label").innerHTML = "City can only contain letters(a-z,A-Z) and spaces";
        }

        else if(pattStrings.test(document.getElementById("modal-city").value) &&
           document.getElementById("modal-city-label").className == 'error-red'){
            document.getElementById("modal-city-label").className = 'error-green';
            document.getElementById("modal-city-label").innerHTML = "City input was corrected";

        }

        if(!pattStrings.test(document.getElementById("modal-street").value)){
            flag = false;
            document.getElementById("modal-street-label").className = 'error-red';
            document.getElementById("modal-street-label").innerHTML = "Street can only contain letters(a-z,A-Z) and spaces";
        }

        else if(pattStrings.test(document.getElementById("modal-street").value) &&
           document.getElementById("modal-street-label").className == 'error-red'){
            document.getElementById("modal-street-label").className = 'error-green';
            document.getElementById("modal-street-label").innerHTML = "Street input was corrected";

        }

        if(!pattNumbers.test(document.getElementById("modal-number").value)){
            flag = false;
            document.getElementById("modal-number-label").className = 'error-red';
            document.getElementById("modal-number-label").innerHTML = "Number can only contain letters(a-z,A-Z) and spaces";
        }

        else if(pattNumbers.test(document.getElementById("modal-number").value) &&
           document.getElementById("modal-number-label").className == 'error-red'){
            document.getElementById("modal-number-label").className = 'error-green';
            document.getElementById("modal-number-label").innerHTML = "Number input was corrected";

        }

        if(!pattNumbers.test(document.getElementById("modal-zip").value)){
            flag = false;
            document.getElementById("modal-zip-label").className = 'error-red';
            document.getElementById("modal-zip-label").innerHTML = "Zip code can only contain letters(a-z,A-Z) and spaces";
        }

        else if(pattNumbers.test(document.getElementById("modal-zip").value) &&
           document.getElementById("modal-zip-label").className == 'error-red'){
            document.getElementById("modal-zip-label").className = 'error-green';
            document.getElementById("modal-zip-label").innerHTML = "Zip code input was corrected";

        }

        if(!pattEmail.test(document.getElementById("modal-email").value)){
            flag = false;
            document.getElementById("modal-email-label").className = 'error-red';
            document.getElementById("modal-email-label").innerHTML = "Email must be of form name@mail.dom";
        }

        else if(pattEmail.test(document.getElementById("modal-email").value) &&
           document.getElementById("modal-email-label").className == 'error-red'){
            document.getElementById("modal-email-label").className = 'error-green';
            document.getElementById("modal-email-label").innerHTML = "Email code input was corrected";

        }

        if(flag){
            document.getElementById("form-freelancer-management").submit();
        }

    },

    submitFreelancer: function(){
        let id = idFreelancer;
        let firstName = document.getElementById('modal-firstName');
		let lastName = document.getElementById('modal-lastName');
		let workName = document.getElementById('modal-workName');
		let phoneNumber = document.getElementById('modal-phone');
		let city = document.getElementById('modal-city');
		let street = document.getElementById('modal-street');
		let number = document.getElementById('modal-number');
		let zip = document.getElementById('modal-zip');
		let mail = document.getElementById('modal-email');
		let profilePic = data.freelancer.profilePhoto;
        let photos = data.freelancer.photos;
		let description = document.getElementById('modal-description');
        let price = document.getElementById('modal-price');

        //console.log(document.getElementById("modal-tags").value);
        // let temp_tags = document.getElementById("modal-tags").value.split(",");
        // let tags = [];
        // for(let j = 0; j<temp_tags.length; j++){
        //     tags.push(temp_tags[j]);  
        // }
        //console.log(tags);
        let freelancer_update = {
			'firstName' : firstName.value,
			'lastName' : lastName.value,
			'workName' : workName.value,
			'email' : mail.value,
			'phone' : phoneNumber.value,
			'description' : description.value,
			'address' : {
				'city' : city.value,
				'road' : street.value,
				'number' : number.value,
				'cap' : zip.value,
				'lat' : undefined,
				'long': undefined
			},
            'photos' : photos,
            'profilePhoto' : profilePic,
			//'tags' : data.freelancer.tags,
            'tags' : FREELANCERMANAGEMENT.addedTags,
            'score' : null,
            'price' : price.value
		};

        doJSONRequest("GET", "https://maps.googleapis.com/maps/api/geocode/json?address="+freelancer_update.address.city+"+"+freelancer_update.address.street+"+"+freelancer_update.address.number,null,null,function(res){
			if(res.status == "OK"){
				freelancer_update.address.lat = res.results[0].geometry.location.lat;
				freelancer_update.address.long = res.results[0].geometry.location.lng;
			}

            doJSONRequest("PUT", "/api/freelancer/"+id, null, freelancer_update, function(res) {
                location.reload();
		    });

		});


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
			let badge = `<span class="badge badge-primary">`+ tagText.value +`  <span style="cursor: pointer;" onclick="FREELANCERMANAGEMENT.removeTag(this)" data-tag="`+ tagText.value +`" aria-hidden="true">&times;</span></span>  `;
			FREELANCERMANAGEMENT.addedTags.push(tagText.value);
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