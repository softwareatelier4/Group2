//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 500;  //time in ms, 5 second for example
var $input = $('#search-text');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(search, doneTypingInterval);
});

//on keydown, clear the countdown
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//the function that is called when you search
let search = function() {
	animateSearch();
	let query = $input[0].value; //$input is an array so the value is in the first element.
	console.log(query);
	// insertCard();
	doJSONRequest("GET","/api/freelancer/search?"+query,null,null,function(res) {
		if(res.error){
			console.log("error");
		}
		else{
			for(freelancer of res){
				insertCard(freelancer.name,freelancer.img,freelancer.description);
			}
		}
		let spinner = document.getElementById('spinner');
		spinner.style.display = "none";
	});
}

//the animation that start when you search
let animateSearch = function() {
   let searchResult = document.getElementById('search-result');
   searchResult.style.visibility = "visible";
   searchResult.style.flexGrow = 1;
}

// simulate a card insertion
let insertCard = function(name,img,description) {
	let card = `
	<div class='card result-card'>
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
