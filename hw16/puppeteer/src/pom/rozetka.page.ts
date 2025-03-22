import { ElementHandle, NodeFor, Page } from 'puppeteer';

export class RozetkaPage {
    public constructor(private page: Page) {}

    public async goTo(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    public async waitForSelector<Selector extends string>(selector: Selector): Promise<ElementHandle<NodeFor<Selector>> | null> {
        return await this.page.waitForSelector(selector, { timeout: 10000 });
    }

    public async checkIsElementVisible(selector: string): Promise<boolean> {
        await this.waitForSelector(selector);

        return await this.page.$eval(selector, (element) => {
            const el = element as HTMLElement;
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetHeight > 0;
        });
    }

    public async getElementTextContent<Selector extends string>(selector: Selector): Promise<string | null> {
        return await this.page.$eval(selector, (el) => el.textContent);
    }

    public async clickElement<Selector extends string>(selector: Selector): Promise<void> {
        await this.page.click(selector);
    }

    public getPageUrl(): string {
        return this.page.url();
    }
}
