import { Locator, Page } from '@playwright/test';

export class PravdaPage {
    public readonly page: Page;

    public get mainLogo(): Locator {
        return this.page.locator('div.main_logo > a');
    }

    public get topNavigation(): Locator {
        return this.page.locator('.container_top_nav');
    }

    public get mainMenuNavigation(): Locator {
        return this.page.locator('.container_main_nav > ul');
    }

    public constructor(page: Page) {
        this.page = page;
    }

    public async navigateToPage(): Promise<void> {
        await this.page.goto('https://www.pravda.com.ua/', { waitUntil: 'domcontentloaded' });
    }
}
