import { Locator, Page } from '@playwright/test';

export class RozetkaPage {
    private url = 'https://rozetka.com.ua/';
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private getElementBySelector(selector: string): Locator {
        return this.page.locator(selector);
    }

    public get logoElement(): Locator {
        return this.getElementBySelector('rz-main-header  a.header__logo');
    }

    public async goToMainPage(): Promise<void> {
        await this.page.goto(this.url);
        await this.logoElement.waitFor();
    }

    public getPageUrl(): string {
        return this.page.url();
    }

    public async goToPage(url: string): Promise<void> {
        await this.page.goto(url);
    }

    public get firstRecommendedItem(): Locator {
        return this.getElementBySelector('rz-section-tiles-block-best rz-product-tile:nth-child(1)');
    }

    public get firstRecommendedItemTitle(): Locator {
        return this.getElementBySelector('rz-section-tiles-block-best rz-product-tile:nth-child(1) .text-base');
    }

    public get firstRecommendedItemAboutTitle(): Locator {
        return this.getElementBySelector('.product-about__right-inner h1');
    }

    public get productDetailsName(): Locator {
        return this.getElementBySelector('rz-title-block h1');
    }

    public get productDetailsPhoto(): Locator {
        return this.getElementBySelector('rz-gallery-main-content-image > img');
    }

    public get productDetailsCartButton(): Locator {
        return this.getElementBySelector('rz-buy-button > button');
    }

    public get productDetailsProductInfo(): Locator {
        return this.getElementBySelector('.product-about__left > div > button');
    }
}
