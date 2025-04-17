import { RozetkaPage } from 'src/pages/rozetka';
import { expect } from 'expect-webdriverio';

describe('WebDriverIO rozetka tests', () => {
    let savedUrl = '';
    let rozetkaPage: RozetkaPage;

    beforeEach(async () => {
        rozetkaPage = new RozetkaPage();
        await rozetkaPage.goToMainPage();
    });

    it('Should find first item in the recommended list', async () => {
        await expect(rozetkaPage.firstRecommendedItem).toBeDisplayed();

        await expect(rozetkaPage.firstRecommendedItemTitle).toBeDisplayed();

        const textFromElement = await rozetkaPage.firstRecommendedItemTitle.getText();

        await rozetkaPage.firstRecommendedItem.click();

        await expect(rozetkaPage.firstRecommendedItemAboutTitle).toBeDisplayed();

        savedUrl = await rozetkaPage.getPageUrl();

        const selectedText = await rozetkaPage.firstRecommendedItemAboutTitle.getText();

        await expect(selectedText?.trim()).toContain(textFromElement?.trim());
    });

    it('should check elements on the page', async () => {
        await rozetkaPage.goToPage(savedUrl);

        const productDetailsPageUrl = await rozetkaPage.getPageUrl();

        expect(productDetailsPageUrl).toBe(savedUrl);

        const itemProductName = rozetkaPage.productDetailsName;
        await expect(itemProductName).toBeDisplayed();

        const itemMainPhoto = rozetkaPage.productDetailsPhoto;
        await expect(itemMainPhoto).toBeDisplayed();

        const itemCartButton = rozetkaPage.productDetailsCartButton;
        await expect(itemCartButton).toBeDisplayed();

        const itemMoreProductInfo = rozetkaPage.productDetailsProductInfo;
        await expect(itemMoreProductInfo).toBeDisplayed();
    });
});
