import { browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class RozetkaPage {
    private url = 'https://rozetka.com.ua/';

    private getElementBySelector(selector: string): ChainablePromiseElement {
        return browser.$(selector);
    }

    public get signInElement(): ChainablePromiseElement {
        return this.getElementBySelector('//button[@name="sign-in"] | //div[@data-testid="main-container"]');
    }

    public async goToMainPage(): Promise<void> {
        await browser.url(this.url);

        this.signInElement.waitForStable();
    }

    public async getPageUrl(): Promise<string> {
        return await browser.getUrl();
    }

    public async goToPage(url: string): Promise<void> {
        await browser.url(url);
    }

    public get firstRecommendedItem(): ChainablePromiseElement {
        return this.getElementBySelector('rz-section-tiles-block-best rz-product-tile:nth-child(1)');
    }

    public get firstRecommendedItemTitle(): ChainablePromiseElement {
        return this.getElementBySelector('rz-section-tiles-block-best rz-product-tile:nth-child(1) .text-base');
    }

    public get firstRecommendedItemAboutTitle(): ChainablePromiseElement {
        return this.getElementBySelector('.product-about__right-inner h1');
    }

    public get productDetailsName(): ChainablePromiseElement {
        return this.getElementBySelector('rz-title-block h1');
    }

    public get productDetailsPhoto(): ChainablePromiseElement {
        return this.getElementBySelector('rz-gallery-main-content-image > img');
    }

    public get productDetailsCartButton(): ChainablePromiseElement {
        return this.getElementBySelector('rz-buy-button > button');
    }

    public get productDetailsProductInfo(): ChainablePromiseElement {
        return this.getElementBySelector('.product-about__left');
    }
}
