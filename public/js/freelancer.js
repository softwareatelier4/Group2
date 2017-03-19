const FREELANCER = {

	name: 'freelancer',

	init: function() {
		console.log('Freelancer - initialization');

		SEARCH.searchHeader();

		let main = document.getElementById('main');
		main.style.display = "inherit";
		main.style.backgroundColor = "rgb(231, 231, 231)";

		MAIN_QUERY.load('/html/freelancer.html');
	},

	remover: function() {

	}
}
