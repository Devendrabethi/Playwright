// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import{test,expect,Browser,Page} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'
import { channel } from 'diagnostics_channel';
import { networkInterfaces } from 'os';
import path from 'path';

test('login test',async()=>{

const browsername:Browser= await chromium.launch({headless:false,channel:'chrome'});
const page:Page = await browsername.newPage();
await page.goto("https://bjac-qa2.crm.dynamics.com/");

const emailid =await page.locator("xpath=//input[@name='loginfmt']");
const nextbtn = await page.locator("xpath=//input[@id='idSIButton9']");
const password = await page.locator("xpath=//input[@name='passwd']");
const signinbtn = await page.locator("xpath=//input[@id='idSIButton9']");
const yesbtn = await page.locator("xpath=//input[@id='idSIButton9']");

await emailid.fill("d365testuser2@barrett-jackson.com");
await nextbtn.click();
await password.fill("Barrett1!");
await signinbtn.click();
await yesbtn.click();
await page.waitForTimeout(8000); // Waits for 1000 ms
const title = await page.title();
console.log("home page title:",title);
await page.screenshot({path: "homepage.png"});

expect(title).toEqual('Consignment Dashboard- Manager View -');
await browsername.close();
});
