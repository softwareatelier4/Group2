const SEARCH = {

	name: 'search',

	doneTypingInterval: 500,

	init: function() {
		console.log('Search - initialization');

		let searchVal = window.location.hash.split('=')[1];

		// Display the search in fullscreen if nothing in search bar, else display header and search
		if (searchVal == '') {
			SEARCH.searchFullScreen()
		} else {
			SEARCH.searchHeader();
			setTimeout(SEARCH.search, 0);
		}

		SEARCH.hashUpdater();
		SEARCH.hashToValue();
		SEARCH.listenerAdd();

	},


	/**
	 * searchFullScreen - View the search bar in full screen
	 */
	searchFullScreen: function() {
		MAIN_JS.style.visibility = "hidden";
		MAIN_JS.style.flexGrow = 0;
	},

	/**
	 * searchHeader - View the search bar as a header
	 */
	searchHeader: function() {
		MAIN_JS.style.visibility = "visible";
		MAIN_JS.style.flexGrow = 1;
	},

	/**
	 * listenerAdd - Add the needed event listeners to the search bar
	 */
	listenerAdd: function() {
		let typingTimer;

		//on keyup, start the countdown
		SEARCH_TEXT_QUERY.on('keyup', function() {
			clearTimeout(typingTimer);
			typingTimer = setTimeout(SEARCH.search, SEARCH.doneTypingInterval);
		});

		//on keydown, clear the countdown
		SEARCH_TEXT_QUERY.on('keydown', function() {
			clearTimeout(typingTimer);
		});
	},

	/**
	 * search - AJAX request and formatting for the search
	 */
	search: function() {
		console.log('searching...');
		let query = SEARCH_TEXT_QUERY.val(); //$input is an array so the value is in the first element.
		if (query.length > 0) {
			SEARCH.searchHeader();

			doJSONRequest("GET", "/api/freelancer/search/" + query, null, null, function(res) {
				if (res.error) {
					console.log("error");
				} else {
					let searchResult = document.getElementById('main-content');
					searchResult.innerHTML = "";
					for (freelancer of res) {
						SEARCH.insertCard(freelancer);
					}
					if (res.length == 0) {
						searchResult.innerHTML = "<h3 style='margin-top:30px;'> No result </h3>";
					}
				}
				let spinner = document.getElementById('spinner');
				if (spinner) {
					spinner.style.display = "none";
				}
			});
		} else {
			SEARCH.searchFullScreen();
			MAIN_JS.innerHTML = SEARCH.spinner;

		}
	},

	hashUpdater: function() {
		SEARCH_TEXT_QUERY.on('keyup', function() {
			let searchHash = SEARCH_TEXT_QUERY.val().replace(/ /g, '+');
			window.location.hash = 'search=' + searchHash;
		})
	},

	hashToValue: function() {
		let value = window.location.hash.split('=')[1];
		value = value.replace('+', ' ');
		SEARCH_TEXT_QUERY.val(value);
	},

	remover: function() {
		SEARCH_TEXT_QUERY.off();
	},

	insertCard: function(freelancer) {
		$.get("/html/searchCard.html", function(card) {
			card = card
				.replace('{f.id}', freelancer._id)
				.replace('{f.photo}', freelancer.photo)
				.replace('{f.name}', freelancer.firstName + " " + freelancer.lastName)
				.replace('{f.description}', freelancer.description);

			MAIN_JS.insertAdjacentHTML('beforeend', card);

			let link = document.getElementById(freelancer._id).getElementsByTagName('a')[0];
			link.addEventListener('click', SEARCH.selectProfile);

		}, 'html');
	},

	selectProfile: function(ev) {
		let elem = ev.target;
		let id = elem.parentNode.parentNode.id;

		window.location.hash = 'freelancer=' + id;
	},

	spinner: `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`,
}
