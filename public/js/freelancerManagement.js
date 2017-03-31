$('#modal-tags').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});


const FREELANCERMANAGEMENT = {

	name: 'FREELANCERMANAGEMENT',

	getFreelancerInfo: function() {
        var url = window.location.href;
		var idFreelancer = url.split('=')[1];

		doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(res) {
			if (res.error) {
				console.log("error");
			} else {
				$.get("/html/freelancer.html", function(html) {
					res.score = FREELANCER.getHtmlRankStar({
						full: res.score,
						empty: 5 - res.score
					});
					let data = {
						freelancer: res
					};

                    console.log(data.freelancer);
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

					// dust.renderSource(html, data, function(err, out) {
					// 	MAIN_JS.innerHTML = out;
					// 	FREELANCER.renderReview(idFreelancer);
					// });
                    
				});
			}
		});
	},

    checkData: function(){
        document.getElementById("form-freelancer-management").submit();
    },

    submitFreelancer: function(){
        console.log("works");
        //PUT
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
			doJSONRequest("POST", "/api/tag/", null, { 'name' : tagText.value }, function(res) {
				let badge = `<span class="badge badge-primary">`+ res.name +`  <span style="cursor: pointer;" onclick="FREELANCERCREATION.removeTag(this)" data-id="`+ res._id +`" aria-hidden="true">&times;</span></span>  `;
				FREELANCERCREATION.addedTags.push(res._id);
				tagText.value = '';
				tagsList.innerHTML += badge;
			});
		}
	},

	removeTag: function(span) {
		let tagId = span.dataset.id;
		let index = FREELANCERCREATION.addedTags.indexOf(tagId);
		if(index > - 1) {
			FREELANCERCREATION.addedTags.splice(index, 1);
		}
		span.parentNode.parentNode.removeChild(span.parentNode);
	}

}