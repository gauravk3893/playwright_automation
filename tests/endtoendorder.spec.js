const { test, expect } = require('@playwright/test');

test('endtoendorder', async ({ page }) => {

  console.log("🚀 Test started: End to End Order Flow");

  const userEmail = "anshika@gmail.com";
  const userPassword = "Iamking@000";
  const expectedProductName = 'ADIDAS ORIGINAL';

  const productCards = page.locator(".card-body");

  console.log("🌐 Navigating to application URL");
  await page.goto("https://rahulshettyacademy.com/client");

  console.log(`✍️ Entering email: ${userEmail}`);
  await page.locator("#userEmail").fill(userEmail);

  console.log("✍️ Entering password");
  await page.locator("#userPassword").fill(userPassword);

  console.log("🔐 Clicking Login button");
  await page.locator("[value='Login']").click();

  console.log("⏳ Waiting for network to be idle after login");
  await page.waitForLoadState('networkidle');

  console.log("📦 Waiting for products to load");
  await page.locator(".card-body b").first().waitFor();

  const totalProducts = await productCards.count();
  console.log(`🧮 Total products displayed: ${totalProducts}`);

 // let productFound = false;

  for (let i = 0; i < totalProducts; i++) {

    const productTitle = await page
      .locator(".card-body b")
      .nth(i)
      .textContent();

    const trimmedProductTitle = productTitle?.trim();
    console.log(`🔍 Checking product [${i}]: ${trimmedProductTitle}`);

    if (trimmedProductTitle === expectedProductName) {

      console.log(`✅ Product matched: ${expectedProductName}`);
      console.log("🛒 Clicking Add to Cart button");

      await productCards
        .nth(i)
        .locator("button")
        .nth(1)
        .click();

      console.log("⏳ Waiting for toast message");
      const toastMessage = page.locator("[class*='toast-message']");
      await toastMessage.waitFor();

      console.log("🔔 Verifying toast message text");
      await expect(toastMessage).toHaveText(" Product Added To Cart ");

      console.log("🎉 Product successfully added to cart");
   
      break;
    }
  }

 

  console.log("✅ Test completed: End to End Order Flow");
});
