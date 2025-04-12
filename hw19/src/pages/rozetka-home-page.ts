import { Locator, Page } from '@playwright/test';

export class RozetkaHomePage {
    public readonly page: Page;

    public readonly searchInput: Locator;
    public readonly categoryMenu: Locator;
    public readonly cartIconButton: Locator;
    public readonly loginIconButton: Locator;
    public readonly bannerSlider: Locator;
    public readonly burgerMenuIcon: Locator;
    public readonly closeLoginWithGoogleIcon: Locator;
    public readonly loginButtonInsideMenu: Locator;
    public readonly loginModal: Locator;

    public constructor(page: Page) {
        this.page = page;

        this.searchInput = page.locator('input[name="search"]');
        this.categoryMenu = page.locator('rz-main-page-sidebar > ul');
        this.cartIconButton = page.locator('rz-header-cart > button');
        this.loginIconButton = page.locator('rz-auth-icon > button');
        this.bannerSlider = page.locator('rz-slider');
        this.burgerMenuIcon = page.locator('.header-menu.header__button');
        this.closeLoginWithGoogleIcon = page.locator('#container #close');
        this.loginButtonInsideMenu = page.locator('rz-menu-content rz-user-login button');
        this.loginModal = page.locator('rz-modal-layout');
    }

    public async navigateToPage(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/', { waitUntil: 'load' });
    }

    public async navigateToLoginModal(): Promise<void> {
        await this.burgerMenuIcon.click();
        await this.waitForTimeout(500);
        await this.loginButtonInsideMenu.click();
        await this.waitForTimeout(500);
    }

    public async waitForTimeout(delay: number): Promise<void> {
        await this.page.waitForTimeout(delay);
    }
}
