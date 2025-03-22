import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class RozetkaPage {
    public async goTo(url: string): Promise<void> {
        await browser.url(url);
    }

    public getElementBySelector(selector: string): ChainablePromiseElement {
        return $(selector);
    }

    public async getElementTextContent(selector: string): Promise<string> {
        const element = this.getElementBySelector(selector);
        return await element.getText();
    }

    public async clickElement(selector: string): Promise<void> {
        const element = this.getElementBySelector(selector);
        await element.click();
    }

    public async getPageUrl(): Promise<string> {
        return await browser.getUrl();
    }
}
