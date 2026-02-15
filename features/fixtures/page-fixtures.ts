import { Page } from 'playwright';
import { LoginPage } from '../pageobjects/login-page';

export class PageFixture {
  public loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }
}
