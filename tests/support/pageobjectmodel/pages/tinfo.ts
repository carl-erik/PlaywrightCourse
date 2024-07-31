import { Page, expect } from "@playwright/test";

export default class TinfoClient {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    scopeChosen = () => this.page.locator('#scope_chosen');
    tinfoEdit = () => this.page.getByRole('button', { name: 'Edit contact information' });
    tinfoAddress = () => this.page.getByLabel('Address');
    tinfoPostalCode = () => this.page.getByLabel('Postal code');
    tinfoDistrict = () => this.page.getByLabel('District');
    tinfoMobile = () => this.page.getByLabel('Mobile phone');
    tinfoEmail = () => this.page.getByLabel('Email');
    tinfoStoreWithBankID = () => this.page.getByRole('button', { name: 'Store with BankID' });
    tinfoEditOK = () => this.page.getByRole('button', { name: 'OK' });

    tinfoConsentOk = () => this.page.getByRole('button', { name: 'OK' });

    // Actions
    public async enterTinfoScopes() {
        await this.scopeChosen().getByRole('textbox').click();
        await this.scopeChosen().getByText('address').click();
        await this.page.getByText('openidprofilennin_altsubaddress').click();
        await this.scopeChosen().getByText('email').click();
        await this.page.getByText('openidprofilennin_altsubaddressemail').click();
        await this.scopeChosen().getByText('phone').click();
    }
    public async tinfoEditOpen() {
        await this.tinfoEdit().click();
        await this.page.waitForTimeout(1000);
    }
    public async tinfoAddressAdd() {
        await this.tinfoAddress().clear();
        await this.tinfoAddress().fill('Svingen 82');
    }
    public async tinfoPostalCodeAdd() {
        await this.tinfoPostalCode().clear();
        await this.tinfoPostalCode().fill('5002');
    }
    public async tinfoDistrictAdd() {
        await this.tinfoDistrict().clear();
        await this.tinfoDistrict().fill('Svingestad 2');
    }
    public async tinfoMobileAdd() {
        await this.tinfoMobile().clear();
        await this.tinfoMobile().fill('11223344');
    }
    public async tinfoEmailAdd() {
        await this.tinfoEmail().clear();
        await this.tinfoEmail().fill('svingulf@bollestad.ru');
    }
    public async tinfoStoreWithBankIDClick() {
        await this.tinfoStoreWithBankID().click();
    }
    public async tinfoEditOKClick() {
        await this.tinfoEditOK().click();
    }

    public async tinfoConsentNninAdd() {
        await this.page.getByText('openidprofilennin_altsub').click();
        await this.page.locator('#scope_chosen').getByText('nnin', { exact: true }).click();
    }
    public async tinfoConsentOkClick() {
        await this.tinfoConsentOk().click();
    }
    public async tinfoConsentIdNumberCheck() {
        await expect(this.page.getByText('Personal ID number')).toBeVisible();
    }
    
}