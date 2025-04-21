import { Locator, Page } from '@playwright/test';

export class TrackerPage {
    public readonly page: Page;

    public get pageTitle(): Locator {
        return this.page.locator('h2');
    }

    public get incomeExpenseContainer(): Locator {
        return this.page.locator('.inc-exp-container');
    }

    public get descriptionInput(): Locator {
        return this.page.locator('#description');
    }

    public get transactionAmountInput(): Locator {
        return this.page.locator('#transactionamount');
    }

    public get addTransactionButton(): Locator {
        return this.page.locator('form > button');
    }

    public constructor(page: Page) {
        this.page = page;
    }

    public async navigateToPage(url: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.page.goto(url, { waitUntil: 'load' });
    }
}
