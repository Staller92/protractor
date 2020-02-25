class Header {
    constructor() {
        this.shopButtonXpath = '//*[contains(@id,"productStore")]';
        this.sanDiskButtonXpath = '//*[contains(@data-nav,"sandisk")]';
        this.allSanDiskProductItemsXpath = '//*[contains(@id,"sandisk")]//a';
    };

    getSanDiskButton() {
        return element(by.xpath(this.sanDiskButtonXpath));
    };

    getAllSanDiskProductItems() {
        return element.all(by.xpath(this.allSanDiskProductItemsXpath));
    };

    async getAllSanDiskProductTitles() {
        return await this.getAllSanDiskProductItems().getText();
    };

    getShopButton() {
        return element(by.xpath(this.shopButtonXpath));
    };

    async mouseOverShopButton() {
        return browser.actions().mouseMove(this.getShopButton()).perform();
    };

    async mouseOverSanDiskButton() {
        return browser.actions().mouseMove(this.getSanDiskButton()).perform();
    };
};

module.exports = Header;

