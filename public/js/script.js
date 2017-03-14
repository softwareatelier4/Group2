//the function that is called when you search
let search = function() {
   animateSearch();
   let query = document.getElementById('search-text').value;
   console.log(query);
   insertCard();
   let spinner = document.getElementById('spinner');
   spinner.style.display = "none";
}

//the animation that start when you search
let animateSearch = function() {
   let searchResult = document.getElementById('search-result');
   searchResult.style.visibility = "visible";
   searchResult.style.flexGrow = 1;
}

// simulate a card insertion
let insertCard = function() {
   let card = `
	<div class='card result-card'>
		<div class='card-img-top' alt='Card image cap'></div>
		<div class='card-block'>
			<h4 class='card-title'>Card title</h4>
			<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href='#' class='btn btn-primary'>Go somewhere</a>
		</div>
	</div>`;
   let searchResult = document.getElementById('search-result');
   searchResult.innerHTML += card;
}
