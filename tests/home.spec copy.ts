import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Homepage and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        await page.close();
    })
    

    test('Open About page and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/about/');

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
        await page.close();
    })

    test('Click get started button using CSS Selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/');

        // click the button
        await page.locator('#get-started').click();

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
        await page.close();
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the text locator
        const headingText = page.locator('text=Think different. Make different.');

        // verify url has #get-started
        await expect(headingText).toBeVisible();
        await page.close();
    })

    test('Verify home link is enabled using text and css selector ', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the home text
        const homeText = page.locator('#zak-primary-menu >> text=Home');

        // verify home text is enabled
        await expect(homeText).toBeEnabled();

        const aboutText = page.locator('#zak-primary-menu >> text=About');
        await aboutText.click();

        await page.waitForTimeout(3000);
        await page.close();
    })

    test('Verify search icon is visible using xxpath selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the search icon
        const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");

        // verify that search icon is visible
        await expect(searchIcon).toBeVisible();

        await page.close();
    })

    test('Verify text for all nav links', async ({ page }) => {

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        // open url
        await page.goto('https://practice.sdetunicorns.com');

        // find the nav links
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]');

        // print out all the links
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }

        // verify nav links test
         expect(await navLinks.allTextContents()).toEqual(expectedLinks);
         //expect(await navLinks.textContent()).toEqual(expectedLinks[3]);


        await page.close();
    })

})


