exports.VerificationPage = class VerificationPage {

    constructor(page) {

        this.page = page
        //this.id_textbox = page.locator('input[formcontrolname="nationalIdFormControl"]')
        this.id_textbox = page.getByRole('textbox', { name: 'Shyiramo nomero y’indangamuntu' })
        this.id_textboxes = page.locator('[placeholder="Shyiramo Nomero y\'Indangamuntu"]');
        this.id_textbox1 = page.getByRole('textbox', { name: 'Shyiramo nomero y’indangamuntu' }).first();
        this.id_textbox2 = page.getByRole('textbox', { name: 'Shyiramo nomero y’indangamuntu' }).nth(1);
        this.id_textbox3 = page.getByRole('textbox', { name: 'Shyiramo nomero y’indangamuntu' }).nth(2);
        this.id_textbox4 = page.getByPlaceholder('Shyiramo nomero y\'icyangombwa');
        this.id_textbox41 = page.getByPlaceholder('Shyiramo nomero y\'icyangombwa').first();
        this.id_textbox42 = page.getByPlaceholder('Shyiramo nomero y\'icyangombwa').nth(1);
        this.id_textbox43 = page.getByPlaceholder('Shyiramo nomero y\'icyangombwa').nth(2);
        this.id_textbox5 = page.getByRole('textbox', { name: 'Shyiramo nomero y’indangamuntu' }).nth(3);
        this.passport_textbox = page.getByPlaceholder('Andika nomero ya pasiporo');
        this.childid = page.getByPlaceholder('Andika Nomero y\'ifishi y\'')
        this.child_id = page.locator('input[formcontrolname="childIdFormControl"]')
        this.child_idtext = page.getByPlaceholder('Andika Nomero y\'ifishi y\'umwenegihugu')
        this.name_textbox = page.locator('input[formcontrolname="nameFormControl"]')
        this.information_checkbox = page.getByText('Nemeye amategeko agenga imikoreshereze')
        this.genzura_button = page.getByRole('button', { name: 'Genzura' })
        this.birthdate_textbox = page.locator('input[formcontrolname="birthDateFormControl"]')
        this.search_button = page.locator('app-fetch-user').getByRole('button')
        this.search_button2 = page.getByLabel('1. Dosiye isaba').locator('form').getByRole('button')
    }

    async verification(idnumber, name, birthdate) {

        await this.id_textbox.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verifications(idnumber, name, birthdate) {

        await this.id_textboxes.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verificationsearch(idnumber, name, birthdate) {

        await this.id_textbox.fill(idnumber);
        if (await this.search_button.isVisible()){
            await this.search_button.click();
        }
        if (await this.search_button2.isVisible()){
            await this.search_button2.click();
        }
        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.nth(1).isVisible()) {
            await this.birthdate_textbox.nth(1).fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verificationsearch2(idnumber, name, birthdate) {

        await this.id_textbox2.fill(idnumber);
        if (await this.search_button.isVisible()){
            await this.search_button.click();
        }
        if (await this.search_button2.isVisible()){
            await this.search_button2.click();
        }
        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verificationsubsearch2(idnumber, name, birthdate) {

        await this.id_textbox2.fill(idnumber);
        if (await this.search_button.isVisible()){
            await this.search_button.click();
        }
        if (await this.search_button2.isVisible()){
            await this.search_button2.click();
        }
        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.nth(1).isVisible()) {
            await this.birthdate_textbox.nth(1).fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verificationsub2(idnumber, name, birthdate) {

        await this.id_textbox1.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.nth(1).isVisible()) {
            await this.birthdate_textbox.nth(1).fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification1(idnumber, name, birthdate) {

        await this.id_textbox1.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification2(idnumber, name, birthdate) {

        await this.id_textbox2.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification3(idnumber, name, birthdate) {

        await this.id_textbox3.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification4(idnumber, name, birthdate) {

        await this.id_textbox4.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification4sub(idnumber, name, birthdate) {

        await this.id_textbox4.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.nth(1).isVisible()) {
            await this.birthdate_textbox.nth(1).fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification42(idnumber, name, birthdate) {

        await this.id_textbox42.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification43(idnumber, name, birthdate) {

        await this.id_textbox43.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification41(idnumber, name, birthdate) {

        await this.id_textbox41.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async verification5(idnumber, name, birthdate) {

        await this.id_textbox5.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }

        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }

    async childverification(idnumber, name, birthdate) {

        await this.child_id.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }
        await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
        if (await this.name_textbox.first().isVisible()) {
            await this.name_textbox.first().fill(name);
            if (await this.information_checkbox.first().isVisible()) {
                await this.information_checkbox.first().click();
            }
            await this.genzura_button.click();
            await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.first().isVisible()) {
                await this.information_checkbox.first().click();
            }
            await this.genzura_button.click();
        }
    }

    async childverification2(idnumber, name, birthdate) {

        await this.childid.fill(idnumber);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }
        await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
        if (await this.name_textbox.first().isVisible()) {
            await this.name_textbox.first().fill(name);
            if (await this.information_checkbox.first().isVisible()) {
                await this.information_checkbox.first().click();
            }
            await this.genzura_button.click();
            await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
        } else if (await this.birthdate_textbox.first().isVisible()) {
            await this.birthdate_textbox.first().fill(birthdate);
            if (await this.information_checkbox.first().isVisible()) {
                await this.information_checkbox.first().click();
            }
            await this.genzura_button.click();
        }
    }

    async passport(passport, name, birthdate) {

        await this.passport_textbox.fill(passport);
        // if (await this.search_button.isVisible()) {
        //     await this.search_button.click();
        // }
        await new Promise((resolve) => setTimeout(resolve, 2 * 1000));
        const waitTimeInSeconds1 = 1;
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
        if (await this.name_textbox.isVisible()) {
            await this.name_textbox.fill(name);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        } else if (await this.birthdate_textbox.isVisible()) {
            await this.birthdate_textbox.fill(birthdate);
            if (await this.information_checkbox.isVisible()) {
                await this.information_checkbox.click();
            }
            await this.genzura_button.click();
        }
    }
}