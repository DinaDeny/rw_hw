import { test as baseTest } from '@playwright/test';
import { RozetkaHomePage } from 'src/pages/rozetka-home-page';

interface Fixtures {
    homePage: RozetkaHomePage;
}

export const test = baseTest.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new RozetkaHomePage(page);
        await homePage.navigateToPage();
        await use(homePage);
    }
});
