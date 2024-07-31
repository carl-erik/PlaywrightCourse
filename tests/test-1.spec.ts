import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');
  await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Jallaballa');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('jalla@balla.com');
  await page.getByLabel('Phone *').click();
  await page.getByLabel('Phone *').fill('99008877');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('Hallaisen!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thanks for contacting us! We').click();
});