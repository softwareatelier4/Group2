let currentPage;
const MAIN_QUERY = $('#main-content');
const SEARCH_TEXT_QUERY = $('#search-text');
const FILTER_DISTANCE_QUERY = $('#distance-input');
const FILTER_PRICE_QUERY = $('#price-input');
const MAIN_JS = document.getElementById('main-content');
const MAIN_DIV = document.getElementById('main');
const SORTING_OPTIONS = document.getElementById('sorting-buttons');

let userPosition = {
	method: null,
	city: null,
	state: null,
	longitude: null,
	latitude: null,
	time: null,
	onChangeCall: [
		SEARCH.setPosition,
		FAVORITE.setPosition
	]
}

$(document).ready(function() {
	window.addEventListener("hashchange", hashchanged);

	// when page load
	hashchanged();

	drawMenu();
	UTILS.geoLocation();
});

/**
 * Called to check if a user is logged
 * @return {freelancer}
 */
let isLogged = function(cb) {
	doJSONRequest("GET", "/api/passport/islogged", null, null, function(res) {
		cb(res);
	});
}

/**
 * Called each time the hash changes and when a user open the page
 * @return {void}
 */
let hashchanged = function hashchanged() {
	let hash = (window.location.hash != '') ? window.location.hash.split('#')[1].split('=')[0] : '';

	if (currentPage) {
		if (currentPage.name == hash) {
			return;
		}
		currentPage.remover();
	}

	console.log('page loaded or change url: ' + hash);
	switch (hash) {
		case 'search':
			currentPage = SEARCH;
			break;

		case 'freelancer':
			currentPage = FREELANCER;
			break;

		case 'favorite':
			currentPage = FAVORITE;
			break;

		default:
			// No hash
			currentPage = HOMEPAGE;
	}

	currentPage.init();
}
