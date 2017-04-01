module.exports = {
   'Review from homepage': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Nevio Valsangiacomo')
         .click('span[id=basic-addon1]')
         .pause(500)
         .waitForElementVisible('main[id=main-content]', 1000)
         .waitForElementVisible('div[id=f00000000000000000000001]', 1000)
         .waitForElementVisible('#f00000000000000000000001 .card-block a', 1000)
         .click('#f00000000000000000000001 .card-block a')
         .waitForElementVisible('#profile-freelancer', 1000)
         .pause(500)
         .waitForElementVisible('div[name=c00000000000000000000002]', 1000)
         .getText("div[name=c00000000000000000000002] h5", function(result) {
            this.assert.equal(result.value, "R2");
         })
         .assert.visible('div[name=c00000000000000000000005]')
         .click('[name=c00000000000000000000005] .card-block button')
         .pause(500)
         .setValue('[name=c00000000000000000000005] .card-block form .form-group textarea', 'This is a nightwatch test')
         .pause(500)
         .click('[name=c00000000000000000000005] .card-block form button')
         .pause(500)
         .waitForElementVisible('[name=c00000000000000000000005] .card-block .reply .card-block p', 1000)
         .getText("[name=c00000000000000000000005] .card-block .reply .card-block p", function(result) {
            this.assert.equal(result.value, "This is a nightwatch test");
         })
         .end();
   }
};
