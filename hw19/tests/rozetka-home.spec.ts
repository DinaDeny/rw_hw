import { expect } from '@playwright/test';
import { test } from './fixtures/rozetka-page-fixture';

test.describe('Rozetka home page test', () => {
    test('should display search input', async ({ homePage }) => {
        await expect(homePage.searchInput).toBeVisible();
    });

    test('should display category menu', async ({ homePage }) => {
        await expect(homePage.categoryMenu).toBeVisible();
    });

    test('should display the cart icon button', async ({ homePage }) => {
        await expect(homePage.cartIconButton).toBeVisible();
    });

    test('should display login icon button', async ({ homePage }) => {
        await expect(homePage.loginIconButton).toBeVisible();
    });

    test('should open login modal', async ({ homePage }) => {
        await homePage.waitForTimeout(3000);
        await homePage.navigateToLoginModal();
        await expect(homePage.loginModal).toBeVisible();
    });

    test('should display banner slider', async ({ homePage }) => {
        await expect(homePage.bannerSlider).toBeVisible();
    });

    test('burger menu should be visible', async ({ homePage }) => {
        await expect(homePage.burgerMenuIcon).toBeVisible();
    });
});
