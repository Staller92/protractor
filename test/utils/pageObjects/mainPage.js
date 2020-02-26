const BasePage = require('./basePage');
const SearchResultsPage = require('./searchResultsPage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.westerndigital.com';
    this.searchButtonXpath = '//*[contains(@class,"searchbutton")]';
    this.searchInputXpath = '//*[@id="searchright"]';
  };

  async open() {
    await super.open(this.url);
    return this;
  };

  async clickOnSearchButton() {
    await this.click(by.xpath(this.searchButtonXpath));
    return this;
  };

  async inputSearchField(text) {
    const searchInput = await element(by.xpath(this.searchInputXpath));
    await searchInput.sendKeys(text);
    await searchInput.submit();
    return new SearchResultsPage();
  };
}

module.exports = MainPage;
