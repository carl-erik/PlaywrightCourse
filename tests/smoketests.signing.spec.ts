import { test } from "./fixtures/baseSmoketestPage";

test.describe('Signing', () => {

    test.beforeEach(async ({ testclientPage, testclientDetails, signDocuments }) => {
        await testclientPage.goto();
    });

    test ('SDO signing', async ({ testclientActions, bidClient, signDocuments,testclientDetails, page }) => {
    // Need to find out why you have to click 2 times on login in test client
       await signDocuments.gotoBackendSignClick();
       await testclientDetails.enterTestclientServer();
       await signDocuments.signOrderNameAdd();
       await signDocuments.signSelectSDOClick();
       await signDocuments.signFileUploadSdo();
       await signDocuments.gotoFrontendClick();
       await signDocuments.enterSignScopes();
       await testclientDetails.enterTestclientGeneral();
       await page.waitForTimeout(1000);
       await testclientActions.clickLoginTestclient();
       await page.waitForTimeout(1000);
       await testclientActions.clickLoginTestclient();
       await signDocuments.oneDocumentNextClick();
       await signDocuments.signContentUndrestoodClick();
       await signDocuments.startSigningClick();
       await page.waitForTimeout(1000);
       await bidClient.legacyEnterSSN();  // Need better identification of element
       await bidClient.clientEnterOTP();
       await bidClient.clientEnterPSW();
       await page.waitForTimeout(2000);
       await signDocuments.signCompleteClick();
       await testclientActions.closePage();
    });

    test ('Pades signing', async ({ testclientActions, bidClient, signDocuments, testclientDetails, page }) => {
        await signDocuments.gotoBackendSignClick();
        await testclientDetails.enterTestclientServer();
        await signDocuments.signOrderNameAdd();
        await signDocuments.signSelectPadesClick();
        await signDocuments.signFileUploadPades();
        await page.waitForTimeout(1000);
        await signDocuments.gotoFrontendClick();
        await signDocuments.enterSignScopes();
        await testclientDetails.enterTestclientGeneral();
        await page.waitForTimeout(1000);
        // await testclientActions.clickLoginTestclient();
        // await page.waitForTimeout(1000);
        await testclientActions.clickLoginTestclient();
        await signDocuments.oneDocumentNextClick();
        await signDocuments.signContentUndrestoodClick();
        await signDocuments.startSigningClick();
        await page.waitForTimeout(1000);
        await bidClient.legacyEnterSSN();  // Need better identification of element
        await bidClient.clientEnterOTP();
        await bidClient.clientEnterPSW();
        await page.waitForTimeout(2000);
        await signDocuments.signCompleteClick();
        await testclientActions.closePage();
    });

});