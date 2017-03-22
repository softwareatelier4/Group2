module.exports = {
	'indexUI Tests': function(page) {
		page
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.source(function(result) {
				// Source will be stored in result.value
				console.log(result.value);
			})
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Marco')
			.click('span[id=basic-addon1]')
			.pause(1000)
			.source(function(result) {
				// Source will be stored in result.value
				console.log(result.value);
			})
			.waitForElementVisible('main[id=main-content]', 1000)
			.source(function(result) {
				// Source will be stored in result.value
				console.log(result.value);
			})
			.waitForElementVisible('div[id=f00000000000000000000000]', 1000)
			.end();
	}
};
