import { Page, Locator } from 'playwright';

export class RozetkaPage {
    public readonly page: Page;
    public readonly searchInput: Locator;
    public readonly productTitles: Locator;
    public readonly firstLaptopItem: Locator;
    public readonly cartIconButton: Locator;
    public readonly selectedCartItemTitle: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[name="search"]');
        this.productTitles = page.locator('rz-category-goods .goods-tile_title');
        this.firstLaptopItem = page.locator('rz-category-goods > div:nth-child(1) rz-buy-button');
        this.cartIconButton = page.locator('rz-header-cart > button');
        this.selectedCartItemTitle = page.locator('rz-shopping-cart  div.cart-product__main');
    }

    public async gotoHomePage(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua', { waitUntil: 'load' });
    }

    public async gotoCartPage(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/cart/', { waitUntil: 'load' });
    }

    public async searchFor(text: string): Promise<void> {
        await this.searchInput.fill(text);
        await this.searchInput.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }

    public async getProductTitles(): Promise<string[]> {
        return await this.productTitles.allTextContents();
    }

    public async addToCart(): Promise<void> {
        await this.firstLaptopItem.click();
        await this.page.waitForTimeout(1000);
    }
}
