// @ts-check
const { test,expect} = require('@playwright/test');//import

// import test from '@playwright/test'

// test("Verify if we enter the url we can go to the specified page",async ({browser})=>{

// const NewWindow=await browser.newContext();// icognito page khul gaya//new context

// const NewTab=await NewWindow.newPage();//new tab

// await NewTab.goto("https://demo.automationtesting.in/Register.html");

// })
// test.only("Verify if we navigate to a url a page gets loaded",async({page})=>{

//     await page.goto("https://demo.automationtesting.in/Register.html");
//     await page.locator('[placeholder="First Name"]').type("Prateek",{delay:1000});
//     await page.locator('[placeholder="Last Name"]').type("Tyagi",{delay:1000});
//     //await expect(page.locator('[placeholder="Last Name"]')).toContainText("Tyagi");
//     await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html")
//     await page.locator("input#checkbox1").click()
// })
test.only("Verify if we enter correct credential. User should be login ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('//input[@id="username"]').type("rahulshettyacademy");
    await page.locator('//input[@id="password"]').type("learning");
    // await page.locator('//label[@class="customerradio"][1]').click();
    await page.locator('//option[@value="stud"]')
    await page.locator('//input[@id="signInBtn"]').click();
    await expect(page.locator('//nav[@class="navbar navbar-expand-sm bg-dark navbar-dark"]')).toBeVisible()
})
// test.only("Verify text discription on login page ",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     //await expect(page.locator('//a[@class="nav-link btn btn-primary"]')).toBeVisible();
//     await page.locator('//input[@id="username"]').type("rahulshettyacademy");
//     await page.locator('//input[@id="password"]').type("learning");
//     await page.locator('//input[@id="signInBtn"]').click();
//     await page.locator('//button[@class="btn btn-info"]').first().click();
//     await page.locator('//a[@class="nav-link btn btn-primary"]').click();
//     await expect(page.locator('//a[text()="iphone X"]')).toBeVisible();
//     await expect(page.locator('//button[@class="btn btn-danger"]')).toBeVisible();
//     await page.locator('//button[@class="btn btn-success"]').click();
//     await expect(page.locator('//input[@id="country"]')).toBeVisible();
//     await page.locator('//input[@id="country"]').type("New Delhi");
//     await page.locator('//label[@for="checkbox2"]').click();
//     await page.locator('//input[@class="btn btn-success btn-lg"]').click();
//     await expect(page.locator('//div[@class="alert alert-success alert-dismissible"]')).toBeVisible();
// })
// test("hendling redirection popup",async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
//     const [NewPopup]=await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator('//a[@title="Follow @Lambdatesting on Twitter"]').click()
//     ])
//     await NewPopup.locator('//span[text()="Log in"]').click();
//     await expect(NewPopup).toHaveURL("https://twitter.com/i/flow/login");

// })

test.only("Verify if we enter correct credential. User should be login ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('//input[@id="userEmail"]').type("salonitiwary1999@gmail.com");
    await page.locator('//input[@id="userPassword"]').type("Krishna@1");
    await page.locator('//input[@class="btn btn-block login-btn"]').click();
    await page.locator('//button[@class="btn w-10 rounded"]').first().click();
    await page.locator('//button[@class="btn btn-custom"]').nth(3).click();
})

