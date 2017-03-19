let homepage = {

	name: 'homepage',

	init: function() {
		console.log('Homepage - initialization');

		search.searchFullScreen();
		search.hashUpdater();
	},

	remover: function() {
		search.remover();
	}
}
