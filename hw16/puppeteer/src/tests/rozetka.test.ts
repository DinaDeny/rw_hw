import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { RozetkaPage } from '../pom/rozetka.page';

describe('Puppeteer rozetka tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let rozetkaPage: RozetkaPage;
    let savedUrl = '';
    const URL = 'https://rozetka.com.ua/';
    const TEST_TIMEOUT = 30_000;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        jest.setTimeout(TEST_TIMEOUT);
        context = await browser.createBrowserContext();
        page = await context.newPage();
        rozetkaPage = new RozetkaPage(page);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Should find first item in the recommended list', async () => {
        await rozetkaPage.goTo(URL);

        const itemSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1)';
        const titleSelector = 'rz-section-tiles-block-best rz-product-tile:nth-child(1) .text-base';
        const selectedTitleSelector = '.product-about__right-inner h1';

        const itemVisible = await rozetkaPage.checkIsElementVisible(itemSelector);

        expect(itemVisible).toBe(true);

        const titleVisible = await rozetkaPage.checkIsElementVisible(titleSelector);

        expect(titleVisible).toBe(true);

        const textFromElement = await page.$eval(titleSelector, (el) => el.textContent);

        await rozetkaPage.clickElement(itemSelector);

        const selectedTitleVisible = await rozetkaPage.checkIsElementVisible(selectedTitleSelector);

        expect(selectedTitleVisible).toBe(true);

        savedUrl = rozetkaPage.getPageUrl();

        const selectedText = await rozetkaPage.getElementTextContent(selectedTitleSelector);

        expect(selectedText?.trim()).toContain(textFromElement?.trim());
    });

    it('should check elements on the page', async () => {
        console.log(savedUrl, 'savedUrl 22222');

        await rozetkaPage.goTo(savedUrl);

        const itemProductNameSelector = 'rz-title-block h1';
        const itemMainPhotoSelector = 'rz-gallery-main-content-image > img';
        const itemCartButtonSelector = 'rz-buy-button > button';
        const itemMoreProductInfoSelector = '.product-about__left > div > button';

        const itemVisible = await rozetkaPage.checkIsElementVisible(itemProductNameSelector);

        expect(itemVisible).toBe(true);

        const itemMainPhotoVisible = await rozetkaPage.checkIsElementVisible(itemMainPhotoSelector);

        expect(itemMainPhotoVisible).toBe(true);

        const itemCartButtonVisible = await rozetkaPage.checkIsElementVisible(itemCartButtonSelector);

        expect(itemCartButtonVisible).toBe(true);

        const itemMoreProductInfoVisible = await rozetkaPage.checkIsElementVisible(itemMoreProductInfoSelector);

        expect(itemMoreProductInfoVisible).toBe(true);
    });
});
