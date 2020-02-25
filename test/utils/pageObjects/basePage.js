const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    }

    async open(url) {
        return browser.get(url);
    };

    async click(locator) {
        return await element(locator).click();
    };

    async getCurrentUrl() {
        return await browser.getCurrentUrl();
    };
};

module.exports = BasePage;