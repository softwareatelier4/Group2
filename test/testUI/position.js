module.exports = {
	'Check insertion of city-state search test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=position]', 'Lugano, Switzerland')
			.pause(1000)
			.click('span[id=basic-addon1]')
			.pause(1000)
			.assert.urlContains('city=Lugano')
			.assert.urlContains('state=Switzerland')
			.assert.urlContains('latitude=46.0134&longitude=8.9542')
			.end();
	}
};
