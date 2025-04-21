import { test as baseTest } from '@playwright/test';
import { PravdaPage } from 'src/pages/pravda-page';

interface Fixtures {
    homePage: PravdaPage;
}

export const test = baseTest.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new PravdaPage(page);
        await homePage.navigateToPage();
        await use(homePage);
    }
});
