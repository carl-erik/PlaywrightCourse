import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://util.bankidnorge.no/oidc-testclient/');
  await page.getByRole('link', { name: 'Backend sign' }).click();
  await page.locator('#config_chosen').getByRole('textbox').click();
  await page.locator('#config_chosen').getByRole('list').getByText('CURRENT').click();
  await page.getByLabel('Order name').click();
  await page.getByLabel('Order name').fill('Test order');
  await page.getByRole('link', { name: 'SDO' }).click();
  await page.getByLabel('Choose file').click();
  await page.getByLabel('Choose file').setInputFiles('PDF-A-eng-13 pages-most text.pdf');
  await page.getByRole('button', { name: 'Submit SDO order' }).click();
  await page.getByRole('link', { name: 'End user frontend' }).click();
  await page.getByText('openidprofilennin_altsub').click();
  await page.locator('#scope_chosen').getByText('sign', { exact: true }).click();
  await page.getByLabel('Use id token hint?').uncheck();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.frameLocator('iframe[title="BankID"]').getByTestId('document-button').click();
  await page.frameLocator('iframe[title="BankID"]').getByText('Content is understood and I').click();
  await page.frameLocator('iframe[title="BankID"]').getByLabel('Start signing').click();
  await page.frameLocator('iframe[title="BankID"]').getByLabel('User ID').fill('21080295186');
  await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
  await page.frameLocator('iframe[title="BankID"]').getByLabel('One Time Code').fill('otp');
  await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
  await page.frameLocator('iframe[title="BankID"]').getByLabel('Your BankID password').fill('qwer1234');
  await page.frameLocator('iframe[title="BankID"]').getByRole('button', { name: 'Next' }).click();
  await page.frameLocator('iframe[title="BankID"]').getByLabel('Complete').click();
});