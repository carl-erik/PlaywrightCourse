import { expect, Page } from "@playwright/test";


export default class TestclientPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto('https://util.bankidnorge.no/oidc-testclient/');
    }
}