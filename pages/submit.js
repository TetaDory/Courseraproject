import { test, expect } from '@playwright/test';
exports.SubmitPage = class submitPage {
    constructor(page) {
        this.page = page;
        this.next_button = page.locator('#next_btn');
        this.email_checkbox = page.locator('.mat-checkbox-inner-container').nth(1);
        this.email_textbox = page.locator('input[formcontrolname="email"]');
        this.number_checkbox = page.locator('.mat-checkbox-inner-container').first();
        this.number_textbox = page.locator('input[formcontrolname="phone"]');
        this.information_checkbox = page.locator('.mat-checkbox-inner-container').nth(2);
        this.submit_button = page.locator('#submit_btn')
    }

    async Submit(number, email) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        await this.next_button.click();
        await this.email_checkbox.check();
        // await this.email_textbox.fill('randomexamplecom');
        // const errorMessage = await this.page.getByLabel('Incamake').getByText('Imeyili irimo ikosa.');
        // const errorMessage1 = await this.page.getByLabel('Incamake').getByText('Imeli irimo ikosa.');
        // // if (await this.errorMessage.isVisible()){
        // //     await expect(errorMessage).toBeVisible();
        // // } else {
        // //     await expect(errorMessage1).toBeVisible
        // // }

        // await expect(errorMessage).toBeVisible();
        await this.email_textbox.fill(email);
        await this.number_checkbox.check();

        await this.number_textbox.fill('0788');
        const errorMessage2 = await this.page.getByLabel('Incamake').getByText('Nomero ya telefoni (Rwanda)').nth(2);
        await expect(errorMessage2).toBeVisible();
        await this.number_textbox.fill(number);
        await this.information_checkbox.check();
        let retryCount = 0;

        while (retryCount < 3) {
            try {
                await this.submit_button.click();
                await this.page.waitForSelector('text=Amakuru ajyanye no kwishyura', {timeout: 30000});
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 3) {
            console.log('Failed after 3 retries');
        }
    }

    async citizensubmit() {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        await this.next_button.click();
        await this.information_checkbox.check();
        let retryCount = 0;

        while (retryCount < 5) {
            try {
                await this.submit_button.click();
                await this.page.waitForSelector('text=Amakuru ajyanye no kwishyura', {timeout: 30000});
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 5) {
            console.log('Failed after 3 retries');
        }

    }

    async emailSubmit(number, email) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        await this.next_button.click();
        // await this.email_checkbox.check();
        // await this.email_textbox.fill('randomexamplecom');
        // const errorMessage = await this.page.getByLabel('Incamake').getByText('Imeyili irimo ikosa.');
        // const errorMessage1 = await this.page.getByLabel('Incamake').getByText('Imeli irimo ikosa.');
        // // if (await this.errorMessage.isVisible()){
        // //     await expect(errorMessage).toBeVisible();
        // // } else {
        // //     await expect(errorMessage1).toBeVisible
        // // }

        // await expect(errorMessage).toBeVisible();
        await this.email_textbox.fill(email);
        await this.number_checkbox.check();

        await this.number_textbox.fill('0788');
        const errorMessage2 = await this.page.getByLabel('Incamake').getByText('Nomero ya telefoni (Rwanda)').nth(2);
        await expect(errorMessage2).toBeVisible();
        await this.number_textbox.fill(number);
        await this.information_checkbox.check();
        let retryCount = 0;

        while (retryCount < 3) {
            try {
                await this.submit_button.click();
                await this.page.waitForSelector('text=Amakuru ajyanye no kwishyura', {timeout: 30000});
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 3) {
            console.log('Failed after 3 retries');
        }
    }

    async Submit1(number, email) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        await this.next_button.click();
        await this.email_checkbox.check();
        // await this.email_textbox.fill('randomexamplecom');
        // const errorMessage = await this.page.getByLabel('Incamake').getByText('Imeyili irimo ikosa.');
        // const errorMessage1 = await this.page.getByLabel('Incamake').getByText('Imeli irimo ikosa.');
        // // if (await this.errorMessage.isVisible()){
        // //     await expect(errorMessage).toBeVisible();
        // // } else {
        // //     await expect(errorMessage1).toBeVisible
        // // }

        // await expect(errorMessage).toBeVisible();
        await this.email_textbox.fill(email);
        await this.number_checkbox.check();

        await this.number_textbox.fill('0788');
        const errorMessage2 = await this.page.getByLabel('Incamake').getByText('Nomero ya telefoni (Rwanda)').nth(2);
        await expect(errorMessage2).toBeVisible();
        await this.number_textbox.fill(number);
        await this.information_checkbox.check();
        let retryCount = 0;

        while (retryCount < 3) {
            try {
                await this.submit_button.click();
                await this.page.waitForSelector('text=Kwishyura serivisi', {timeout: 30000});
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 3) {
            console.log('Failed after 3 retries');
        }
    }
}