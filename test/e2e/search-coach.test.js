const URL = 'localhost:3000'
const WAIT_DEFAULT = 1000

module.exports = {
  'Search a coach by name' : function (browser) {
    browser
      .url(URL)
      .waitForElementVisible('body', WAIT_DEFAULT)
      .setValue('#searchForm input[name=q]', 'pep')
      .click('#searchForm button')
      .pause(WAIT_DEFAULT)

      .assert.containsText('.people .person h4', 'Pep Guardiola')
      .end();
  },

  'Like coaches in result list': function (browser) {
    browser
      .url('localhost:3000')
      .waitForElementVisible('body', WAIT_DEFAULT)
      .setValue('#searchForm input[name=q]', 'pep')
      .click('#searchForm button')

      .waitForElementVisible('#results', WAIT_DEFAULT)
      .waitForElementVisible('.people .person', WAIT_DEFAULT)
      .click('.people:first-child .person .like')

      .waitForElementVisible('#liked', WAIT_DEFAULT)
      .assert.containsText('#liked li', 'Pep Guardiola')

      .end();
  }
};
