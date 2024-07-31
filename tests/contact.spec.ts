import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('Contact', () => {
    test('Open Contact page an dfill out form', async ({ page }) => {

        // open url
        await page.goto('https://practice.sdetunicorns.com/');

        // find the home text
        const contactText = page.locator('#zak-primary-menu >> text=Contact');
        await contactText.click();

        await page.locator("(//input[@id='evf-277-field_ys0GeZISRs-1'])[1]").fill("Halla");
        await page.locator("#evf-277-field_LbH5NxasXM-2").fill("jalla@jallaman.eu");
        await page.locator("#evf-277-field_66FR384cge-3").fill("99887766");
        await page.locator("#evf-277-field_yhGx3FOwr2-4").fill("Hallaisen taisen! æøå");
        await page.locator("#evf-submit-277").click();
       
        await page.locator("div[role='alert']").isVisible();
        // await page.close();
    })

})

test.describe('Blog', () => {
    test('Open Blog page and verify list items', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/blog');

        //await page.locator('#menu-item-490').getByRole('link', { name: 'Blog' }).click();
       // await page.locator('#recent-posts-3').getByRole('link', { name: 'IFrame Sample' }).click();
        
    const resentPostList = page.locator('#recent-posts-3 ul li')

       for (const el of await resentPostList.elementHandles()) {
            console.log((await el.textContent()).trim().length);
            expect((await el.textContent()).trim().length).toBeGreaterThan(10)
        }

        // await page.close();
    })
    

})

