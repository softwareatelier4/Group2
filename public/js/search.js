const SEARCH = {

	name: 'search',

	doneTypingInterval: 500,

	/**
	 * Set up the search
	 * @return {void}
	 */
	init: function() {

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
	 * View the search bar in full screen
	 * @return {void}
	 */
	searchFullScreen: function() {
		MAIN_JS.style.visibility = "hidden";
		MAIN_JS.style.flexGrow = 0;
	},


	/**
	 * View the search bar as a header
	 * @return {void}
	 */
	searchHeader: function() {
		MAIN_JS.style.visibility = "visible";
		MAIN_JS.style.flexGrow = 1;
	},


	/**
	 * Add the needed event listeners to the search bar
	 * @return {void}
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
	 * AJAX request and formatting for the search
	 * @return {void}
	 */
	search: function() {
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

	/**
	 * Update the current URL adding the searched value
	 * @return {void}
	 */
	hashUpdater: function() {
		SEARCH_TEXT_QUERY.on('keyup', function() {
			let searchHash = SEARCH_TEXT_QUERY.val().replace(/ /g, '+');
			window.location.hash = 'search=' + searchHash;
		})
	},

	/**
	 * Update the value of the input-search putting the value of the current URL
	 * @return {void}
	 */
	hashToValue: function() {
		let value = window.location.hash.split('=')[1];
		value = value.replace('+', ' ');
		SEARCH_TEXT_QUERY.val(value);
	},

	/**
	 * Remove not needed listeners from the input-search
	 * @return {void}
	 */
	remover: function() {
		SEARCH_TEXT_QUERY.off();
	},

	/**
	 * Insert and view Cards as result of the search
	 * @param {Freelancer} freelancer - Object Freelancer
	 * @return {void}
	 */
	insertCard: function(freelancer) {
		$.get("/html/searchCard.html", function(card) {
			let templateTag = {
				'f.id': freelancer._id,
				'f.photo': freelancer.photo,
				'f.name': freelancer.firstName + " " + freelancer.lastName,
				'f.description': freelancer.description
			};

			for (label in templateTag) {
				card = renderTemplateString(card, templateTag[label], label);
			}

			MAIN_JS.insertAdjacentHTML('beforeend', card);

			let link = document.getElementById(freelancer._id).getElementsByTagName('a')[0];
			link.addEventListener('click', SEARCH.selectProfile);

		}, 'html');
	},

	/**
	 * Change URL putting the id-freelancer in order to open the selected profile
	 * @param {EventListener} ev - event Listener
	 * @return {void}
	 */
	selectProfile: function(ev) {
		let elem = ev.target;
		let id = elem.parentNode.parentNode.id;

		window.location.hash = 'freelancer=' + id;
	},

	spinner: `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`,
}
