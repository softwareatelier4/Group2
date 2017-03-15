//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 500;  //time in ms, 5 second for example
var $input = $('#search-text');
var spinner = `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`;
//on keyup, start the countdown
$input.on('keyup', function () {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(search, doneTypingInterval);
});

//on keydown, clear the countdown
$input.on('keydown', function () {
	clearTimeout(typingTimer);
});

/**
 * Function that is called when searching for freelancers.
 * @return {void}
 */
let search = function() {
	animateSearch();
	let query = $input[0].value; //$input is an array so the value is in the first element.
	console.log(query);
	// insertCard();
	if(query.length > 0){
		doJSONRequest("GET","/api/freelancer/search/"+query,null,null,function(res) {
			console.log(res);
			if(res.error){
				console.log("error");
			}
			else{
				let searchResult = document.getElementById('search-result');
				searchResult.innerHTML = "";
				for(freelancer of res){
					insertCard(freelancer._id, freelancer.firstName + " " + freelancer.lastName ,freelancer.photo ,freelancer.description);
				}
				if(res.length == 0){
					searchResult.innerHTML = "<h3 style='margin-top:30px;'> No result </h3>";
				}
			}
			let spinner = document.getElementById('spinner');
			if(spinner){
				spinner.style.display = "none";
			}
		});
	}
	else{
		let searchResult = document.getElementById('search-result');
		searchResult.innerHTML = spinner;
		searchResult.style.visibility = "hidden";
		searchResult.style.flexGrow = 0;
	}
}

/**
 * Function that animates the search
 * @return {void}
 */
let animateSearch = function() {
	let searchResult = document.getElementById('search-result');
	searchResult.style.visibility = "visible";
	searchResult.style.flexGrow = 1;
}

/**
 * Function that creates and inserts a new card (visualization of a freelancer after the search)
 * @param {objectId} id - id of the freelancer
 * @param {string} name - name of the freelancer
 * @param {string} img - photo of the freelancer
 * @param {string} description - description of the freelancer
 * @return {void}
 */
let insertCard = function(id, name,img,description) {
	let card = `
	<div class='card result-card' id='`+ id +`'>
	<div class='card-img-top' alt='Card image cap' style="background-image: url("`+img+`")"></div>
	<div class='card-block'>
	<h4 class='card-title'>`+name+`</h4>
	<p class='card-text'>`+description+`'s content.</p>
	<a href='#' class='btn btn-primary'>Go somewhere</a>
	</div>
	</div>`;
	let searchResult = document.getElementById('search-result');
	searchResult.innerHTML += card;
}
