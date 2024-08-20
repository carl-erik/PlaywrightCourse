import { test, expect } from '@playwright/test';


test.describe('Home', () => {
    
    test('Open HomePage and verify title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
    
    test('Open Avout page and verify title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/about');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get started button using CSS selector', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*#get-started/);
    })


    test('Verify heading text', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        const headinhText = page.locator('text=Think different. Make different.');
        await expect(headinhText).toBeVisible();
    })
    
    test('Text and CSS selector', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        // await page.locator('#zak-primary-menu .menu-item-about a').click();
       
        const homeText = page.locator('#zak-primary-menu:has-text("Home")');
        const aboutText = page.locator('#zak-primary-menu >> text=About');

        await expect(homeText).toBeVisible();
        await aboutText.click();
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
      
        const searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        await expect(searchIcon).toBeVisible();
    })

    test('Verify text of all nav links', async ({ page }) => {

        const expextedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        await page.goto('https://practice.sdetunicorns.com/');
        
         // Verify all elements in menu
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        expect(await navLinks.allTextContents()).toEqual(expextedLinks);

        // Verify only 1 spesific element in menu (Blog)
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        // Can also use .first and .last
        // expect(await navLinks.textContent()).toEqual(expextedLinks[3]);

        // print out all the links
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }
    })

    test('SUbmit contact form', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await page.locator('#zak-primary-nav >> text=Contact').click();

        await page.getByLabel('Name *').fill('Jallaballa');
        await page.getByLabel('Email *').fill('Jall@aballa.com');
        await page.getByLabel('Phone *').fill('88775566');
        await page.getByLabel('Message').fill('Hallaisen!');
        await page.getByRole('button', { name: "Submit" }).click();

        await expect(page.locator('text=Thanks for contacting us! We will be in touch with you shortly')).toBeVisible();

    });
    
    test('MENU ELEMENTS COUNT', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/blog');

        const blogLinks = page.locator('#recent-posts-3 ul li');

        for (const el of await blogLinks.elementHandles()) {
            console.log(await el.textContent());
        }
        expect(await blogLinks.count()).toEqual(5);
    });
    
    
    
})
