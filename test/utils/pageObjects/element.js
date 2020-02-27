const EC = require('protractor').ExpectedConditions;

class Element {
  constructor(name, xpath) {
    this.name = name;
    this.element = element(by.xpath(xpath));
  };

  async click() {
    return this.element.click();
  };

  async getText() {
    return this.element.getText();
  };

  async typeText(text) {
    return this.element.sendKeys(text);
  };

  async submit() {
    return this.element.submit();
  };

  async mouseOver() {
    return browser.actions().mouseMove(this.element).perform();
  };

  async isElementDisplayed() {
    return this.element.isDisplayed();
  };

  async waitForElementVisible() {
    return browser.wait(EC.visibilityOf(this.element), 10000);
  };
}

module.exports = Element;
