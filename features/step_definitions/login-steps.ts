  import { Given, When, Then } from '@cucumber/cucumber';
  import { chromium, expect } from '@playwright/test';
  import{Page, Browser} from 'playwright';

 export let page: Page;
 export let browser: Browser;


  
  Given('I navigated to the facebook page', async function () {
          //console.log('I navigated to the facebook page');
          browser = await chromium.launch({
            headless: false
          });
          page = await browser.newPage();
          await page.goto('https://www.facebook.com/');
          });
           

   When('I validate the title of the page', async function () {
        // console.log('I validate the title of the page');
        const title =await page.title();
         expect(title).toBe('Facebook  log in or sign up');
         console.log('Title of the page is ' + title);
         });

 

   Then('I enter username as {string}', async function (string) {
          // console.log('I enter username as ' + string);
          await page.fill('input[name="email"]', string);
         });

  

  Then('I enter password as {string}', async function (string) {
         // console.log('I enter password as ' + string);
            await page.fill('input[name="pass"]', string);
         });

   

  Then('I click on the login button', async function () {
         //console.log('I click on the login button');
            await page.click('button[name="login"]');
            await page.close();
            await browser.close();
         });



