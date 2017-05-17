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
			.setValue('input[id=search-text]', 'Design')
			.pause(100)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000046]', 1000)
			.waitForElementVisible('#f00000000000000000000046', 1000)
			.pause(200)
			.click('#f00000000000000000000046 .card-block button')
			.waitForElementVisible('#profile-freelancer', 1000)
			.pause(100)
			.waitForElementVisible('#main-info', 2000)
			.assert.visible('#main-info')
			.assert.visible('#main-info-vertical')
			.assert.visible('#info-name')
			.assert.visible('.info-name-top')
			.getText("div[class=info-name-top] span", function(result) {
				this.assert.equal(result.value, "Roberta Souto");
			})
			.assert.visible('span[id=city-freelancer]')
			.getText("div[class=info-name-top] span a", function(result) {
				this.assert.equal(result.value, "Lugano");
			})
			.assert.hidden('div[id=info-name-bottom]')
			.assert.visible('div[id=rank]')

			//contact
			.assert.visible('div[id=contact-info-top]')
			.assert.visible('div[id=contact-info-top] #email')
			.getText("div[id=contact-info-top] #email", function(result) {
				this.assert.equal(result.value, "roberta.souto@gmail.com");
			})
			.assert.hidden('div[id=contact-info-top] #phone')

			//main info bottom
			.assert.visible('div[id=main-info-bottom]')
			.assert.visible('div[id=info-review]')
			.assert.visible('div[id=info]')
			.getText("div[id=info] h5", function(result) {
				this.assert.equal(result.value, "INFO");
			})
			.assert.visible('div[id=tag]')
			.getText("div[id=tag] span:nth-child(1)", function(result) {
				this.assert.equal(result.value, "Design");
			})
			.getText("div[id=tag] span:nth-child(2)", function(result) {
				this.assert.equal(result.value, "Packaging Design");
			})
			.getText("div[id=tag] span:nth-child(3)", function(result) {
				this.assert.equal(result.value, "Graphic Designer");
			})
			.getText("div[id=tag] span:nth-child(4)", function(result) {
				this.assert.equal(result.value, "Adobe Photoshop");
			})
			.getText("div[id=tag] span:nth-child(5)", function(result) {
				this.assert.equal(result.value, "Digital Photography");
			})
			.getText("div[id=tag] span:nth-child(6)", function(result) {
				this.assert.equal(result.value, "Illustration");
			})
			.getText("div[id=tag] span:nth-child(7)", function(result) {
				this.assert.equal(result.value, "Branding");
			})

			.getText("div[id=price]", function(result) {
				this.assert.equal(result.value, "€105 price/hour");
			})

			//description
			.assert.visible('div[id=info] span')
			.getText("span[id=description]", function(result) {
				this.assert.equal(result.value, "About the Designer: Roberta Souto, 36, Industrial Designer graduate from ESDI/ UERJ (Rio de Janeiro, RJ - Brazil) with a 5-year BA degree. I have almost 10 years experience working with packaging and I have knowledge in both graphic design and product design. One of my designs was a finalist at the 2012 HBA International Package Design Awards in New York City. Before that I was the head designer, product developer and creative director of a manufacturer for 5 years, working with worldwide retail chains like TJ Maxx, Bath Bed & Beyond, Petsmart and Toys R Us to name a few, besides coordinating production in a equally global level. My background in Industrial Design helps me to not limit myself to just one field of design and I have worked with everything from brochures to dog toys to food packaging. I have had the great opportunity to work with large retail chains as well as small start-ups. I'm a creative person, but I'm also very interested in business topics and one of my passions is to support small businesses to take their products and services to the next level.");
			})

			//review
			.assert.visible('div[id=reviews]')
			.getText("div[id=reviews] h5", function(result) {
				this.assert.equal(result.value, "REVIEW");
			})

			.assert.visible('div[id=cardReviews]')
			.assert.visible('div[class=title-author-review]')
			.assert.visible('div[id=score-name]')
			.getText("div[name=c00000000000000000000025] div[id=score-name] h5", function(result) {
				this.assert.equal(result.value, "");
			})
			.getText("div[name=c00000000000000000000025] h6[id=review-user]", function(result) {
				this.assert.equal(result.value, "Nicholas Gerard");
			})
			.assert.hidden('div[name=c00000000000000000000025] p[id=review-description]')

			.assert.hidden('div[name=c00000000000000000000024] div[id=photo-review]')

			.getText("div[name=c00000000000000000000024] div[id=score-name] h5", function(result) {
				this.assert.equal(result.value, "Best designer ever!");
			})
			.getText("div[name=c00000000000000000000024] h6[id=review-user]", function(result) {
				this.assert.equal(result.value, "Lorenzo Didone");
			})
			.assert.visible('div[name=c00000000000000000000024] p[id=review-description]')
			.getText("div[name=c00000000000000000000024] p[id=review-description]", function(result) {
				this.assert.equal(result.value, "What a great experience. We received some extremely creative and original packaging designs from a talented designer. She was great to work with and all of their work was first class. I would recommend her to anyone looking for top notch designers.");
			})
			.assert.hidden('div[name=c00000000000000000000024] div[id=photo-review]')

			//works
			.assert.visible('div[id=img-freelancer]')
			.assert.visible('div[id=works]')
			.getText("div[id=works] h5", function(result) {
				this.assert.equal(result.value, "WORKS");
			})
			.assert.visible('div[id=thumbnail]')


			//test if there is an emergency
			.assert.visible('span[id=disabled-emergency-sign]')
			.end();
	},

	'Freelancer profile test-2': function(client) { //da qui
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.pause(100)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'da')
			.pause(100)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000003]', 1000)
			.waitForElementVisible('#f00000000000000000000003', 1000)
			.pause(200)
			.click('#f00000000000000000000003 .card-block button')
			.pause(200)
			.waitForElementVisible('#main-info', 2000)
			.assert.visible('#main-info')
			.assert.visible('#main-info-vertical')
			.assert.visible('#info-name')
			.assert.visible('.info-name-top')
			.getText("div[class=info-name-top] span", function(result) {
				this.assert.equal(result.value, "Daniele LoPred");
			})
			.assert.visible('span[id=city-freelancer]')
			.assert.hidden('div[id=info-name-bottom]')
			.assert.visible('div[id=rank]')
			//contact
			.assert.visible('div[id=contact-info-top]')
			.assert.visible('div[id=contact-info-top] #chat')
			.getText("div[id=contact-info-top] #chat", function(result) {
				this.assert.equal(result.value, "chat");
			})
			.assert.visible('div[id=contact-info-top] #email')
			.getText("div[id=contact-info-top] #email", function(result) {
				this.assert.equal(result.value, "lopred@usi.ch");
			})
			.assert.visible('div[id=contact-info-top] #phone')
			.getText("div[id=contact-info-top] #phone", function(result) {
				this.assert.equal(result.value, "+4107362864");
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
				this.assert.equal(result.value, "House Painter");
			})
			.getText("div[id=tag] span:nth-child(2)", function(result) {
				this.assert.equal(result.value, "Vetraio");
			})
			.getText("div[id=tag] span:nth-child(3)", function(result) {
				this.assert.equal(result.value, "Carpentiere");
			})

			//description
			.assert.visible('div[id=info] span')
			.assert.visible("span[id=description]")

			//review
			.assert.visible('div[id=reviews]')
			.getText("div[id=reviews] h5", function(result) {
				this.assert.equal(result.value, "REVIEW");
			})

			.assert.visible('div[id=cardReviews]')
			.assert.visible('div[class=title-author-review]')
			.assert.visible('div[id=score-name]')
			.getText("div[id=score-name] h5", function(result) {
				this.assert.equal(result.value, "R1");
			})
			.getText("h6[id=review-user]", function(result) {
				this.assert.equal(result.value, "Marco Tollini");
			})
			.assert.visible('p[id=review-description]')
			.getText("p[id=review-description]", function(result) {
				this.assert.equal(result.value, "Mi ha lasciato il muro imbiancato a metá!!!!!!!!!!!!!!!!!!!!!!!!!! :O");
			})
			.getText("div[id=price]", function(result) {
				this.assert.equal(result.value, "€10 price/hour");
			})
			.assert.hidden('div[id=photo-review]')

			//test if there is an emergency
			.assert.visible('span[id=disabled-emergency-sign]')

			//test validification claim
			.assert.visible('i[id=verified-sign]')
			.end();
	}
};
