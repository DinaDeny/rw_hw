import { browser } from '@wdio/globals';
import { RozetkaPage } from 'src/pages/rozetka';
import { expect } from 'expect-webdriverio';

describe('WebDriverIO rozetka tests', () => {
    let savedUrl = '';
    const URL = 'https://rozetka.com.ua/';
    let rozetkaPage: RozetkaPage;

    before(async () => {
        await browser.url(URL);
        rozetkaPage = new RozetkaPage();
    });

    it('Should find first item in the recommended list', async () => {
        await rozetkaPage.goTo(URL);

        const itemSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1)';
        const titleSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1) .text-base';
        const selectedTitleSelector = '.product-about__right-inner h1';

        const element = rozetkaPage.getElementBySelector(itemSelector);
        await expect(element).toBeDisplayed();

        const titleElement = rozetkaPage.getElementBySelector(titleSelector);
        await expect(titleElement).toBeDisplayed();

        const textFromElement = await rozetkaPage.getElementTextContent(titleSelector);

        await rozetkaPage.clickElement(itemSelector);

        const selectedTitleVisible = rozetkaPage.getElementBySelector(selectedTitleSelector);
        await expect(selectedTitleVisible).toBeDisplayed();

        savedUrl = await rozetkaPage.getPageUrl();

        const selectedText = await rozetkaPage.getElementTextContent(selectedTitleSelector);

        await expect(selectedText?.trim()).toContain(textFromElement?.trim());

        console.log(savedUrl);
    });

    it('should check elements on the page', async () => {
        await rozetkaPage.goTo(savedUrl);

        const itemProductNameSelector = 'rz-title-block h1';
        const itemMainPhotoSelector = 'rz-gallery-main-content-image > img';
        const itemCartButtonSelector = 'rz-buy-button > button';
        const itemMoreProductInfoSelector = '.product-about__left > div > button';

        const itemProductName = rozetkaPage.getElementBySelector(itemProductNameSelector);
        await expect(itemProductName).toBeDisplayed();

        const itemMainPhoto = rozetkaPage.getElementBySelector(itemMainPhotoSelector);
        await expect(itemMainPhoto).toBeDisplayed();

        const itemCartButton = rozetkaPage.getElementBySelector(itemCartButtonSelector);
        await expect(itemCartButton).toBeDisplayed();

        const itemMoreProductInfo = rozetkaPage.getElementBySelector(itemMoreProductInfoSelector);
        await expect(itemMoreProductInfo).toBeDisplayed();
    });
});
