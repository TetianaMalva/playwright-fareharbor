import { Page } from '@playwright/test';

export class BasePage {

    private _page: Page;

    public get page(): Page {
        return this._page;
    }

    constructor(page: Page) {
        this._page = page;
    }

    async navigate(path: string) {
        await this.page.goto(path);
    }

    async close() {
        await this.page.close();
    }

}
