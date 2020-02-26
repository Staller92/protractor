const {expect} = require('chai');
const MainPage = require('../utils/pageObjects/mainPage');

describe('Home page search', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(1000);
    return browser.manage().window().maximize();
  });

  xit('Main page should be opened', async function() {
    const mainPage = await new MainPage().open();
    const url = await mainPage.getCurrentUrl();
    expect(url, 'Url of the page is not correct').to.be.equal('https://shop.westerndigital.com/');
  });

  xit('Slick slider should be displayed', async function() {
    const mainPage = await new MainPage().open();
    await mainPage.clickOnSearchButton();
    const searchResultsPage = await mainPage.inputSearchField('disk');
    const slickSlider = await searchResultsPage.getSlickSlider();
    const isSlickSliderPresent = await slickSlider.isPresent();
    expect(isSlickSliderPresent, 'Slick slider is not displayed').to
        .be.equal(true);
  });

  it('Filter should have 7 checkbox items', async function() {
    const mainPage = await new MainPage().open();
    await mainPage.clickOnSearchButton();
    const searchResultsPage = await mainPage.inputSearchField('disk');
    const count = await searchResultsPage.getCountFilterCheckBoxes();
    expect(count, '7 checkbox items are not displayed').to.be.equal(7);
  });

  it('Should display the popover-content on mouseover', async function() {
    const mainPage = await new MainPage().open();
    // browser.waitForAngular();
    await mainPage.Header.mouseOverShopButton();
    await mainPage.Header.mouseOverSanDiskButton();
    const productsTitles = await mainPage.Header.getAllSanDiskProductTitles();
    expect(productsTitles.includes('Portable Drives')).to.be.equal(true);
  });
});

