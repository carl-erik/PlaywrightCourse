import { expect, Page } from "@playwright/test";

export default class ComputersPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto('https://computer-database.gatling.io/computers');
    }

    // Locators
    addComputerButton = () => this.page.getByText('Add a new computer');
    computerAddedLabel = () => this.page.getByText('Done ! Computer Jallacomputer has been created');
    
    // Actions
    public async clickAddNewComputer()
    {
        await this.addComputerButton().click();
    }

    public async assertNewComputerAdded() {
        await expect(this.computerAddedLabel()).toBeVisible();
    }
}