import { IWorldOptions, setDefaultTimeout, setWorldConstructor, World } from '@cucumber/cucumber';

import { Browser, BrowserContext, Page } from 'playwright';

export class CustomWorld extends World {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public constructor(options: IWorldOptions) {
        super(options);
    }
}

setDefaultTimeout(100_000);
setWorldConstructor(CustomWorld);
