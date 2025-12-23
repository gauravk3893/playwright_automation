import { expect, test } from '@playwright/test'

test('logintest', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator("//*[@id='username']").scrollIntoViewIfNeeded();
    await page.locator("//*[@id='username']").fill('student')
     await page.locator("//*[@id='password']").scrollIntoViewIfNeeded();
    await page.locator("//*[@id='password']").fill('Password123')
    await page.waitForTimeout(5000);
    await page.locator("//*[@id='submit']").scrollIntoViewIfNeeded();
    await page.locator("//*[@id='submit']").click();


    await page.waitForTimeout(5000);
    await expect(page.locator("//*[text()='Logged In Successfully']")).toHaveText("Logged In Successfully")

    await page.waitForTimeout(5000);
    await page.locator("//*[text()='Log out']").click


}
);








