import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class PravdaPage {
    private url = 'https://www.pravda.com.ua/';

    public async goToMainPage(): Promise<void> {
        await browser.url(this.url);
    }

    public get mainLogo(): ChainablePromiseElement {
        return $('div.main_logo > a');
    }

    public get topNavigation(): ChainablePromiseElement {
        return $('.container_top_nav');
    }

    public get mainMenuNavigation(): ChainablePromiseElement {
        return $('.container_main_nav > ul');
    }
}
