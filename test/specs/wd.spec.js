const {expect} = require('chai');
const MainPage = require('../utils/pageObjects/mainPage');

describe('Home page search', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(true);
    browser.manage().timeouts().implicitlyWait(2000);
    return browser.manage().window().maximize();
  });

  it('Main page should be opened', async function() {
    const mainPage = await new MainPage().open();
    const url = await mainPage.getCurrentUrl();
    expect(url, 'Url of the page is not correct').to.be.equal('https://shop.westerndigital.com/');
  });

  it('Slick slider should be displayed', async function() {
    const mainPage = await new MainPage().open();
    await mainPage.clickOnSearchButton();
    const searchResultsPage = await mainPage.inputSearchField('disk');
    const slickSlider = await searchResultsPage.getSlickSlider();
    await browser.sleep(5000); // todo add waiter here
    const isSlickSliderPresent = await slickSlider.isPresent();
    expect(isSlickSliderPresent, 'Slick slider is not displayed').to
        .be.equal(true);
  });

  it('Filter should have 7 checkbox items', async function() {
    const mainPage = await new MainPage().open();
    await mainPage.clickOnSearchButton();
    const searchResultsPage = await mainPage.inputSearchField('disk');
    await browser.sleep(5000); // todo add waiter here
    const count = await searchResultsPage.getCountFilterCheckBoxes();
    expect(count, '7 checkbox items are not displayed').to.be.equal(7);
  });

  it('Should display the popover-content on mouseover', async function() {
    const mainPage = await new MainPage().open();
    await mainPage.Header.mouseOverShopButton();
    await mainPage.Header.mouseOverSanDiskButton();
    const productsTitles = await mainPage.Header.getAllSanDiskProductTitles();
    expect(productsTitles.includes('Portable Drives')).to.be.equal(true);
  });
});

