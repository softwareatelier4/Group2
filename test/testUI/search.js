module.exports = {
   'Search no-filter test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Informatico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Informatico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000006]')
         .end();
   },
   'Search filter test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Developer')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Developer')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('span[id=btn-distance]')
         .click('span[id=btn-distance]')
         .pause(500)
         .assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .clearValue('input[id=search-text]')
         .end();
   },
   'Search more than one filter test': function(client) {

   }
};
