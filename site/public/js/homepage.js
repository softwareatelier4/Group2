const HOMEPAGE = {

	name: 'homepage',

	/**
	 * Initialize search bar (full screen)
	 * @return {void}
	 */
	init: function() {

		SEARCH.searchFullScreen();
		SEARCH.addon_init();
	},

	/**
	 * Remove not needed listeners from the search bar
	 * @return {void}
	 */
	remover: function() {
		SEARCH.remover();
	}
}
