module.exports = {
	'indexUI Tests': function(page) {
		page
			.url('http://127.0.0.1:3000/#search=Marco')
			.pause(1000)
			.source(function(result) {
				// Source will be stored in result.value
				console.log(result.value);
			})
			.end();
	}
};
