


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

                    //console.log(data.freelancer);
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

					var tagsTemp = data.freelancer.tags.map(function(el) {
						return el['name'];
					});

					var $tags = $('#modal-tags').selectize({
						delimiter: ',',
						persist: false,
						create: true
					});

					var selectize_tags = $("#modal-tags")[0].selectize
					for (let i = 0; i < tagsTemp.length; i++) {
						// console.log(tagsTemp[i]);
						selectize_tags.addOption({
							text: tagsTemp[i],
							value:  tagsTemp[i]
						});
						selectize_tags.addItem(tagsTemp[i]);
					}
				});
			}
		});
	},

    checkData: function(){
        // console.log(document.getElementById("modal-firstName").value);
        var patt = /^([A-Za-z_ _-_è_ü_é_ö_à_ä_á_']{3,15})+$/;
        let flag = true;
        // console.log(patt.test(document.getElementById("modal-firstName").value));


        if(!patt.test(document.getElementById("modal-firstName").value)){
            flag = false;
            document.getElementById("modal-firstName-label").className = 'error-red';
            document.getElementById("modal-firstName-label").innerHTML = "Firstname can only contain letters(a-z,A-Z) and spaces";
        }
        else if(patt.test(document.getElementById("modal-firstName").value) &&
           document.getElementById("modal-firstName-label").className == 'error-red'){
            document.getElementById("modal-firstName-label").className = 'error-green';
            document.getElementById("modal-firstName-label").innerHTML = "First name input was corrected";

        }

        if(!patt.test(document.getElementById("modal-lastName").value)){
            flag = false;
            document.getElementById("modal-lastName-label").className = 'error-red';
            document.getElementById("modal-lastName-label").innerHTML = "Lastname can only contain letters(a-z,A-Z) and spaces";
        }

        if(!patt.test(document.getElementById("modal-workName").value)){
            flag = false;
            document.getElementById("modal-workName-label").className = 'error-red';
            document.getElementById("modal-workName-label").innerHTML = "Workame can only contain letters(a-z,A-Z) and spaces";
        }

        if(flag){
            document.getElementById("form-freelancer-management").submit();
        }

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