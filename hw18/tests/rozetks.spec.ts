import { RozetkaPage } from 'src/rozetka';
import { expect, test } from '@playwright/test';

test.describe.serial('Playwright Rozetka Tests', () => {
    let savedUrl = '';

    test('Should find first item in the recommended list', async ({ page }) => {
        const rozetkaPage = new RozetkaPage(page);

        await rozetkaPage.goToMainPage();

        const recommendedItem = rozetkaPage.firstRecommendedItem;
        await expect(recommendedItem).toBeVisible();

        const titleElement = rozetkaPage.firstRecommendedItemTitle;
        await expect(titleElement).toBeVisible();

        const textFromElement = await titleElement.textContent();
        await recommendedItem.click();

        const firstRecommendedItemAboutTitle = rozetkaPage.firstRecommendedItemAboutTitle;
        await expect(firstRecommendedItemAboutTitle).toBeVisible();

        savedUrl = rozetkaPage.getPageUrl();

        const selectedText = await firstRecommendedItemAboutTitle.textContent();
        expect(selectedText?.trim()).toContain(textFromElement?.trim());
    });

    test('should check elements on the page', async ({ page }) => {
        const rozetkaPage = new RozetkaPage(page);

        await rozetkaPage.goToPage(savedUrl);

        const productDetailsPageUrl = rozetkaPage.getPageUrl();

        expect(productDetailsPageUrl).toBe(savedUrl);

        const itemProductName = rozetkaPage.productDetailsName;
        await expect(itemProductName).toBeVisible();

        const itemMainPhoto = rozetkaPage.productDetailsPhoto;
        await expect(itemMainPhoto).toBeVisible();

        const itemCartButton = rozetkaPage.productDetailsCartButton;
        await expect(itemCartButton).toBeVisible();

        const itemMoreProductInfo = rozetkaPage.productDetailsProductInfo;
        await expect(itemMoreProductInfo).toBeVisible();
    });
});
