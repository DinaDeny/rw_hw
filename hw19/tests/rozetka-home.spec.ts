import { expect } from '@playwright/test';
import { test } from './fixtures/rozetka-page-fixture';

test.describe('Rozetka home page test', () => {
    test('should display ui elements', async ({ homePage }) => {
        await expect(homePage.searchInput).toBeVisible();
        await expect(homePage.categoryMenu).toBeVisible();
        await expect(homePage.cartIconButton).toBeVisible();
        await expect(homePage.loginIconButton).toBeVisible();
        await expect(homePage.bannerSlider).toBeVisible();
        await expect(homePage.burgerMenuIcon).toBeVisible();
    });

    test('should open login modal', async ({ homePage }) => {
        await homePage.waitForTimeout(3000);
        await homePage.navigateToLoginModal();
        await expect(homePage.loginModal).toBeVisible();
    });
});
