const HOMEPAGE = {

	name: 'homepage',

	init: function() {
		console.log('Homepage - initialization');

		SEARCH.searchFullScreen();
		SEARCH.hashUpdater();
	},

	remover: function() {
		SEARCH.remover();
	}
}
