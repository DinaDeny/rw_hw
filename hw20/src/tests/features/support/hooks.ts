import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before<CustomWorld>(async function () {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After<CustomWorld>(async function () {
    await this.page?.close();
    await this.browser?.close();
});
