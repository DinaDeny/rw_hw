import { RozetkaPage } from 'src/pages/rozetka';
import { expect } from 'expect-webdriverio';

describe('WebDriverIO rozetka tests', () => {
    let savedUrl = '';
    let rozetkaPage: RozetkaPage;

    before(async () => {
        rozetkaPage = new RozetkaPage();
        await rozetkaPage.goToMainPage();
    });

    it('Should find first item in the recommended list', async () => {
        const recommendedItem = rozetkaPage.firstRecommendedItem;
        await expect(recommendedItem).toBeDisplayed();

        const titleElement = rozetkaPage.firstRecommendedItemTitle;
        await expect(titleElement).toBeDisplayed();

        const textFromElement = await titleElement.getText();

        await recommendedItem.click();

        const firstRecommendedItemAboutTitle = rozetkaPage.firstRecommendedItemAboutTitle;
        await expect(firstRecommendedItemAboutTitle).toBeDisplayed();

        savedUrl = await rozetkaPage.getPageUrl();

        const selectedText = await firstRecommendedItemAboutTitle.getText();

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
