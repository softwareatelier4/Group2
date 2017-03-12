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
	searchResult.innerHTML+=card;
}

/**
 * Returns an array of Freelancers based on a given string
 * @param {array} freelancers - List of freelancer to filter
 * @param {string} string - Search criteria
 * @return {array} - Array of filtered freelancers
 */
let searchEngine = function(freelancers, string) {
	let result = [];
	let words = string.replace(",", " ").split(" ");
	let fClone = [];

	for each (let w in words) {
		for each (let f in fClone) {
			if (searchForTag(f.tags, w).length > 0) {
				fClone.push(f);
				continue;
			}

			let city = [f.address.city];
			if (searchForTag(city, w).length > 0) {
				fClone.push(f);
				continue;
			}

			let filter = [f.firstName, f.lastName, f.description, f.workName];
			if (searchForTag(filter, w).length > 0) {
				fClone.push(f);
				continue;
			}
		}
	}

	for each (let f in fClone) {
		let freelancer = {freelancer : f, counter : countInArray(fClone, f)};
		result.push(freelancer);
	}

	result.sort(function(a, b){return b.counter-a.counter})

	return result;

}

/**
 * Returns an array of Strings based on a given string and array of Strings
 * @param {array} array - List to iterate on (tags, cities, ...)
 * @param {string} string - Search criteria
 * @return {array} - Array of filtered stuff
 */
let searchForTag = function(array, string) {
	let result = [];
	for each (let s in array) {
		if (s.includes(string))
			result.push(s);
	}
	return result;
}

/**
 * Returns the number of occurencies of an element in an array
 * @param {array} array - List to iterate on (tags, cities, ...)
 * @param {string} what - The element
 * @return {number} - Occurencies of that element in the array
 */
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
















// ciao
