const{expect}=reqiure('@playwright/test')
test("Verify if we enter correct credential. User should be login ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('//input[@id="username"]').type("rahulshettyacademy");
    await page.locator('//input[@id="password"]').type("learning");
    // await page.locator('//label[@class="customerradio"][1]').click();
    await page.locator('//option[@value="stud"]')
    await page.locator('//input[@id="signInBtn"]').click();
    await expect(page.locator('//nav[@class="navbar navbar-expand-sm bg-dark navbar-dark"]')).toBeVisible()
})