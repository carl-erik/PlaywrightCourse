import { Page } from "@playwright/test";

export default class TestclientDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    serverSelect = () => this.page.locator('#config_chosen');
    tokenHint = () => this.page.getByLabel('Use id token hint?');
    usePar = () => this.page.getByLabel('Use PAR');
    loginHintBID = () => this.page.getByLabel('login_hint');

    // Actions
    public async enterTestclientServer() {
        await this.serverSelect().getByRole('textbox').click();
        await this.serverSelect().getByRole('list').getByText('CURRENT').click();
    }

    public async enterTestclientGeneral() {
        await this.tokenHint().uncheck();
        await this.usePar().uncheck();
    }
    public async enterTestclientLoginHintBID() {
        await this.loginHintBID().fill('BID');
    }
    public async enterTestclientDetails() {
        
    }


}