import { expect } from '@playwright/test';
import { test } from './fixtures/pravda-home-fixture';

test.describe('Pravda page tests', () => {
    test('check ui that elements present', async ({ homePage }) => {
        const { mainLogo, topNavigation, mainMenuNavigation } = homePage;

        await expect(mainLogo).toBeVisible();

        await expect(topNavigation).toBeVisible();

        await expect(mainMenuNavigation).toBeVisible();
    });
});
