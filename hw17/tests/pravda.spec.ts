import { expect } from '@wdio/globals';
import { PravdaPage } from 'src/pages/pravda';

describe('WebDriverIO pravda tests', () => {
    it('check ui that elements present', async () => {
        const pravdaPage = new PravdaPage();
        await pravdaPage.goToMainPage();

        const { mainLogo, topNavigation, mainMenuNavigation } = pravdaPage;

        await expect(mainLogo).toBePresent();
        await expect(mainLogo).toBeDisplayed();

        await expect(topNavigation).toBePresent();
        await expect(topNavigation).toBeDisplayed();

        await expect(mainMenuNavigation).toBePresent();
        await expect(mainMenuNavigation).toBeDisplayed();
    });
});
