//setup before functions
var typingTimer; //timer identifier
var doneTypingInterval = 500; //time in ms, 5 second for example
var $input = $('#search-text');
var spinner = `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`;
//on keyup, start the countdown
$input.on('keyup', function() {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(search, doneTypingInterval);
});

//on keydown, clear the countdown
$input.on('keydown', function() {
	clearTimeout(typingTimer);
});

/**
 * Function that is setup the css for the search mode
 * @return {void}
 */
let searchMode = function() {
	let main = document.getElementById('main');
	main.style.display = "flex";
	main.style.backgroundColor = "rgb(46, 78, 92)";
}

/**
 * Function that setup the css for the visualization of a profile.
 * @return {void}
 */
let profileMode = function() {
	let main = document.getElementById('main');
	main.style.display = "inherit";
	main.style.backgroundColor = "rgb(231, 231, 231)";
}
/**
 * Function that is called when searching for freelancers.
 * @return {void}
 */
let search = function() {
	animateSearch();
	let query = $input[0].value; //$input is an array so the value is in the first element.
	if (query.length > 0) {
		doJSONRequest("GET", "/api/freelancer/search/" + query, null, null, function(res) {
			if (res.error) {
				console.log("error");
			} else {
				let searchResult = document.getElementById('search-result');
				searchResult.innerHTML = "";
				for (freelancer of res) {
					insertCard(freelancer);
				}
				if (res.length == 0) {
					searchResult.innerHTML = "<h3 style='margin-top:30px;'> No result </h3>";
				}
			}
			let spinner = document.getElementById('spinner');
			if (spinner) {
				spinner.style.display = "none";
			}
			// setUpReviewFreelancer('5625fc2bd82b84d23d8c7bd0');
		});
	} else {
		let searchResult = document.getElementById('search-result');
		searchResult.innerHTML = spinner;
		searchResult.style.visibility = "hidden";
		searchResult.style.flexGrow = 0;
		searchResult.style.paddingBottom = 0;
		searchMode();
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
let insertCard = function(freelancer) {
	let card = `
	<div class='card result-card' id='` + freelancer._id + `'>
	<div class='card-img-top' alt='Card image cap' style="background-image:url('${freelancer.photo}');"></div>
	<div class='card-block'>
	<h4 class='card-title'>` + freelancer.firstName + " " + freelancer.lastName + `</h4>
	<p class='card-text'>` + freelancer.description + `'s content.</p>
	<a onclick="setUpFreelancerProfile('${freelancer._id}')" class='btn btn-primary'>Go somewhere</a>
	</div>
	</div>`;
	let searchResult = document.getElementById('search-result');
	searchResult.innerHTML += card;
};

/**
 * Set up all the freelancer's information profile
 * @param {objectId} idFreelancer - Id of the specific freelancer
 * @return {void}
 */
let setUpFreelancerProfile = function(idFreelancer) {
	location.href = '#' + idFreelancer;
	profileMode();
	doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(freelancer) {
		// renderFreelancerProfile(freelancer);
		let searchResult = document.getElementById('search-result');
		searchResult.innerHTML = renderFreelancerProfile(freelancer);
		setUpReviewFreelancer(idFreelancer);
	});
}
// setUpFreelancerProfile('5625fc2bd82b84d23d8c7bd0');


/**
 * Set up all reviews of a freelancer
 * @param {objectId} idFreelancer - Id of the specific freelancer
 * @return {void}
 */
let setUpReviewFreelancer = function(idFreelancer) {
	doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(reviews) {
		let sumRank = 0;
		for (let review of reviews) {
			renderReviewFreelancer(review);
			sumRank += review.score;
		}
		calculateAveragerank(sumRank, reviews.length);
	});
}

/**
 * Calculate average of all freelancer reviews
 * @param {Number} totScore - Sum of all the scores of reviews
 * @param {Number} totalReviews - Total number of reviews
 * @return {void}
 */
let calculateAveragerank = function(totScore, totalReviews) {
	let rank = document.getElementById("rank");

	let media = totScore / totalReviews;
	let floorMedia = Math.floor(media);

	let score = document.getElementById("rank");

	let i;
	for (i = 0; i != floorMedia; i++) {
		score.innerHTML += "<i class='fa fa-star blue' aria-hidden='true'></i>";
	}

	if ((media - floorMedia) >= 0.5) {
		score.innerHTML += "<i class='fa fa-star-half-o blue' aria-hidden='true'></i>";
		i++;
	}

	for (let j = i; j < 5; j++) {
		score.innerHTML += "<i class='fa fa-star-o blue' aria-hidden='true'></i>";
	}

}

/**
 * Render freelancer's reviews into the profile
 * @param {objectId} idFreelancer - Id of the specific freelancer
 * @return {void}
 */
let renderReviewFreelancer = function(review) {
	let score = "";
	let i;

	for (i = 0; i != review.score; i++) {
		score += "<i class='fa fa-star blue' aria-hidden='true'></i>";
	}

	for (let j = i; j < 5; j++) {
		score += "<i class='fa fa-star-o blue' aria-hidden='true'></i>";
	}

	let photos = "";
	for (let i = 0; i != review.photo.length; i++) {
		photos += "<img class='thumbnail-element' src= " + review.photo[i] + " alt= 'image '" + (i + 1) + ">"
	}

	let cardContainer = document.getElementById("cardReviews");
	cardContainer.innerHTML +=
		`<div class="card ml-15 review">
	<div class="card-block">
	<div class="title-author-review">
	<div id="score-name"><h5> ` + review.title + `</h5>` + score + `
	</div>
	<h6 id="review-user" class="card-subtitle mb-2 text-muted">` + review.user.firstName + " " + review.user.lastName + `</h6>
	</div>
	<p id="review-description" class="card-text">` + review.description + `</p>
	<div id="photo-review"> ` + photos + `
	</div>
	<div id="reply"></div>
	</div>
	</div>`;

	if (review.answer) {
		let answer = document.getElementById("reply");
		answer.innerHTML +=
			`	<div class="card-block">
		<h6 class="card-subtitle mb-2 text-muted">Reply:</h6>
		<p class="card-text">` + review.answer + `</p>
		</div>`
	}
}

/**
 * Render freelancer's information into the profile
 * @param {Freelancer} freelancer - Object of type Freelancer
 * @return {void}
 */

let renderFreelancerProfile = function(freelancer) {
	let mail = "";
	let phone = "";
	let city = "";
	let profilePic;
	let photos = "";

	if (freelancer.email) {
		mail = `<i class="fa fa-envelope" aria-hidden="true"></i> ${freelancer.email}`;
	}

	if (freelancer.phone) {
		phone = `<i class="fa fa-phone" aria-hidden="true"></i> ${freelancer.phone}`;
	}
	if (freelancer.address.city) {
		city = `<i class="fa fa-map-marker" aria-hidden="true"></i> ${freelancer.address.city}`;
	}

	if (freelancer.profilePhoto) {
		profilePic = freelancer.profilePhoto;
	} else {
		profilePic = "../img/default_user.jpg";
	}

	if (freelancer.photos.length > 0) {
		photos = `<i class="fa fa-camera" aria-hidden="true"></i> WORKS`

		for (let i = 0; i != freelancer.photos.length; i++) {
			photos += "<img class='thumbnail-element' src= " + freelancer.photos[i] + " alt= 'work '" + (i + 1) + ">";
		}
	}

	return `
	<div id="profile-freelancer">
	<div id="main-info">
	<div id="profile-pic" alt="profile photo" style="background-image:url('${profilePic}');>
	</div>
	<div id="main-info-vertical">
	<div id="info-name">
	<div class="info-name-top">
	<span class="ml-15" id="profile-name">${freelancer.firstName} ${freelancer.lastName}</span>
	<span class="ml-15" id="city-freelancer">${freelancer.address.city}
	</span>
	</div>
	<div class="ml-15 light-blue" id="info-name-bottom">
	${freelancer.workName}
	</div>
	</div>
	<div id="rank" class="ml-15">
	</div>
	<div class="contact-info-top ml-15">
	<div id="chat" class="contact-info-element blue">
	<i class="fa fa-comment" aria-hidden="true"></i> chat
	</div>
	<div id="email" class="contact-info-element blue">
	${mail}
	</div>
	<div id="phone" class="contact-info-element blue">
	${phone}
	</div>
	</div>
	</div>
	</div>
	<div id="main-info-bottom">
	<div id="info-review">
	<div class="ml-15" id="info">
	<h5 class="blue">
	INFO
	</h5>
	<p id="description"></p>
	${freelancer.description}
	</div>

	<div id="reviews">
	<h5 class="blue ml-15">REVIEW</h5>
	<div id="cardReviews">
	</div>
	</div>
	</div>

	<div id="img-freelancer">
	<div id="works" class="blue">
	</div>
	<div id="thumbnail">
	${photos}
	</div>
	</div>
	<!-- <div id="footer">
	Atelier Project - Group 2
	</div> -->
	</div>
	</div>`;
}
