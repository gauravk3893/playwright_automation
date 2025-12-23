
import { expect, test } from "@playwright/test";

test('assignment', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')

    await page.waitForTimeout(5000);

    await page.locator("//*[text()='Register here']").click();
    await page.locator("//*[@id='firstName']").fill('Gaurav')
    await page.locator("//*[@id='lastName']").fill('Kumbhar')
    await page.locator("//*[@id='userEmail']").fill('g.kumbhar3@gmail.com')
    await page.locator("//*[@id='userMobile']").fill('8888888888')
    await page.locator("//*[@id='userPassword']").fill('Gaurav@123')
    await page.locator("//*[@id='confirmPassword']").fill('Gaurav@123')
    await page.locator("//*[@type='checkbox']").click();
    await page.locator("//*[@id='login']").click();

}
);

test.only('login' , async({page}) =>{
    await page .goto ('https://rahulshettyacademy.com/client/#/auth/login')
        await page.waitForTimeout(5000);
        console.log("login test start")
await page .locator("//*[@id='userEmail']").fill('g.kumbhar3@gmail.com')
await page.locator("//*[@id='userPassword']").fill('Gaurav@123')
await page.locator("//*[@id='login']").click();
await page.locator("(//div[@class='card-body']//h5//b)").first().waitFor()
const productname  = await page.locator("(//div[@class='card-body']//h5//b)").allTextContents();
console.log(productname)

})