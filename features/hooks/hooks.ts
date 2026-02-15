import { Before,After,BeforeAll,AfterAll,Status } from "@cucumber/cucumber";
import fs from 'fs';
import path from 'path';
import { page,browser } from '../step_definitions/login-steps';

After(async function (scenario) {
    if (scenario.result && scenario.result.status === Status.FAILED && page){
        const screenshot = path.resolve('screenshots/${Date.now()}.png');

        fs.mkdirSync(path.dirname(screenshot), { recursive: true });

        await page.screenshot({ path: screenshot, fullPage: true });

        const imageBuffer = fs.readFileSync(screenshot);

       await this.attach(imageBuffer, 'image/png');

       await page.close();
       await browser.close();
    }
});