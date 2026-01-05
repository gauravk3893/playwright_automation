import { test, expect } from '@playwright/test';
test("UI → Child Window Handling & Data Transfer Test", async ({ browser }) => {
    console.log("🚀 Launching Browser Context...");
    const context = await browser.newContext();
    console.log("📄 Opening New Page...");
    const parentPage = await context.newPage();
    const nseLocator = parentPage.locator("[href*='nseindia']");
    const sebilocator = parentPage.locator("[href*='sebi']")
    console.log("🔗 Navigating to Login Page...");
    await parentPage.goto("https://www.bajajbroking.in/");
    console.log("🧏‍♂️ Listening for Child Tab Event & Opening Link...");
    // waitForEvent('page') listens for new tab
    // Promise.all() ensures BOTH — listening + click happen together
    // const [childPage1, childPage2] = await Promise.all([
        
    //     context.waitForEvent("page"),   // waits until a new page opens
    //     nseLocator.click()  ,
          

    //     context.waitForEvent("page"),   // waits until a new page 
    //     sebilocator.click() ,// action that triggers new tab
    // ]);
    const c1 = context.waitForEvent("page")
    await nseLocator.click();
    const childPage1 = await c1
    const c2 = context.waitForEvent("page")
    
     await sebilocator.click();
     const childPage2 = await c2
     console.log("🆕 Child Tab Opened Successfully!");
    
    console.log("🔍 Extracting Text From Child Tab...");
    console.log(await childPage1.title());
    await expect(childPage1).toHaveTitle("NSE - National Stock Exchange of India Ltd: Live Share/Stock Market News &amp; Updates, Quotes- Nseindia.com");
    
    console.log(await childPage2.title());
    await expect(childPage2).toHaveTitle("Home - scores.sebi.gov.in");

    // console.log("📢 Extracted Text:", infoText);
    // console.log("✂️ Extracting Email from Text...");cl
    // const extractedEmail = infoText.split("@")[1].split(" ")[0];
    // console.log("📧 Final Extracted Email:", extractedEmail);
    // console.log("✅ Test Execution Completed Successfully!");
});