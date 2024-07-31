import { Page } from "@playwright/test";
import path from "path";

export default class TestclientActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    loginTestclientButton = () => this.page.getByRole('button', { name: 'Log in' });

    // Actions
    public async clickLoginTestclient() {
        await this.loginTestclientButton().click();

    }
    public async closePage() {
        await this.page.close();

    }

}