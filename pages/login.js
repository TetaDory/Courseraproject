exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.enter_button = page.getByRole('button', { name: 'Kwinjira' })
        // this.number_textbox = page.getByPlaceholder('Injiza numero ya terefone')
        //this.number_textbox = page.getByPlaceholder('Injiza numero ya terefone')
        this.number_textbox = page.getByPlaceholder('Telephone cyangwa imeli')
        //<input id="username" type="text" name="username" appphoneemail="" minlength="10" required="" class="form-control ng-untouched ng-pristine ng-invalid" placeholder="Telephone cgangwa imeli">
        this.password_textbox = page.getByPlaceholder('Andika ijambo ry\'ibanga')
        this.login_button = page.getByRole('button', { name: 'Injira' })
        this.remove_button = page.getByRole('button', { name: 'Remove' })
        this.kuraho_button = page.getByRole('button', { name: 'Kuraho' })
        this.menu_button = page.locator('polyline').first()
        this.account_button = page.locator('span').filter({ hasText: 'Konti' }).getByRole('img')
        this.agent_button = page.getByText('Uhagarariye')
        this.citizen_button = page.getByText('Umuturage')
        this.newdossier_button = page.getByRole('button', { name: 'Dosiye Nshya' })
        this.menu = page.getByRole('navigation').getByRole('img').nth(2)
        this.citizen = page.getByText('text=/^UMUTURAGE$/')
        this.agent = page.getByText('text=/^UHAGARARIYE$/')

    }

    async login(number, password, username) {
        await this.enter_button.click();
        await this.number_textbox.fill(number)
        const waitTimeInSeconds = 1;
        await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
        await this.password_textbox.fill(password)
        let retryCount = 0;
        await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
        while (retryCount < 5) {
            try {
                await this.login_button.click();
                await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
                if (await this.remove_button.isVisible()) {
                    await this.remove_button.click();
                }
                await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
                if (await this.kuraho_button.isVisible()) {
                    await this.kuraho_button.click();
                }
                await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
                await this.page.waitForSelector('text=' + username, { timeout: 25000 });
                break;
            } catch (error) {
                console.log(error);
            }
        }
        if (retryCount === 3) {
            console.log('Failed after 3 retries');
        }
        await this.menu.click();
        //Check if role is citizen
        if (await this.citizen.isVisible()) {
            //Close menu
            await this.menu_button.click();
        } else {
            //Change to citizen
            if(await this.account_button.isVisible()){
                await this.account_button.click()
            };
            await this.citizen_button.click()
        }
    }

    async agentlogin(number, password, username) {
        await this.enter_button.click();
        await this.number_textbox.fill(number)
        const waitTimeInSeconds = 1;
        await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
        await this.password_textbox.fill(password)
        let retryCount = 0;
        while (retryCount < 5) {
            try {
                await this.login_button.click();
                await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
                if (await this.remove_button.isVisible()) {
                    await this.remove_button.click();
                }
                if (await this.kuraho_button.isVisible()) {
                    await this.kuraho_button.click();
                }
                await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
                await this.page.waitForSelector('text=' + username, { timeout: 25000 });
                break;
            } catch (error) {
                retryCount++;
            }
        }
        if (retryCount === 3) {
            console.log('Failed after 3 retries');
        }

        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        await this.menu_button.click()
        if (await this.agent.isVisible()) {
            //Close menu
            await this.menu_button.click();
        } else {
            //Change to agent
            if(await this.account_button.isVisible()){
                await this.account_button.click()
            };
            await this.agent_button.click()

            await this.newdossier_button.click()
        }
    }

    // async citizenlogin(number, password,username) {
    //     await this.enter_button.click();
    //     await this.number_textbox.fill(number)
    //     const waitTimeInSeconds = 1;
    //     await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
    //     await this.password_textbox.fill(password)
    //     let retryCount = 0;
    //     while (retryCount < 5) {
    //         try {
    //             await this.login_button.click();
    //             await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
    //             if (await this.remove_button.isVisible()) {
    //                 await this.remove_button.click();
    //             }
    //             if (await this.kuraho_button.isVisible()) {
    //                 await this.kurah_obutton.click();
    //             }
    //             await this.page.waitForSelector('text=' + username, { timeout: 6000 });
    //             break;
    //         } catch (error) {
    //             retryCount++;
    //         }
    //     }
    //     if (retryCount === 3) {
    //         console.log('Failed after 3 retries');
    //     }
    //     await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
    //     await this.menu_button.click()
    //     await this.account_button.click()
    //     await this.citizen_button.click()
    // }
}
