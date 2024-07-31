import { Page } from "@playwright/test";

export default class ComputerDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    nameTextBox = () => this.page.locator('#name');
    introducedTextBox = () => this.page.locator('#introduced');
    discontinuedTextBox = () => this.page.locator('#discontinued');
    companySelect = () => this.page.locator('#company');

    // Actions
    public async enterComputerDetails() {
        await this.nameTextBox().fill('Jallacomputer');
        await this.introducedTextBox().fill('2024-05-12');
        await this.discontinuedTextBox().fill('2024-06-03');
        await this.companySelect().selectOption({ label: 'Nokia' });
    }

}