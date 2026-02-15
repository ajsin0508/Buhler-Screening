import { setWorldConstructor ,IWorldOptions,World} from "@cucumber/cucumber";
import { Page, Browser,chromium } from "playwright";
import { PageFixture } from "../fixtures/page-fixtures";

export class CustomWorld extends World {
   public  page!: Page;
    public  browser!: Browser;
    public pagefixtures: PageFixture | undefined;

    constructor(options: IWorldOptions) {
        super(options);
      

    }
    async init(){
        this.browser = await chromium.launch({
            headless: false,
            slowMo: 50,
            args: ['--start-maximized']
        });
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        this.pagefixtures = new PageFixture(this.page);
    }
    async closeBrowser() {
        await this.page.close();
        await this.browser.close();
    }
    
}
setWorldConstructor(CustomWorld);