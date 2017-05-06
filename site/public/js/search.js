/*jshint esversion: 6 */

const SEARCH = {

	name: 'search',

	// after n milliseconds the search starts
	doneTypingInterval: 500,

	// Search box position
	position: {
		city: null,
		formatted_address: null,
		latitude: null,
		longitude: null,
		method: null
	},

	currentResult: [],

	originalResponse: [],

	notSortedResult: undefined,

	freelancerForMarco: [],

	filters: {
		sort: {
			idBtn: undefined,
			type: undefined
		},
		price: undefined,
		distance: undefined,
		emergency: false
	},

	preEmergencyStatus: {
		oldDistance: "",
		oldButton: "",
		oldType: ""
	},

	/**
	 * Search initializer
	 * @return {void}
	 */
	init: function() {

		// #search=value, take the value
		let searchVal = window.location.hash.split('|')[0].split('=')[1];

		// Display the search in fullscreen if nothing in search bar, else display header and search
		if (searchVal == '') {
			SEARCH.searchFullScreen()
		} else {
			SEARCH.searchHeader();
		}

		// given the hash, set the search box
		SEARCH.hashToValue();

		// set the filters
		SEARCH.getFilterHash();
		SEARCH.setFilterHash();

		// set the position
		SEARCH.getPositionHash();
		SEARCH.setPositionHash();

		SEARCH.addon_init();

		// if there is a search, make the search!
		if (SEARCH_TEXT_QUERY.val() !== '') {
			SEARCH.search();
		}

	},

	clickEmergency: function(e) {
		let distanceInput = document.getElementById("distance-input");
		if (e.target.dataset.value.toString() == 'true') {
			SEARCH.filters.emergency = false;
			e.target.dataset.value = false;
			e.target.classList.remove('btn-danger');
			e.target.classList.add('btn-default');
			// e.target.style.backgroundColor = "green";
			distanceInput.value = SEARCH.preEmergencyStatus.oldDistance;
			let buttons = document.getElementById('sorting-buttons').childNodes;
			let currentButton = document.getElementById(SEARCH.preEmergencyStatus.oldButton);
			for (let i = 0; i < buttons.length; i++) {
				// skip current clicked button or not buttons
				if (buttons[i].tagName != 'SPAN')
					continue;

				buttons[i].style.textDecoration = '';
				if (buttons[i].innerText !== undefined) {
					if (currentButton) {
						currentButton.getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
						currentButton.getElementsByClassName('down-arrow')[0].style.display = 'none';
					}
					buttons[i].getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
					buttons[i].getElementsByClassName('up-arrow')[0].style.display = 'inline';
					buttons[i].getElementsByClassName('down-arrow')[0].style.display = 'none';
					buttons[i].getElementsByClassName('down-arrow')[0].style.visibility = 'hidden';
					buttons[i].dataset.sorttype = "neutral";

				}
			}

			if (SEARCH.preEmergencyStatus.oldButton !== null && SEARCH.preEmergencyStatus.oldButton) {
				document.getElementById(SEARCH.preEmergencyStatus.oldButton).dataset.sorttype = SEARCH.filters.sort.type;
				SEARCH.applyFilters();
				currentButton.dataset.sorttype = SEARCH.preEmergencyStatus.oldType;
				SEARCH.cardSort(SEARCH.preEmergencyStatus.oldButton, SEARCH.preEmergencyStatus.oldType);
				SEARCH.filters.sort.idBtn = currentButton.id;
				SEARCH.filters.sort.type = currentButton.dataset.sorttype;
				SEARCH.setFilterHash();
				if (currentButton.dataset.sorttype == 'asc') {
					currentButton.getElementsByClassName('up-arrow')[0].style.visibility = 'visible';
					currentButton.getElementsByClassName('up-arrow')[0].style.display = 'inline';
					currentButton.style.textDecoration = 'underline';
				} else if (currentButton.dataset.sorttype == 'desc') {
					currentButton.getElementsByClassName('down-arrow')[0].style.visibility = 'visible';
					currentButton.getElementsByClassName('down-arrow')[0].style.display = 'inline';
					currentButton.getElementsByClassName('up-arrow')[0].style.display = 'none';
					currentButton.style.textDecoration = 'underline';
				}
			} else {
				SEARCH.applyFilters();
				SEARCH.preEmergencyStatus.oldButton = "";
				SEARCH.filters.sort.type = "";
			}
		} else {
			SEARCH.filters.emergency = true;
			e.target.dataset.value = true;
			e.target.classList.remove('btn-default');
			e.target.classList.add('btn-danger');
			// e.target.style.backgroundColor = "red";
			SEARCH.preEmergencyStatus.oldDistance = distanceInput.value;
			SEARCH.preEmergencyStatus.oldButton = SEARCH.filters.sort.idBtn;
			SEARCH.preEmergencyStatus.oldType = SEARCH.filters.sort.type;
			distanceInput.value = 50;
			let buttons = document.getElementById('sorting-buttons').childNodes;
			let currentButton = document.getElementById('btn-distance');
			for (let i = 0; i < buttons.length; i++) {
				// skip current clicked button or not buttons
				if (buttons[i].tagName != 'SPAN')
					continue;

				buttons[i].style.textDecoration = '';
				if (buttons[i].innerText !== undefined) {
					currentButton.getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
					currentButton.getElementsByClassName('down-arrow')[0].style.display = 'none';
					buttons[i].getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
					buttons[i].getElementsByClassName('up-arrow')[0].style.display = 'inline';
					buttons[i].getElementsByClassName('down-arrow')[0].style.display = 'none';
					buttons[i].getElementsByClassName('down-arrow')[0].style.visibility = 'hidden';
					buttons[i].dataset.sorttype = "neutral";

				}
			}

			currentButton.getElementsByClassName('up-arrow')[0].style.visibility = 'visible';
			currentButton.style.textDecoration = 'underline';
			currentButton.dataset.sorttype = 'asc';
			SEARCH.filters.sort.idBtn = 'btn-distance';
			SEARCH.filters.sort.type = 'asc';
			SEARCH.filters.sort.distance = 50;
			SEARCH.filters.emergency = true;

			SEARCH.applyFilters();
			SEARCH.cardSort('btn-distance', "asc");

		}

	},

	/**
	 * Called from external page to initialize the search bar
	 * @return {void}
	 */
	addon_init: function() {
		// add the necessary listeners
		SEARCH.listenerAdd();

		// update the hash when someone search something
		SEARCH.hashUpdater();

		// find the geolocalization of a person
		SEARCH.addGeolocationListener();

		// set the position when the user input it
		$('#position').on('keyup', function() {
			if ($('#position').val() == '') {
				$('#position').blur(function() {
					SEARCH.setPosition('reset');
				});
			} else {
				$('#position').off('blur');
			}
		});
	},

	/**
	 * Remove not needed listeners from the input-search
	 * @return {void}
	 */
	remover: function() {
		SEARCH_TEXT_QUERY.off();
		$('#basic-addon1').off();
		$("#position").off();
		FILTER_DISTANCE_QUERY.off();
		FILTER_PRICE_QUERY.off();
	},

	/**
	 * View the search bar in full screen
	 * @return {void}
	 */
	searchFullScreen: function() {
		MAIN_JS.style.visibility = "hidden";
		MAIN_JS.style.flexGrow = 0;
		MAIN_DIV.style.display = "flex";
		MAIN_DIV.style.backgroundColor = "rgb(46, 78, 92)";

		/* CLEANING ALL THE FILTERS AND SORTING BUTTONS */
		FILTER_DISTANCE_QUERY[0].value = "";
		FILTER_PRICE_QUERY[0].value = "";
		SEARCH.filters = {
			sort: {
				idBtn: undefined,
				type: undefined
			},
			price: undefined,
			distance: undefined
		};
		SORTING_OPTIONS.style.visibility = 'hidden';
		document.getElementById("emergency-btn").style.visibility = "hidden";
		document.getElementById("emergency-btn").style.display = "none";
		let btns = document.getElementsByClassName('filter-btn');
		for (let elem of btns) {
			elem.style.textDecoration = '';
			elem.dataset.sorttype = 'neutral';
		}
		let arrowsup = document.getElementsByClassName('up-arrow');
		for (arrow of arrowsup) {
			arrow.style.display = 'inline';
			arrow.style.visibility = 'hidden';
		}
		let arrowsdown = document.getElementsByClassName('down-arrow');
		for (arrow of arrowsdown) {
			arrow.style.display = 'none';
			arrow.style.visibility = 'hidden';
		}
		//////////////////////////////////////////////////////////////////
	},


	/**
	 * View the search bar as a header
	 * @return {void}
	 */
	searchHeader: function() {
		MAIN_JS.style.visibility = "visible";
		MAIN_JS.style.flexGrow = 1;
		MAIN_DIV.style.display = "inline";
		MAIN_DIV.style.backgroundColor = "rgb(231, 231, 231)";
		SORTING_OPTIONS.style.visibility = 'visible';
		document.getElementById("emergency-btn").style.visibility = 'visible';
		document.getElementById("emergency-btn").style.display = "block";
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

		//on keyup, start the countdown
		FILTER_DISTANCE_QUERY.on('keyup', function(e) {
			clearTimeout(typingTimer);
			typingTimer = setTimeout(SEARCH.applyFilters, SEARCH.doneTypingInterval);
		});

		//on keydown, clear the countdown
		FILTER_PRICE_QUERY.on('keydown', function() {
			clearTimeout(typingTimer);
		});

		//on keyup, start the countdown
		FILTER_PRICE_QUERY.on('keyup', function(e) {
			clearTimeout(typingTimer);
			typingTimer = setTimeout(SEARCH.applyFilters, SEARCH.doneTypingInterval);
		});

		//on keydown, clear the countdown
		FILTER_DISTANCE_QUERY.on('keydown', function() {
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

			let lat;
			let long;

			if (SEARCH.position) {
				lat = SEARCH.position.latitude;
				long = SEARCH.position.longitude;
			} else {
				lat = 46.005265; //temp lat
				long = 8.947147; // temp long
			}

			doJSONRequest("GET", "/api/freelancer/search/" + query + "|" + lat + "," + long + "|" + SEARCH.position.city, null, null, function(res) {
				if (res.error) {
					console.log("error");
				} else {
					SEARCH.currentResult = res;
					SEARCH.originalResponse = res;
					let searchResult = document.getElementById('main-content');
					searchResult.innerHTML = "";
					SEARCH.applyFilters();

					let currentSort = document.getElementById(SEARCH.filters.sort.idBtn);

					if (currentSort !== undefined && currentSort !== null) {
						currentSort.dataset.sorttype = SEARCH.filters.sort.type;
						if (SEARCH.filters.sort.type === 'asc') {
							currentSort.getElementsByClassName("up-arrow")[0].style.visibility = 'visible';
							currentSort.getElementsByClassName("up-arrow")[0].style.display = 'inline';
							currentSort.getElementsByClassName("down-arrow")[0].style.display = 'none';
							currentSort.style.textDecoration = 'underline';
						} else if (SEARCH.filters.sort.type === 'desc') {
							currentSort.getElementsByClassName("down-arrow")[0].style.visibility = 'visible';
							currentSort.getElementsByClassName("down-arrow")[0].style.display = 'inline';
							currentSort.getElementsByClassName("up-arrow")[0].style.display = 'none';
							currentSort.style.textDecoration = 'underline';
						}
					}


					SEARCH.freelancerForMarco = JSON.parse(JSON.stringify(SEARCH.currentResult));
					SEARCH.freelancerForMarco.sort(function(a, b) {
						if (a.distance === undefined || a.distance === null)
							return 1;

						if (a.distance === undefined || b.distance === null)
							return -1;

						return a.distance - b.distance;
					});
					let distResult = [];
					for (let i = 0; i < 10; i++) {

						if (SEARCH.freelancerForMarco[i] === undefined)
							continue;
						let temp = {
							lat: SEARCH.freelancerForMarco[i].latitude,
							lng: SEARCH.freelancerForMarco[i].longitude,
							id: SEARCH.freelancerForMarco[i]._id
						}
						distResult.push(temp);
					}
					SEARCH.getGmapRealValue(distResult);

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
	 * Redraw freelancers cards in a sorted way based on properties (price, score,ecc)
	 * @param {String} buttonId - Id of the button which calls this function to set the property
	 * @return {void}
	 */
	sortSearchFreelancers: function(buttonId) {
		if (SEARCH.currentResult === undefined)
			return;

		if (SEARCH.notSortedResult === undefined)
			SEARCH.notSortedResult = JSON.parse(JSON.stringify(SEARCH.currentResult));

		let currentButton = document.getElementById(buttonId);
		let currentOrder = currentButton.textContent || currentButton.innerText;

		var arrowUp = currentButton.getElementsByClassName('up-arrow')[0];
		var arrowDown = currentButton.getElementsByClassName('down-arrow')[0];

		let buttons = document.getElementById('sorting-buttons').childNodes;

		let sortType = currentButton.dataset.sorttype;

		for (let i = 0; i < buttons.length; i++) {
			// skip current clicked button or not buttons
			if (buttons[i].id === buttonId || buttons[i].tagName != 'SPAN')
				continue;

			buttons[i].style.textDecoration = '';
			if (buttons[i].innerText !== undefined) {
				arrowUp.style.visibility = 'hidden';
				arrowDown.style.display = 'none';
				buttons[i].getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
				buttons[i].getElementsByClassName('up-arrow')[0].style.display = 'inline';
				buttons[i].getElementsByClassName('down-arrow')[0].style.display = 'none';
				buttons[i].getElementsByClassName('down-arrow')[0].style.visibility = 'hidden';
				buttons[i].dataset.sorttype = "neutral";

			}
		}

		switch (sortType) {
			case "neutral":
				arrowUp.style.visibility = 'visible';
				// currentButton.innerText = currentButton.innerText + " ↑";
				sortType = "asc";
				currentButton.style.textDecoration = 'underline';
				currentButton.dataset.sorttype = 'asc';
				SEARCH.cardSort(buttonId, sortType);
				break;
			case "asc":
				arrowUp.style.display = 'none';
				arrowDown.style.display = 'inline';
				arrowDown.style.visibility = 'visible';
				currentButton.dataset.sorttype = 'desc';
				// currentButton.innerText = currentButton.innerText.replace(" ↑", " ↓");
				sortType = "desc";
				SEARCH.cardSort(buttonId, sortType);
				break;
			case "desc":
				sortType = "neutral";
				arrowDown.style.display = 'none';
				arrowUp.style.display = 'inline';
				arrowUp.style.visibility = 'hidden';
				// currentButton.innerText = currentButton.innerText.replace(" ↓", "");
				currentButton.style.textDecoration = '';
				currentButton.dataset.sorttype = 'neutral';
				SEARCH.filters.sort.type = 'neutral';
				SEARCH.filters.sort.idBtn = undefined;
				SEARCH.applyFilters();
				break;
		}

		//currentButton.dataset.sorttype = sortType;
		if (sortType !== "neutral") {
			SEARCH.filters.sort.idBtn = buttonId;
			SEARCH.filters.sort.type = sortType;
		} else {
			SEARCH.filters.sort.idBtn = undefined;
			SEARCH.filters.sort.type = undefined;
		}
		SEARCH.setFilterHash();
	},

	cardSort: function(buttonId, sortType) {

		SEARCH.currentResult.sort(function(a, b) {
			switch (buttonId) {
				case "btn-score":
					if (sortType === "asc")
						return b.score - a.score;
					else {
						return a.score - b.score;
					}
					break;
				case "btn-price":
					if (sortType === "desc") {
						if (a.price === undefined)
							return 1;

						if (b.price === undefined)
							return -1;

						return b.price - a.price;
					} else {
						if (a.price === undefined)
							return 1;

						if (a.price === undefined)
							return -1;

						return a.price - b.price;
					}
					break;
				case "btn-time":
					if (sortType === "desc") {
						if (a.time === undefined || a.time === 0)
							return 1;

						if (b.time === undefined || b.time === 0)
							return -1;

						return b.time - a.time;
					} else {
						if (a.time === undefined || a.time === 0)
							return 1;

						if (a.time === undefined || b.time === 0)
							return -1;

						return a.time - b.time;
					}
					break;
				case "btn-distance":
					if (sortType === "desc") {
						if (a.distance === undefined || a.distance === null)
							return 1;

						if (b.distance === undefined || b.distance === null)
							return -1;

						return b.distance - a.distance;
					} else {
						if (a.distance === undefined || a.distance === null)
							return 1;

						if (a.distance === undefined || b.distance === null)
							return -1;

						return a.distance - b.distance;
					}
					break;
				case "btn-name":
					if (sortType === "asc") {
						if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
							return -1;
						if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
							return 1;
						return 0;
					} else {
						if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
							return -1;
						if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
							return 1;
						return 0;
					}
					break;
			}

		});
		SEARCH.drawCards(SEARCH.currentResult);
	},

	/**
	 * Draw the card usign DUST JS
	 * @param {array} freelancers -
	 * @return {void}
	 */
	drawCards: function(freelancers) {
		let searchResult = document.getElementById('main-content');
		searchResult.innerHTML = "";
		$.get("/html/searchCard.html", function(cardHtml) {
			for (freelancer of freelancers) {

				SEARCH.insertCard(freelancer, cardHtml);
			}
		}, 'html');
		if (SEARCH.currentResult.length == 0) {
			searchResult.innerHTML = "<h3 style='margin-top:30px;'> No result </h3>";
		}
	},

	applyFilters: function() {
		let priceInput = document.getElementById("price-input");
		let distanceInput = document.getElementById("distance-input");
		let maxPrice = priceInput.value;
		let maxDistance = distanceInput.value;
		SEARCH.filters.price = maxPrice;
		SEARCH.filters.distance = maxDistance;

		SEARCH.currentResult = JSON.parse(JSON.stringify(SEARCH.originalResponse));

		// apply emergency filter
		if (SEARCH.filters.emergency) {
			SEARCH.currentResult = SEARCH.currentResult.filter(function(freelancer) {
				return freelancer.emergency;
			});
		}

		// apply price filter
		if (!isNaN(maxPrice - 0) && maxPrice !== null && maxPrice !== "" && maxPrice !== false) {
			SEARCH.currentResult = SEARCH.currentResult.filter(function(freelancer) {
				if (freelancer.price)
					return freelancer.price <= maxPrice;
			});
		}

		// apply distance filter
		if (!isNaN(maxDistance - 0) && maxDistance !== null && maxDistance !== "" && maxDistance !== false) {
			SEARCH.currentResult = SEARCH.currentResult.filter(function(freelancer) {
				if (freelancer.distance)
					return Number(freelancer.distance) <= Number(maxDistance);
			});
		}

		//SEARCH.notSortedResult = SEARCH.currentResult;
		SEARCH.setFilterHash();

		SEARCH.cardSort(SEARCH.filters.sort.idBtn, SEARCH.filters.sort.type);
	},

	/**
	 * Listener to update the current URL adding the searched value
	 * @return {void}
	 */
	hashUpdater: function() {
		SEARCH_TEXT_QUERY.on('keyup', SEARCH.setSearchHash);
		$('#basic-addon1').on('click', SEARCH.setSearchHash);
	},

	/**
	 * Update the current URL adding the searched value
	 * @return {void}
	 */
	setSearchHash: function() {
		let searchHash = SEARCH_TEXT_QUERY.val().replace(/ /g, '+').replace(/|/g, '');
		let hash = window.location.hash.split('|');
		if (hash[0].split('=')[0] == '#search') {
			hash[0] = hash[0].split('=')[0] + '=' + searchHash;
		} else {
			hash = ['search=' + searchHash];
		}
		window.location.hash = hash.join('|');
	},

	/**
	 * Update the SEARCH.position object.
	 * @return {void}
	 */
	setPosition: function(method, latitude, longitude, city, formatted_address) {
		method = method || '';

		if (method == 'user') {
			SEARCH.position = {
				city,
				formatted_address,
				latitude,
				longitude,
				method
			};
		} else {
			if (method == 'empty_location' || SEARCH.position.method != 'user' || method == 'reset') {
				SEARCH.position = {
					city: userPosition.city,
					formatted_address: userPosition.formatted_address,
					latitude: userPosition.latitude,
					longitude: userPosition.longitude,
					method: method
				};
			} else {
				return;
			}
		}

		SEARCH.setPositionBox();
		SEARCH.setPositionHash();

		if (currentPage.name != 'search') {
			return;
		}

		SEARCH.search();
	},

	/**
	 * Update the position box but only if it is not in focus
	 * @return {void}
	 */
	setPositionBox: function() {
		if ($('#position').is(":focus")) {
			return;
		}
		$('#position').val(SEARCH.position.formatted_address);
	},

	/**
	 * Get the position values from the hash
	 * @return {void}
	 */
	getPositionHash: function() {
		let hashes = window.location.hash.split('|');

		let hash;
		for (let h of hashes) {
			if (h.split(':')[0] == 'position') {
				hash = h.split(':')[1];
				break;
			}
		}

		if (hash) {
			hash = hash.split('&');
			let hashObj = {};
			for (let h of hash) {
				hashObj[h.split('=')[0]] = h.split('=')[1];
			}

			SEARCH.setPosition('user', hashObj.latitude, hashObj.longitude, hashObj.city, hashObj.formatted_address.replace(/\$/g, ' '));
		}

	},

	/**
	 * Set the position hash from the position box
	 * @return {void}
	 */
	setPositionHash: function() {
		if (currentPage.name != 'search')
			return;
		let hashes = window.location.hash.split('|');

		let positionHash;
		for (let i in hashes) {
			if (hashes[i].split(':')[0] == 'position') {
				positionHash = i;
				break;
			}
		}

		if (!SEARCH.position.city)
			return;

		let hash = 'position:city=' + SEARCH.position.city + '&formatted_address=' + SEARCH.position.formatted_address.replace(/ /g, '$');
		hash += '&latitude=' + SEARCH.position.latitude + '&longitude=' + SEARCH.position.longitude;

		if (positionHash) {
			hashes[positionHash] = hash;
		} else {
			hashes.push(hash);
		}

		window.location.hash = hashes.join('|');
	},

	//auto complete geo position
	addGeolocationListener: function() {
		$("#position")
			.geocomplete()
			.bind("geocode:result", function(event, result) {
				let city = UTILS.googleFindType(result.address_components, 'locality')

				if (city) {
					city = city.long_name;
				} else {
					city = result.address_components[0].long_name;
				}

				const formatted_address = result.formatted_address;

				const lat = result.geometry.location.lat();
				const lng = result.geometry.location.lng();
				SEARCH.setPosition('user', lat, lng, city, formatted_address);
			});
	},

	/**
	 * Google API - calculate the distance
	 * @return {void}
	 */
	getGmapRealValue: function(data) {

		const origin = new google.maps.LatLng(SEARCH.position.latitude, SEARCH.position.longitude);

		let destinations = [];

		for (freelancer of data) {
			let destination = new google.maps.LatLng(freelancer.lat, freelancer.lng);
			destinations.push(destination);
		}

		var service = new google.maps.DistanceMatrixService();
		service.getDistanceMatrix({
			origins: [origin],
			destinations: destinations,
			travelMode: 'DRIVING',
			avoidHighways: false,
			avoidTolls: false,
		}, gmapsResults);

		function gmapsResults(response, status) {

			// update the card with the new infos
			function updateCard(freelancerId, distance, duration, i) {
				i = i || 0;

				const freelancerDom = $('#' + freelancerId);
				if (freelancerDom[0]) {
					const dom = $('#' + freelancerId + ' .km-time .card-text')[0];
					dom.innerHTML = distance + ' km';
					const dom1 = $('#' + freelancerId + ' .km-time .card-text')[1];
					dom1.innerHTML = SEARCH.writeTimeBetter(duration);
				} else if (i < 5) {
					// if the element does not exists yet, retry in 5ms
					setTimeout(() => {
						updateCard(freelancerId, distance, duration, ++i);
					}, 5);
				}
			}


			if (status == 'OK') {
				for (let i in response.rows[0].elements) {
					let elem = response.rows[0].elements[i];
					if (elem.status == 'OK') {

						const freelancerId = data[i].id;
						const distance = (elem.distance.value / 1000).toFixed(2);
						const duration = elem.duration.value / 60 / 60;

						for (let i in SEARCH.currentResult) {
							let c = SEARCH.currentResult;
							if (c[i]._id == freelancerId) {
								c[i].distance = distance;
								c[i].time = duration;
								c[i].googleMaps = true;
							}
						}

						for (let i in SEARCH.originalResponse) {
							let c = SEARCH.originalResponse;
							if (c[i]._id == freelancerId) {
								c[i].distance = distance;
								c[i].time = duration;
								c[i].googleMaps = true;
							}
						}

						updateCard(freelancerId, distance, duration);
					}
				}
			}
		}

	},

	/**
	 * Return the time written like tot h tot min
	 * @param {Number} - Time to convert
	 * @return {String} - Time rewritten
	 */
	writeTimeBetter: function(time) {
		if (time < 1) {
			return (time * 60).toFixed(0) + "min";
		} else {
			let minutes = ((time - parseInt(time, 10)) * 60).toFixed(0);
			let hours = parseInt(time, 10);
			return hours + "h   " + minutes + "min";
		}
	},
	/**
	 * Update the value of the input-search putting the value of the current URL
	 * @return {void}
	 */
	hashToValue: function() {
		let value = window.location.hash.split('|')[0].split('=')[1];
		value = value.replace(/\+/g, ' ');
		SEARCH_TEXT_QUERY.val(value);
	},
	/**
	 * Insert and view Cards as result of the search
	 * @param {Freelancer} freelancer - Object Freelancer
	 * @param {String} card - HTML card string for DustJS
	 * @return {void}
	 */
	insertCard: function(freelancer, card) {
		let distance;
		if (!isNaN(freelancer.distance)) {
			distance = freelancer.distance + "km";
		} else {
			distance = "";
		}
		let time;
		if (freelancer.time) {
			time = SEARCH.writeTimeBetter(freelancer.time);
		} else {
			time = "";
		}
		let price;
		if (freelancer.price) {
			price = freelancer.price + "€";
		} else {
			price = "";
		}

		let data = {
			'freelancer': {
				'id': freelancer._id,
				'photo': freelancer.photo,
				'name': freelancer.firstName + " " + freelancer.lastName,
				'price': price,
				'distance': distance,
				'time': time,
				'tags': freelancer.tags,
				'score': FREELANCER.getHtmlRankStar({
					full: freelancer.score,
					empty: 5 - freelancer.score
				}),
				'googleMaps': freelancer.googleMaps
			}
		};

		dust.renderSource(card, data, function(err, out) {
			if (document.getElementById(freelancer._id))
				return;
			MAIN_JS.insertAdjacentHTML('beforeend', out);

			let link = document.getElementById(freelancer._id).getElementsByTagName('button')[0];
			link.addEventListener('click', SEARCH.selectProfile);
		});
	},

	checkInput: function(evt) {
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
		var regex = /[0-9]|\./;
		if (!regex.test(key)) {
			theEvent.returnValue = false;
			if (theEvent.preventDefault) theEvent.preventDefault();
		}
	},

	/**
	 * Change URL putting the id-freelancer in order to open the selected profile
	 * @param {EventListener} ev - event Listener
	 * @return {void}
	 */
	selectProfile: function(ev) {
		let elem = ev.target;
		let id = elem.parentNode.parentNode.id;

		let arrowsup = document.getElementsByClassName('up-arrow');
		for (arrow of arrowsup) {
			arrow.style.visibility = 'hidden';
		}
		let arrowsdown = document.getElementsByClassName('down-arrow');
		for (arrow of arrowsdown) {
			arrow.style.visibility = 'hidden';
		}

		window.location.hash = 'freelancer=' + id;
	},

	setFilterHash: function() {
		if (currentPage.name != 'search')
			return;

		let hashes = window.location.hash.split('|');

		let filterHash;
		for (let i in hashes) {
			if (hashes[i].split(':')[0] == 'filters') {
				filterHash = i;
				break;
			}
		}

		if (SEARCH.filters.emergency === undefined)
			SEARCH.filters.emergency = false;

		let hash = 'filters:type=' + SEARCH.filters.sort.type + '&btn=' + SEARCH.filters.sort.idBtn;
		hash += '&price=' + SEARCH.filters.price + '&distance=' + SEARCH.filters.distance;
		hash += '&emergency=' + SEARCH.filters.emergency;

		if (filterHash) {
			hashes[filterHash] = hash;
		} else {
			hashes.push(hash);
		}

		window.location.hash = hashes.join('|');
	},

	getFilterHash: function() {
		let hashes = window.location.hash.split('|');

		let hash;
		for (let h of hashes) {
			if (h.split(':')[0] == 'filters') {
				hash = h.split(':')[1];
				break;
			}
		}

		if (hash) {
			hash = hash.split('&');
			let hashObj = {};
			for (let h of hash) {
				hashObj[h.split('=')[0]] = h.split('=')[1];
			}

			let priceInput = document.getElementById("price-input");
			let distanceInput = document.getElementById("distance-input");
			if (hashObj.price != undefined)
				priceInput.value = hashObj.price;
			if (hashObj.distance != undefined)
				distanceInput.value = hashObj.distance;
			if (hashObj.emergency != undefined) {
				SEARCH.filters.emergency = hashObj.emergency;
				document.getElementById('emergency-btn').dataset.value = hashObj.emergency;
				if (hashObj.emergency.toString() == 'true') {
					document.getElementById('emergency-btn').style.backgroundColor = 'red';
				}
			}
			SEARCH.filters.sort.idBtn = hashObj.btn;
			SEARCH.filters.sort.type = hashObj.type;
		}


	},

	spinner: `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`,
}
