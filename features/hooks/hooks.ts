import { Before,After,BeforeAll,AfterAll,Status } from "@cucumber/cucumber";
import fs from 'fs';
import path from 'path';
import { CustomWorld } from "./world";
//import { browser, page } from "../step_definitions/login-steps";

Before(async function (this: CustomWorld) {
    await this.init();
    console.log('Browser launched and page initialized');
});

After(async function (this: CustomWorld) {
    await this.closeBrowser();
    console.log('All tests completed');
});


After(async function (this: CustomWorld, scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED && this.page){
        const screenshot = path.resolve('screenshots/${Date.now()}.png');

        fs.mkdirSync(path.dirname(screenshot), { recursive: true });

        await this.page.screenshot({ path: screenshot, fullPage: true });

        const imageBuffer = fs.readFileSync(screenshot);

       await this.attach(imageBuffer, 'image/png');

       
    }
});