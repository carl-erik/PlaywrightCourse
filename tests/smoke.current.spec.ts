import { test, expect } from '@playwright/test';

test.describe('Current', () => {
   
    test('BID login', async ({ page }) => {
        await page.goto('https://util.bankidnorge.no/oidc-testclient/');
        await page.locator('#config_chosen').getByRole('textbox').click();
        await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
        await page.getByLabel('Use id token hint?').uncheck();
        await page.getByLabel('Use PAR').uncheck();
        await page.getByRole('button', { name: 'Log in' }).click();
        await page.getByPlaceholder('digits').fill('21080295186');
        await page.getByPlaceholder('digits').press('Enter');
        await page.getByRole('button', { name: 'BankID with code device' }).click();
        await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').fill('otp');
        await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').press('Enter');
        await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').fill('qwer"1234');
        await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').press('Enter');
        await page.close();
      });
      

      test('Bid login with login hint BID', async ({ page }) => {
        await page.goto('https://util.bankidnorge.no/oidc-testclient/');
        await page.locator('#config_chosen').getByRole('textbox').click();
        await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
        await page.getByLabel('login_hint').fill('bid');
        await page.getByLabel('Use id token hint?').uncheck();
        await page.getByLabel('Use PAR').uncheck();
        await page.getByRole('button', { name: 'Log in' }).click();
        await page.getByPlaceholder('11 digits').fill('21080295186');

        const visible = await page.getByRole('button', { name: 'Neste' }).isVisible();
        if (visible) {
          await page.getByRole('button', {name: 'Neste'}).click();
        } else {
          await page.getByRole('button', {name: 'Next'}).click();
        }

        await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').fill('otp');
        await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
        await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').fill('qwer"1234');
        await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
      });

      test('Change BankID password', async ({ page }) => {
        await page.goto('https://util.bankidnorge.no/oidc-testclient/');
        await page.locator('#config_chosen').click();
        await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
        
      });
  

    test('Tinfo edit', async ({ page }) => {
      await page.goto('https://util.bankidnorge.no/oidc-testclient/');
      await page.locator('#config_chosen').getByRole('textbox').click();
      await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
      await page.locator('#scope_chosen').getByRole('textbox').click();
      await page.locator('#scope_chosen').getByText('address').click();
      await page.getByText('openidprofilennin_altsubaddress').click();
      await page.locator('#scope_chosen').getByText('email').click();
      await page.getByText('openidprofilennin_altsubaddressemail').click();
      await page.locator('#scope_chosen').getByText('phone').click();
      await page.getByLabel('Use id token hint?').uncheck();
      await page.getByLabel('Use PAR').uncheck();
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.getByPlaceholder('digits').fill('21080295186');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('button', { name: 'BankID with code device' }).click();
      await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').fill('otp');
      await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').press('Enter');
      await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').fill('qwer"1234');
      await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').press('Enter');
      await page.getByRole('button', { name: 'Edit contact information' }).click();
      await page.waitForTimeout(3000);
      await page.getByLabel('Address').clear();
      await page.getByLabel('Address').fill('Svingen 82');
      await page.getByLabel('Postal code').clear();
      await page.getByLabel('Postal code').fill('5002');
      await page.getByLabel('District').clear();
      await page.getByLabel('District').fill('Svingestad2');
      await page.getByLabel('Mobile phone').clear();
      await page.getByLabel('Mobile phone').fill('11223342');
      await page.getByLabel('Email').clear();
      await page.getByLabel('Email').fill('svingulf2@bollestad.ru');
      await page.getByRole('button', { name: 'Store with BankID' }).click();
      await page.getByRole('button', { name: 'OK' }).click();
      await page.close();
    });

    test('Tinfo consent', async ({ page }) => {
      await page.goto('https://util.bankidnorge.no/oidc-testclient/');
      await page.locator('#config_chosen').getByRole('textbox').click();
      await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
      await page.getByText('openidprofilennin_altsub').click();
      await page.locator('#scope_chosen').getByText('nnin', { exact: true }).click();
      await page.getByLabel('Use id token hint?').uncheck();
      await page.getByLabel('Use PAR').uncheck();
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.getByPlaceholder('digits').fill('21080295186');
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('button', { name: 'BankID with code device' }).click();
      await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').fill('otp');
      await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').press('Enter');
      await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').fill('qwer"1234');
      await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
      await page.waitForTimeout(3000);
      await page.getByRole('button', { name: 'OK' }).click();
      await page.close();
    });




});



