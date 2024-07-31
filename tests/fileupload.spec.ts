import { test } from '@playwright/test'

test ('File upload', async ({context}) => {
    const page = await context.newPage();
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

    const fileChoserPromise = page.waitForEvent('filechooser');
    await page.locator("input[name='upfile']").click();
    const filechooser = await fileChoserPromise;
    await filechooser.setFiles('./tests/uploads/tilsagnsbrev.pdf');
    await page.locator("input[type='submit']").click();
});