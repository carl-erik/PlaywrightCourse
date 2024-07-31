import { test } from "./fixtures/baseSmoketestPage";

test.describe('Tinfo', () => {

    test.beforeEach(async ({ testclientPage, testclientDetails }) => {
        await testclientPage.goto();
        await testclientDetails.enterTestclientServer();
        await testclientDetails.enterTestclientGeneral();
    });

    test ('Tinfo edit', async ({ testclientActions, bidClient, tinfoClient }) => {
        await tinfoClient.enterTinfoScopes();
        await testclientActions.clickLoginTestclient();
        await bidClient.bifrostEnterSSN();
        await bidClient.bifrostSelectorSelectBID();
        await bidClient.clientEnterOTP();
        await bidClient.clientEnterPSW();
        await tinfoClient.tinfoEditOpen();
        await tinfoClient.tinfoAddressAdd();
        await tinfoClient.tinfoPostalCodeAdd();
        await tinfoClient.tinfoDistrictAdd();
        await tinfoClient.tinfoMobileAdd();
        await tinfoClient.tinfoEmailAdd();
        await tinfoClient.tinfoStoreWithBankIDClick();
        await tinfoClient.tinfoEditOKClick();
        await bidClient.alertResultValidation();
        await testclientActions.closePage();
    });

    test ('Tinfo consent', async ({ testclientActions, bidClient, tinfoClient }) => {
        await tinfoClient.tinfoConsentNninAdd();
        await testclientActions.clickLoginTestclient();
        await bidClient.bifrostEnterSSN();
        await bidClient.bifrostSelectorSelectBID();
        await bidClient.clientEnterOTP();
        await bidClient.clientEnterPSW();
        await tinfoClient.tinfoConsentIdNumberCheck();
        await tinfoClient.tinfoConsentOkClick();
        await bidClient.alertResultValidation();
        await testclientActions.closePage();
    });

});