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

	console.log('page loaded or change url: ' + hash);
	switch (hash) {
		case 'search':
			currentPage = SEARCH;
			break;

		case 'freelancer':
			currentPage = FREELANCER;
			break;

		default:
			// No hash
			currentPage = HOMEPAGE;
	}

	currentPage.init();

}

// returns html
let renderTemplateString = function(html, string, label) {

	const startTag = "{?" + label + "}";
	const endTag = "{?" + label + "/}";
	const startBloc = html.indexOf(startTag);
	const endBloc = html.indexOf(endTag) + endTag.length;

	if (string && startBloc != -1) {
		html = html
			.replace(startTag, '')
			.replace(endTag, '')
			.replace(new RegExp('{' + label + '}', 'g'), string);
	} else if (!string && startBloc != -1) {
		html = html.substring(0, startBloc) + html.substring(endBloc, html.length);
	} else {
		html = html.replace('{' + label + '}', string);
	}

	return html;
}

let renderTemplateArray = function(html, array, label) {

	const startTag = "{?" + label + "}";
	const endTag = "{?" + label + "/}";
	const startBloc = html.indexOf(startTag);
	const endBloc = html.indexOf(endTag) + endTag.length;

	const startArray = "{[" + label + "}";
	const endArray = "{" + label + "]}";
	const indexStartArray = html.indexOf(startArray) + startArray.length;
	const indexEndArray = html.indexOf(endArray);
	const htmlArray = html.substring(indexStartArray, indexEndArray);

	if (array.length != 0 && startBloc != -1) {
		let displayHtml = '';
		for (elem of array) {
			displayHtml += htmlArray.replace(new RegExp('{' + label + '}', 'g'), elem);
		}

		html = html
			.replace(startTag, '')
			.replace(endTag, '')
			.replace(startArray, '')
			.replace(endArray, '')
			.replace(htmlArray, displayHtml);

	} else if (array.length == 0 && startBloc != -1) {
		html = html.substring(0, startBloc) + html.substring(endBloc, html.length);
	}

	return html;
}
