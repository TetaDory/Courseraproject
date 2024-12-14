const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
// Fixture to Go to ui UAT
const goto=async({page})=>{
    await page.goto('https://uiui.uat.uiinc.com/');
}
//Fixture to change Language
const changeLangauge=async({page})=>{
    await page.locator('#languageDropdown').click()
    await page.getByText('English').click()
}
// Fixture to login as Citizen
const LoginAsCitizen = async ({ page, username, password }) => {
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.fill('#username', username);
    await page.getByPlaceholder('Enter Password').fill(password);
    await page.click('button[type="submit"]');
    await page.getByText('Alleluya Iradukunda').click()
   
};
// Fixture to a searchService
const searchService=async({page,servicename})=>{
await page.getByPlaceholder('Search for services').fill(servicename)
await page.getByRole('paragraph').getByText('Publish in the Official Gazette').click()
const element = await expect(page.getByText(servicename).nth(2)).toBeVisible()
await page.getByRole('button', { name: 'Apply' }).click()

}
// Fixture to fill a Form

const fillForm=async({page})=>{
    await page.locator('ng-select').filter({ hasText: 'Select Application Type' }).getByRole('textbox').click();
    await page.getByText('Change of Name').click();
    await page.locator('ng-select').filter({ hasText: 'Select Category' }).getByRole('textbox').click();
    await page.getByText('Change of Name Submission').click();
    await page.getByPlaceholder('Enter New Full Name').fill("Clarisse");
    await page.getByPlaceholder('Enter reference number').fill("RAD");
    await page.locator('div').filter({ hasText: /^Select district$/ }).first().click();
    await page.getByText('Gasabo').click();
    await page.locator('div').filter({ hasText: /^Select sector$/ }).first().click();
    await page.getByRole('option', { name: 'Gatsata' }).click();
   
}
// Fixture to attach an attachment
const attachment=async({page})=>{
    const fileInput = await page.locator('input[type=file]');
    await fileInput.setInputFiles('/Users/clarisseuwizeyimana/Documents/uiGov-UI-TestCases/files/cv.pdf');
   
}
// Fixture to  go to next step

const nextbutton=async({page})=>{
    await page.getByRole('button', { name: 'Next' }).click();
    
}
// Fixture to submit an application
const submit=async({page,phone,email})=>{
await page.locator('label').filter({ hasText: 'By Checking this box, I certify that all information provided is true, accurate ' }).click();
await page.getByPlaceholder('Enter phone number').fill(phone);
await page.getByPlaceholder('Enter an email address').fill(email);

await page.getByRole('button', { name: 'Submit' }).click();
}
// Fixture to login as An agent

const LoginAsAgent=async({page})=>{
    await page.getByRole('navigation').locator('div').filter({ hasText: 'Accounts' }).nth(4).click();
    await page.getByText('Agent').click();
    await page.getByRole('button', { name: 'New Application' }).click();
}
// Fixture to Validate ID
const idverifications=async({page,id,name})=>{
    await page.getByPlaceholder('Enter national ID number').fill(id);
    await page.locator('app-fetch-user').getByRole('button').click();
        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await page.locator('form').filter({ hasText: 'One of the names (only one)' }).locator('div').isVisible()) {
            await page.getByPlaceholder('Enter one of the names').fill(name);
            if (await page.getByRole('button', { name: 'Verify' }).isVisible()) {
                await page.getByRole('button', { name: 'Verify' }).click();
            }
        } else if (await page.locator('form').filter({ hasText: 'Date of birth * This field is required. Arrival Date must be digits. Arrival Dat' }).isVisible()) {
            await page.locator('form').filter({ hasText: 'Date of birth * This field is required. Arrival Date must be digits. Arrival Dat' }).click();
            await page.locator('rect').click();
            await page.getByLabel('Choose month and year').click();
            await page.getByLabel('Previous 24 years').click();
            await page.getByLabel('1986').click();
            await page.getByLabel('July 1986').click();
            await page.getByLabel('July 10, 1986').click();
            if (await page.getByRole('button', { name: 'Verify' }).isVisible()) {
                await page.getByRole('button', { name: 'Verify' }).click();
            }
        }
    }


module.exports = {
    loginAsCitizen,
    goto,
    changeLangauge,
    searchService,
    fillForm,
    attachment,
    nextbutton,
    submit,
    loginAsAgent,
    idverifications,

};