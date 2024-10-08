import { test as base } from "@playwright/test";
import ComputersPage from "../support/pageobjectmodel/pages/computers.page";
import AddComputerPage from "../support/pageobjectmodel/pages/addComputer.page";

export const test = base.extend<{
    computersPage: ComputersPage; 
    addComputerPage: AddComputerPage;
}>({
    // Define a fixture
    computersPage: async ({ page }, use) => {
        await use(new ComputersPage(page));
    },
    addComputerPage: async ({ page }, use) => {
        await use(new AddComputerPage(page));
    },
});