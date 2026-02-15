import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks/world';

  
Given('I navigated to the facebook page', async function (this: CustomWorld) {
       await this.page.goto('https://www.facebook.com/login/');
});

When('I validate the title of the page', async function (this: CustomWorld) {
       const title = await this.page.title();
       expect(title).toMatch(/Facebook - log in or sign up|Log in to Facebook/);
       console.log('Title of the page is ' + title);
});


Then('I enter username as {string}', async function (this: CustomWorld, username: string) {
       if (!this.pagefixtures) throw new Error('Page fixtures not initialized');
       await this.pagefixtures.loginPage.enterUsername(username);
});


Then('I enter password as {string}', async function (this: CustomWorld, password: string) {
       if (!this.pagefixtures) throw new Error('Page fixtures not initialized');
       await this.pagefixtures.loginPage.enterPassword(password);
});


Then('I click on the login button', async function (this: CustomWorld) {
       if (!this.pagefixtures) throw new Error('Page fixtures not initialized');
       // Implement clickLoginButton in LoginPage if not present
       await this.pagefixtures.loginPage.clickLoginButton();
});



