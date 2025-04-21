import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../features/support/world';
import { RozetkaPage } from '../pages/rozetka-page';

let rozetkaPage: RozetkaPage;

Given<CustomWorld>('User open the Rozetka homepage', async function () {
    rozetkaPage = new RozetkaPage(this.page);
    await rozetkaPage.gotoHomePage();
});

When<CustomWorld>('User search for {string}', async function (searchQuery: string) {
    await rozetkaPage.searchFor(searchQuery);
});

Then<CustomWorld>('The list of results contains the word {string} in the product titles', async function (keyword: string) {
    const titles = await rozetkaPage.getProductTitles();

    for (const title of titles) {
        expect(title.toLowerCase()).toContain(keyword.toLowerCase());
    }
});

When<CustomWorld>('User add the first product from search results to the cart', async function () {
    await rozetkaPage.addToCart();
});

Then<CustomWorld>('The product is displayed in the cart and has title {string}', async function (keyword: string) {
    const cartCounter = await rozetkaPage.cartIconButton.textContent();

    expect(cartCounter?.trim()).toBe('1');

    await rozetkaPage.gotoCartPage();
    const cartItemTitle = await rozetkaPage.selectedCartItemTitle.textContent();
    expect(cartItemTitle?.toLowerCase()).toContain(keyword);
});
