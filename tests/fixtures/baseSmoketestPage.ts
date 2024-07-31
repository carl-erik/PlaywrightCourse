import { test as base } from "@playwright/test";
import TestclientPage from "../support/pageobjectmodel/pages/testclient.page";
import TestclientActions from "../support/pageobjectmodel/sections/testclientActions.section";
import TestclientDetails from "../support/pageobjectmodel/sections/testclientDetails.section";
import BidClient from "../support/pageobjectmodel/pages/bid.login";
import TinfoClient from "../support/pageobjectmodel/pages/tinfo";
import SignDocuments from "../support/pageobjectmodel/pages/signing";

export const test = base.extend<{
    testclientPage: TestclientPage;
    testclientActions: TestclientActions;
    testclientDetails: TestclientDetails;
    bidClient: BidClient;
    tinfoClient: TinfoClient;
    signDocuments: SignDocuments;
}>({
   // Define fixture
   testclientPage: async ({ page }, use) => {
    await use(new TestclientPage(page));
   },
   testclientActions: async ({ page }, use) => {
    await use(new TestclientActions(page));
   },
   testclientDetails: async ({ page }, use) => {
    await use(new TestclientDetails(page));
   },
   bidClient: async ({ page }, use) => {
    await use(new BidClient(page));
   },
   tinfoClient: async ({ page }, use) => {
    await use(new TinfoClient(page));
   },
   signDocuments: async ({ page }, use) => {
    await use(new SignDocuments(page));
   },
});