import { test } from "./fixtures/baseSmoketestPage";
//import TestclientPage from "./support/pageobjectmodel/pages/testclient.page";

test.beforeEach(async ({ testclientPage, testclientDetails }) => {
    await testclientPage.goto();
    await testclientDetails.enterTestclientServer();
    await testclientDetails.enterTestclientGeneral();
});


test ('BID login', async ({ testclientActions, bidClient }) => {
    await testclientActions.clickLoginTestclient();
    await bidClient.bifrostEnterSSN();
    await bidClient.bifrostSelectorSelectBID();
    await bidClient.clientEnterOTP();
    await bidClient.clientEnterPSW();
    await bidClient.alertResultValidation();
    await testclientActions.closePage();
});

test ('Bid login with login hint BID', async ({ testclientActions, testclientDetails, bidClient }) => {
    await testclientDetails.enterTestclientLoginHintBID();
    await testclientActions.clickLoginTestclient();
    await bidClient.bifrostEnterSSN();
    await bidClient.clientEnterOTP();
    await bidClient.clientEnterPSW();
    await bidClient.alertResultValidation();
    await testclientActions.closePage();
});

test ('Change BankID password - keep existing password', async ({ testclientActions, bidClient }) => {
    await testclientActions.clickLoginTestclient();
    await bidClient.bifrostEnterSSN();
    await bidClient.bifrostSelectorSelectBID();
    await bidClient.clientEnterOTP();
    await bidClient.clientMenuOpen();
    await bidClient.clientMenuChangePswOpen();
    await bidClient.clientMenuChangePswInfoNextClick();
    await bidClient.clientEnterPSW();
    await bidClient.clientMenuChangePswKeepExistingClick();
    await bidClient.createNewPswNextClick();
    await bidClient.createNewPswNextClick();
    await bidClient.alertResultValidation();
    await testclientActions.closePage();
  });

test ('Change BankID password - perform change ', async ({ testclientActions, bidClient }) => {
    await testclientActions.clickLoginTestclient();
    await bidClient.bifrostEnterSSN();
    await bidClient.bifrostSelectorSelectBID();
    await bidClient.clientEnterOTP();
    await bidClient.clientMenuOpen();
    await bidClient.clientMenuChangePswOpen();
    await bidClient.clientMenuChangePswInfoNextClick();
    await bidClient.clientEnterPSW();
    await bidClient.clientMenuChangePswNewInsert();
    await bidClient.createNewPswNextClick();
    await bidClient.createNewPswNextClick();
    
    await testclientActions.clickLoginTestclient();
    await bidClient.bifrostEnterSSN();
    await bidClient.bifrostSelectorSelectBID();
    await bidClient.clientEnterOTP();
    await bidClient.clientMenuOpen();
    await bidClient.clientMenuChangePswOpen();
    await bidClient.clientMenuChangePswInfoNextClick();
    await bidClient.clientEnterPSW2();
    await bidClient.clientMenuChangePswNewInsert2();
    await bidClient.createNewPswNextClick();
    await bidClient.createNewPswNextClick();
    await bidClient.alertResultValidation();

    await testclientActions.closePage();
  });