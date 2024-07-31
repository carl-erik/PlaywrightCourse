import { Page, expect } from "@playwright/test";

export default class BidClient {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private account = { ssn: '21080295186', otp: 'otp', password: 'qwer1234', password2: 'qwer12345' };

    // Locators
    bifrostSSN = () => this.page.getByPlaceholder('digits'); 
    bifrostSelectorBID = () => this.page.getByRole('button', { name: 'BankID with code device' });
    clientOTP = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code');
    clientPSW = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password');
    legacySSN = () => this.page.frameLocator('iframe[title="BankID"]').locator('input');
    // legacySSN = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('User ID');
    

    alertResult = () => this.page.getByText('Success');

    clientMenu = () => this.page.frameLocator('iframe[title="BankID"]').getByRole("button", { name: 'Menu' });
    clientMenuChangePsw = () => this.page.frameLocator('iframe[title="BankID"]').getByRole('menuitem', { name: 'Change BankID password' });
    clientMenuChangePswInfoNext = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Change BankID password').getByRole('button', { name: 'Next' });
    clientMenuChangePswKeepExisting = () => this.page.frameLocator('iframe[title="BankID"]').getByText('Keep existing password');
    clientMenuChangePswNew = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Create new BankID password');
    clientMenuChangePswNewConfirm = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Confirm new password');

    createNewPswNext = () => this.page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' });


    // Actions
    public async bifrostEnterSSN() {
        // User Jan Banan
        // await this.bifrostSSN().fill('21080295186');
        await this.bifrostSSN().fill(this.account.ssn);
        await this.bifrostSSN().press('Enter');
    }
    public async bifrostSelectorSelectBID() {
        await this.bifrostSelectorBID().click();
    }
    public async clientEnterOTP() {
        await this.clientOTP().fill(this.account.otp);
        await this.clientOTP().press('Enter');
    }
    public async clientEnterPSW() {
        await this.clientPSW().fill(this.account.password);
        await this.clientPSW().press('Enter');
    }
    public async clientEnterPSW2() {
        await this.clientPSW().fill(this.account.password2);
        await this.clientPSW().press('Enter');
    }
    public async alertResultValidation() {
        await expect(this.alertResult()).toBeVisible();
    }
    public async clientMenuOpen() {
        await this.clientMenu().click();
    }
    public async clientMenuChangePswOpen() {
        await this.clientMenuChangePsw().click();
    }
    public async clientMenuChangePswInfoNextClick() {
        await this.clientMenuChangePswInfoNext().click();
    }
    public async clientMenuChangePswKeepExistingClick() {
        await this.clientMenuChangePswKeepExisting().check();
    }
    public async clientMenuChangePswNewInsert() {
        await this.clientMenuChangePswNew().fill(this.account.password2);
        await this.clientMenuChangePswNewConfirm().fill(this.account.password2);
    }
    public async clientMenuChangePswNewInsert2() {
        await this.clientMenuChangePswNew().fill(this.account.password);
        await this.clientMenuChangePswNewConfirm().fill(this.account.password);
    }
    public async createNewPswNextClick() {
        await this.createNewPswNext().click();
    }

    // Signing
    public async legacyEnterSSN() {
        await this.legacySSN().fill(this.account.ssn);
        await this.legacySSN().press('Enter');
    }
}