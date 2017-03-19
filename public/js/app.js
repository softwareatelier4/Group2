let currentPage;
const MAIN_QUERY = $('#main-content');
const SEARCH_TEXT_QUERY = $('#search-text');
const MAIN_JS = document.getElementById('main-content');

$(document).ready(function() {
	window.addEventListener("hashchange", hashchanged);

	// when page load
	hashchanged()
});

let hashchanged = function hashchanged() {
	let hash = (window.location.hash != '') ? window.location.hash.split('#')[1].split('=')[0] : '';

	if (currentPage) {
		if (currentPage.name == hash) {
			return;
		}
		currentPage.remover();
	}

	console.log('page loaded or change url');
	switch (hash) {
		case 'search':
			currentPage = search;
			break;

		default:
			// No hash
			currentPage = homepage;
	}

	currentPage.init();

}
