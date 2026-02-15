import{Page} from 'playwright';
import { BasePage } from './base-page';
import allocators from '../locators/locators.json';

export class LoginPage extends BasePage {
    private locators= allocators.LoginPage;
    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage() {
        await this.navigateTo('https://www.facebook.com/');
    }
        async enterUsername(username: string) {
            await this.type(allocators.LoginPage.emailInput, username);
        }
        async enterPassword(password: string) {
            await this.type(allocators.LoginPage.passwordInput, password);
        }
        async clickLoginButton() {
            await this.click(allocators.LoginPage.loginButton);
        }
    }
