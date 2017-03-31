module.exports = {
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
         // .pause(5000)
         // .assert.visible('div[id=f00000000000000000000000]')
         // .assert.visible('div[id=f00000000000000000000006]')
         // .assert.visible('span[id=btn-distance]')
         // .click('span[id=btn-distance]')
         // .pause(500)
         // .assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
         // .pause(1000)
         // .getAttribute("#main-content div:nth-child(1)", "id", "f00000000000000000000000")
         .clearValue('input[id=search-text]')
         .end();
   }
};
