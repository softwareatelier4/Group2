'use strict';
var seedDb = require('../seedDb');
var utils = require('../utils');

module.exports = {
	beforeEach: (browser, done) => {
		seedDb.seed(done);
	},

	afterEach: (browser, done) => {
		utils.dropDbAndCloseConnection(done);
	},

	'Freelancer profile test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.pause(100)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Marco Tollini')
			.pause(100)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000000]', 1000)
			.waitForElementVisible('#f00000000000000000000000', 1000)
			.pause(200)
			.click('#f00000000000000000000000 .card-block button')
			.waitForElementVisible('#profile-freelancer', 1000)
			.pause(100)
			.waitForElementVisible('#main-info', 1000)
			.assert.visible('#main-info')
			.assert.visible('#main-info-vertical')
			.assert.visible('#info-name')
			.assert.visible('.info-name-top')
			.getText("div[class=info-name-top] span", function(result) {
				this.assert.equal(result.value, "Marco Tollini");
			})
			.assert.visible('span[id=city-freelancer]')
			.getText("div[class=info-name-top] span a", function(result) {
				this.assert.equal(result.value, "Lugano");
			})
			.assert.visible('div[id=info-name-bottom]')
			.getText("div[id=info-name-bottom]", function(result) {
				this.assert.equal(result.value, "Il Tollo");
			})
			.assert.visible('div[id=rank]')
			//contact
			.assert.visible('div[id=contact-info-top]')
			.assert.visible('div[id=contact-info-top] #chat')
			.getText("div[id=contact-info-top] #chat", function(result) {
				this.assert.equal(result.value, "chat");
			})
			.assert.visible('div[id=contact-info-top] #email')
			.getText("div[id=contact-info-top] #email", function(result) {
				this.assert.equal(result.value, "tollim@usi.ch");
			})
			.assert.visible('div[id=contact-info-top] #phone')
			.getText("div[id=contact-info-top] #phone", function(result) {
				this.assert.equal(result.value, "+39 380474747");
			})

			//main info bottom
			.assert.visible('div[id=main-info-bottom]')
			.assert.visible('div[id=info-review]')
			.assert.visible('div[id=info]')
			.getText("div[id=info] h5", function(result) {
				this.assert.equal(result.value, "INFO");
			})
			.assert.visible('div[id=tag]')
			.getText("div[id=tag] span:nth-child(1)", function(result) {
				this.assert.equal(result.value, "Developer");
			})
			.getText("div[id=tag] span:nth-child(2)", function(result) {
				this.assert.equal(result.value, "Informatico");
			})
			.getText("div[id=tag] span:nth-child(3)", function(result) {
				this.assert.equal(result.value, "Tecnico");
			})

			//description
			.assert.visible('div[id=info] span')
			.getText("span[id=description]", function(result) {
				this.assert.equal(result.value, "Hello guys! I am an amazing developer.");
			})

			//review
			.assert.visible('div[id=reviews]')
			.getText("div[id=reviews] h5", function(result) {
				this.assert.equal(result.value, "REVIEW");
			})

			.assert.visible('div[id=cardReviews]')
			.assert.visible('div[class=title-author-review]')
			.assert.visible('div[id=score-name]')
			.getText("div[id=score-name] h5", function(result) {
				this.assert.equal(result.value, "R2");
			})
			.getText("h6[id=review-user]", function(result) {
				this.assert.equal(result.value, "Costanza Fox");
			})
			.assert.visible('p[id=review-description]')
			.getText("p[id=review-description]", function(result) {
				this.assert.equal(result.value, "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).");
			})
			.getText("div[id=price]", function(result) {
				this.assert.equal(result.value, "€20 price/hour");
			})
			.assert.hidden('div[id=photo-review]')

			//works
			.assert.visible('div[id=img-freelancer]')
			.assert.visible('div[id=works]')
			.getText("div[id=works] h5", function(result) {
				this.assert.equal(result.value, "WORKS");
			})
			.assert.visible('div[id=thumbnail]')
			.end();
	}
};
