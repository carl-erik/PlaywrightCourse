//import { test } from "@playwright/test";
import { test } from "./fixtures/basePage";

// https://www.youtube.com/watch?v=Hp4QIBJO3yY

test ('Basic test POM', async ({ computersPage, addComputerPage }) => {
    await computersPage.goto();
    await computersPage.clickAddNewComputer();
    
    await addComputerPage.addNewComputer();

    await computersPage.assertNewComputerAdded();
});