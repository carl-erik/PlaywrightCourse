import { Page } from "@playwright/test";

export default class SignDocuments {
    page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    // private account = { ssn: '21080295186', otp: 'otp', password: 'qwer1234', password2: 'qwer12345' };
    private uploadPath = './tests/uploads/';

    // Locators
    scopeChosen = () => this.page.locator('#scope_chosen');
    gotoBackendSign = () => this.page.getByRole('link', { name: 'Backend sign' });
    gotoFrontend = () => this.page.getByRole('link', { name: 'End user frontend' })
    signOrderName = () => this.page.getByLabel('Order name');
    signSelectSDO = () => this.page.locator('#setSigningModeSdo');
    signSelectPades = () => this.page.locator('#setSigningModePades');
    signChooseFileSdo = () => this.page.getByLabel('Choose file');
    signChooseFilePades = () => this.page.getByLabel('Add files to sign');
    signSubmitSdo = () => this.page.getByRole('button', { name: 'Submit SDO order' });
    signSubmitPades = () => this.page.getByRole('button', { name: 'Submit PAdES order' });

    oneDocumentNext = () => this.page.frameLocator('iframe[title="BankID"]').getByTestId('document-button');
    signContentUndrestood = () => this.page.frameLocator('iframe[title="BankID"]').locator('.confirm');
    startSigning = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Start signing');
    signComplete = () => this.page.frameLocator('iframe[title="BankID"]').getByLabel('Complete');
   
    // Actions
    public async gotoBackendSignClick() {
       await this.gotoBackendSign().click();
    }
    public async gotoFrontendClick() {
       await this.gotoFrontend().click();
    }
    public async signOrderNameAdd() {
       await this.signOrderName().fill('Test order');
    }
    public async signSelectSDOClick() {
       await this.signSelectSDO().click();
    }
    public async signSelectPadesClick() {
       await this.signSelectPades().click();
    }
    // public async signChooseFileOpenSdo() {
    //    await this.signChooseFileSdo().click();
    // }
    public async enterSignScopes() {
        await this.scopeChosen().getByText('openidprofilennin_altsub').click();
        await this.scopeChosen().getByText('sign', { exact: true }).click()
    }

    public async signFileUploadSdo() {
        await this.signChooseFileSdo().setInputFiles(this.uploadPath+'tilsagnsbrev.pdf');
        await this.signSubmitSdo().click();
    }
    public async signFileUploadPades() {
        await this.signChooseFilePades().setInputFiles(this.uploadPath+'PDF-A-eng-13-pages.pdf');
        await this.signSubmitPades().click();
    }
    public async oneDocumentNextClick() {
        await this.oneDocumentNext().click();
    }
    public async signContentUndrestoodClick() {
        await this.signContentUndrestood().click();
    }
    public async startSigningClick() {
        await this.startSigning().click();
    }
    public async signCompleteClick() {
        await this.signComplete().click();
    }

}