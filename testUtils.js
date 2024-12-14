const {expect} = require('@playwright/test');

const UAT_URL = 'https://uiui.uat.uiinc.com/';
// const DEV_URL = 'https://uiui.gov2.0.dev.uiinc.com/'

// Encapsulate common selectors
const selectors = (page) => ({
    buttonLogin: page.getByRole('button', {name: 'Kwinjira'}),
    inputUsername: page.locator("#username"),
    inputPassword: page.locator("[name='password']"),
    buttonSubmit: page.locator("button[class$='top-button']"),
    user_name: page.locator("span.user-name"),
    buttonApply: page.locator("#apply_btn"),
    removebutton: page.getByRole('button', { name: 'Remove' }),
});
// Reusable login function
async function login(page, username, password) {
    const {buttonLogin, inputUsername, inputPassword, buttonSubmit, user_name} = selectors(page);
    // URL navigation is handled here
    await page.goto(UAT_URL);
    // Click on the login button to open the login form
    await buttonLogin.click();
    // Use provided username and password
    await inputUsername.fill(username);
    await inputPassword.fill(password);
    // Click on the submit button to log in
    await buttonSubmit.click();
    // Assert that the user-name element is visible after login
    await page.waitForTimeout(1000);
    const removebutton = page.getByRole('button', { name: 'Remove' });
    if (await removebutton.isVisible()) {
        await removebutton.click();
    }
    const kurahobutton = page.getByRole('button', { name: 'Kuraho' })
    if (await kurahobutton.isVisible()) {
        await kurahobutton.click();
    }
    await expect(user_name).toBeVisible();
}

async function changeLanguage(page, language) {
    await page.waitForTimeout(1000);
    await page.locator('#languageDropdown').getByRole('img').click();
    await page.getByText(language).click();
}
async function switchToAgentRole(page) {
    //const userDropdown = page.locator("span[class='has-event btn btn-navbar']");
    const userDropdown = page.getByRole('navigation').getByRole('img').nth(2);
    const userAccount = page.locator("div[class*='has-event'] span");
    const roleSwitchAgent = page.locator("#role_switch_link_role_agent");
    // Open user dropdown
    await userDropdown.click();
    // Select user account from the dropdown
    await userAccount.click();
    // Switch role to Agent
    await roleSwitchAgent.click();
}
async function fillContactDetailsAndSubmit(page, phoneNumber, email) {
    const phoneNumberInput = page.getByPlaceholder('Enter Phone Number');
    const emailInput = page.getByPlaceholder('Enter an email address');
    const phoneCheckbox = page.locator('.mat-checkbox-inner-container').first();
    const emailCheckbox = page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container');

    if (!(await phoneCheckbox.isChecked())) {
        await phoneCheckbox.click();
    }
    if (!await emailCheckbox.isChecked()) {
        await emailCheckbox.click();
    }
    // await page.pause()
    await phoneNumberInput.fill(phoneNumber);
    await phoneNumberInput.press('Tab');
    await emailInput.fill(email);
    await page.locator('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    let retryCount = 0;

        while (retryCount < 5) {
            try {
                await page.getByRole('button', {name: 'Submit'}).click();
                await page.waitForSelector('text=Payment information', {timeout: 15000});
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 5) {
            console.log('Failed after 3 retries');
        }

    }

async function applyForBirthCertificate(page, isAgent = false) {
    await page.getByText('Birth Services').first().click();
    await page.getByRole('combobox').click();
    await page.getByText('Birth Certificate', {exact: true}).click();
    await page.getByRole('button', {name: 'Apply'}).click();
    // await page.pause()
    if (isAgent) {
        // Execute the following steps only if the user is an agent
        const buttonVerify = page.getByRole('button', {name: 'Verify'});
        await page.waitForSelector('div', {text: 'Identification document number'});
        await page.getByPlaceholder('Enter national ID number').fill('1191880000746075');
        const birthdayCheck = page.getByText(" Date of birth *");
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});

        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1918');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Canisius');
        }
        await buttonVerify.click();
    }
    await page.locator('app-location').getByRole('combobox').click();
    await page.getByRole('option', {name: 'Bugesera'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).getByRole('textbox').click();
    await page.getByRole('option', {name: 'Gashora'}).click();
    await page.locator('ng-select').filter({hasText: 'Select the reason your\'re'}).getByRole('combobox').click();
    await page.getByText('Government services').click();
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForWidowWidowerCertificate(page) {
    const buttonVerify = page.getByRole('button', {name: 'Verify'})
    await page.getByText('Certificate for Widow/Widower').first().click();
    await page.getByRole('button', {name: 'Apply'}).click();
    await page.locator('.col-md-1').click();
    await page.locator('app-location').getByRole('combobox').click();
    await page.getByRole('option', {name: 'Bugesera'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).getByRole('combobox').click();
    await page.getByText('Gashora').click();
    await page.locator('ng-select').filter({hasText: 'Select the reason your\'re'}).getByRole('textbox').click();
    await page.getByText('Government services').click();

    if (await page.getByPlaceholder('Enter national ID number').isVisible()) {
        await page.getByPlaceholder('Enter national ID number').fill('1191880000746075');
        const birthdayCheck = page.getByText(" Date of birth *");
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});
// await page.pause()
        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1918');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Canisius');
        }
        await buttonVerify.click();
    }
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForBeingSingleCertificate(page) {
    const buttonVerify = page.getByRole('button', {name: 'Verify'})
    await page.getByText('Certificate of Being Single').first().click();
    await page.getByRole('button', {name: 'Apply'}).click();
    await page.locator('ng-select').filter({hasText: 'Select district'}).locator('span').first().click();
    await page.getByRole('option', {name: 'Bugesera'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).locator('span').first().click();
    await page.getByText('Gashora').click();
    await page.locator('ng-select').filter({hasText: 'Select the reason your\'re'}).getByRole('textbox').click();
    await page.getByText('Government services').click();
    if (await page.getByPlaceholder('Enter national ID number').isVisible()) {
        await page.getByPlaceholder('Enter national ID number').fill('1193670015762052');
        const birthdayCheck = page.getByText(" Date of birth *");
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});

        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1936');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Therese');
        }
        // await page.pause()
        await buttonVerify.click();
    }
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForGenocideSurvivorCertificate(page, isAgent = false) {
    await page.getByText('Certificate of Genocide').first().click();
    await page.getByRole('button', {name: 'Apply'}).click();
    if (isAgent) {
        // Execute the following steps only if the user is an agent
        const buttonVerify = page.getByRole('button', {name: 'Verify'});
        await page.waitForSelector('div', {text: 'Identification document number'});
        await page.getByPlaceholder('Enter national ID number').fill('1191880000746075');
        const birthdayCheck = page.getByText(" Date of birth *");
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});

        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1918');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Canisius');
        }
        await buttonVerify.click();
    }
    await page.locator('div').filter({hasText: /^Select district$/}).first().click();
    await page.getByText('Bugesera').click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).locator('span').first().click();
    await page.getByRole('option', {name: 'Gashora'}).click();
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForResidenceCertificate(page) {
    const buttonVerify = page.getByRole('button', {name: 'Verify'})
    await page.getByText('Certificate of Residence').first().click();
    await page.getByRole('button', {name: 'Apply'}).click();
    await page.locator('app-location').getByRole('combobox').click();
    await page.getByText('Bugesera').click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).locator('span').first().click();
    await page.getByRole('option', {name: 'Gashora'}).click();
    await page.locator('ng-select').filter({hasText: 'Select the reason your\'re'}).getByRole('combobox').click();
    await page.getByText('Government services').click();
    await page.locator('ng-select').filter({hasText: 'Select the reason your\'re'}).getByRole('textbox').press('Tab');
    await page.getByPlaceholder('Select date').fill('01/01/2000');
    await page.getByPlaceholder('Select date').press('Enter');
    if (await page.getByPlaceholder('Enter national ID number').isVisible()) {
        await page.getByPlaceholder('Enter national ID number').fill('1191880000746075');
        const birthdayCheck = page.getByText(" Date of birth *");
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});
        // await page.pause()
        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByRole('textbox', {name: 'Select date'}).fill('01/01/1918');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Canisius');
        }
        await buttonVerify.click();
    }
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForDeathRecordCertificate(page, isAgent = false) {

    const buttonVerify = page.getByRole('button', {name: 'Verify'})
    const buttonNext = page.getByRole('button', {name: 'Next'})
    const birthdayCheck = page.getByText('Date of birth *');

    await page.getByText('Death Record (New)').first().click();
    await page.getByRole('button', {name: 'Apply'}).click();

    if (isAgent) {

        await page.locator('#docType').getByRole('combobox').click();
        await page.getByText('Rwanda National ID (National').click();
        await page.getByPlaceholder('Enter ID number').click();
        await page.getByPlaceholder('Enter ID number').fill('1191880000746075');

        const birthdayCheck1 = page.getByText('Date of birth *');
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});

        if (await birthdayCheck1.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1918');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Canisius');
        }
        await buttonVerify.click();
    }
    await page.locator('div').filter({ hasText: /^Choose a document type$/ }).first().click();
    await page.getByRole('option', {name: 'National ID Number'}).click();
    await page.getByPlaceholder('Enter National ID Number').fill('1200370061325052');
    // await page.pause()
    // Choose the appropriate selector based on isAgent value
    const dialogSelector = isAgent ? '#mat-dialog-3' : '#mat-dialog-2';
    await page.waitForSelector(dialogSelector, {state: 'visible'});

    if (await birthdayCheck.isVisible()) {
        // If visible, fill the birthday date
        await page.getByPlaceholder('Select date').fill('01/01/2003');
    } else {
        // If not visible, fill the name
        await page.getByPlaceholder('Enter one of the names').fill('JEANNETTE');
    }
    await buttonVerify.click();

    await buttonNext.click();
}
async function applyForGuardianshipRecognition(page,isAgent = false) {
    const buttonVerify = page.getByRole('button', {name: 'Verify'})
    const birthdayCheck = page.getByText(" Date of birth *");

    await page.getByText('Guardianship Record').nth(1).click();
    await page.getByRole('combobox').click();
    await page.getByLabel('Options list').getByText('Guardianship Record').click();
    await page.getByRole('button', {name: 'Apply'}).click();
    if (isAgent) {
        await page.getByPlaceholder('Enter national ID number').isVisible()
        await page.getByPlaceholder('Enter national ID number').fill('1193670015762052');
        await page.waitForSelector('#mat-dialog-2', {state: 'visible'});

        if (await birthdayCheck.isVisible()) {
            // If visible, fill the birthday date
            await page.getByPlaceholder('Select date').fill('01/01/1936');
        } else {
            // If not visible, fill the name
            await page.getByPlaceholder('Enter one of the names').fill('Therese');
        }
        await buttonVerify.click();
    }
    await page.locator('div').filter({hasText: /^Select district$/}).first().click()
    await page.getByRole('option', {name: 'Bugesera'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector'}).locator('span').first().click();
    await page.getByRole('option', {name: 'Gashora'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector×Gashora'}).getByRole('textbox').press('Tab');
    await page.getByPlaceholder('Enter Child Id').fill('13287238');

    await page.waitForSelector('[id^="mat-dialog-"]', {state: 'visible'});

    if (await birthdayCheck.isVisible()) {
        // If visible, fill the birthday date
        await page.getByPlaceholder('Select date').fill('13/04/2023');
    } else {
        // If not visible, fill the name
        await page.getByPlaceholder('Enter one of the names').fill('Anick');
    }

    await page.getByRole('button', {name: 'Verify'}).click();
    await page.getByRole('button', {name: 'Next'}).click();
}
async function applyForRecordOfRecognition(page, childId, nationalIdNumber) {

    await page.getByText('Record of Recognition').first().click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', {name: 'Record of recognition.'}).click();
    await page.getByRole('button', {name: 'Apply'}).click();
    await page.pause()
    await page.waitForSelector('text=Child Details', {state: 'visible'});

    if (await page.locator('app-applicant-by-agent').getByPlaceholder('Enter national ID number').isVisible()) {
        await page.locator('app-applicant-by-agent').getByPlaceholder('Enter national ID number').fill('1191880000746075');
        // const birthdayCheck = page.getByText(" Date of birth *");
        // const buttonVerify = page.getByRole('button', {name: 'Verify'})
        // await page.waitForSelector('#mat-dialog-2', {state: 'visible'});
        //
        // if (await birthdayCheck.isVisible()) {
        //     // If visible, fill the birthday date
        //     await page.getByPlaceholder('Select date').fill('01/01/1936');
        // } else {
        //     // If not visible, fill the name
        //     await page.getByPlaceholder('Enter one of the names').fill('Therese');
        // }
        // await page.pause()
        // await buttonVerify.click();
    }
    await page.getByPlaceholder('Enter Child Id').fill(childId);
    await page.getByPlaceholder('Enter Child Id').press('Tab');
    await page.locator('app-collection-info').getByRole('combobox').click();
    await page.getByRole('option', {name: 'Bugesera'}).click();
    await page.locator('ng-select').filter({hasText: 'Select district×Bugesera'}).getByRole('textbox').press('Tab');
    await page.locator('ng-select').filter({hasText: 'Select sector'}).getByRole('combobox').click();
    await page.getByRole('option', {name: 'Gashora'}).click();
    await page.locator('ng-select').filter({hasText: 'Select sector×Gashora'}).getByRole('textbox').press('Tab');
    await page.locator('ng-select').filter({hasText: 'Select citizenship×Rwandan'}).getByRole('textbox').press('Tab');
    await page.locator('form').filter({hasText: 'Other Parent Details'}).getByPlaceholder('Enter national ID number').fill(nationalIdNumber);
    await page.getByRole('button', {name: 'Next'}).click();
}









module.exports = {
    login,
    changeLanguage,
    switchToAgentRole,
    fillContactDetailsAndSubmit,
    applyForWidowWidowerCertificate,
    applyForResidenceCertificate,
    applyForGenocideSurvivorCertificate,
    applyForDeathRecordCertificate,
    applyForBeingSingleCertificate,
    applyForRecordOfRecognition,
    applyForGuardianshipRecognition,
    applyForBirthCertificate,

    UAT_URL
};
