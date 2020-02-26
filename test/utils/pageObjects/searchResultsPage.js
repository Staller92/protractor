const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
  constructor() {
    super();
    this.slickSliderXpath = '//*[contains(@class,"slick-slider")]';
    this.filterCheckBoxesXpath = '//*[contains(@class,"checkmark")]';
  };

  async getSlickSlider() {
    return element(by.xpath(this.slickSliderXpath));
  };

  getFilterCheckBoxes() {
    return element.all(by.xpath(this.filterCheckBoxesXpath));
  };

  async getCountFilterCheckBoxes() {
    const filterCheckBoxes = this.getFilterCheckBoxes();
    return await filterCheckBoxes.count();
  };
}

module.exports = SearchResultsPage;
