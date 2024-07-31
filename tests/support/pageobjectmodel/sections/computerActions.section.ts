import { Page } from "@playwright/test";
import path from "path";

export default class ComputerActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    createComputerButton = () => this.page.getByText('Create this computer');

    // Actions
    public async clickCreateNewComputer() {
        await this.createComputerButton().click();

    }

}