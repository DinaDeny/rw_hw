import { test, expect } from '@playwright/test';
import { TrackerPage } from '../src/pages/tracker-page';

test.describe('Expense Tracker tests', () => {
    test('ui elements should be visible', async ({ page }) => {
        const trackerPage = new TrackerPage(page);

        trackerPage.navigateToPage(process?.env?.BASE_URL || '');

        await expect(trackerPage.pageTitle).toBeVisible();
        await expect(trackerPage.pageTitle).toHaveText('Expense Tracker App');
        await expect(trackerPage.incomeExpenseContainer).toBeVisible();
        await expect(trackerPage.descriptionInput).toBeVisible();
        await expect(trackerPage.transactionAmountInput).toBeVisible();
        await expect(trackerPage.addTransactionButton).toBeVisible();
    });
});
