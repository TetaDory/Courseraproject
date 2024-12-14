import { test, expect, beforeEach, afterEach } from "@playwright/test";
import { LoginPage } from '../../pages/login';
import { SubmitPage } from '../../pages/submit'
import { VerificationPage } from '../../pages/idverification';

test.beforeEach(async ({ page }) => {
  await page.goto('/',{waitUntil: "commit"});
  //await page.waitForSelector('text=Icyemezo cyo kohereza umurambo w\'uwapfuye mu mahanga', {timeout: 7000});
});
//test.setTimeout(180000);

//Lambda
test('Scenario 1', async ({ page }) => {
  await page.getByText('Kwiyandikisha kwitabira inama').first().click();
  await page.click('#apply_btn');

  await page.locator('#formly_28_custom-select_TITLE_0 span').first().click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByPlaceholder('Shyiramo izina').fill('Teta');
  await page.getByPlaceholder('Shyiramo andi mazina').fill('Dory');

  await page.locator('#formly_28_profession_APPLICANT_OCCUPATION_5 span').first().click();
  await page.getByRole('option', { name: 'Inzobere mu by\'ubwubatsi' }).click();

  await page.locator('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByPlaceholder('Shyiramo Ikigo ubarizwamo').fill('nthgshx');

  await page.locator('#formly_28_country_APPLICANT_COUNTRY_OF_RESIDENCE_14 span').first().click();
  await page.getByRole('option', { name: 'Alijeriya' }).click();

  await page.locator('#formly_28_country_APPLICANT_NATIONALITY_17 span').first().click();
  await page.getByRole('option', { name: 'Afurika y\'Epfo' }).click();

  await page.getByPlaceholder('Shyiramo imeyili').fill('d.rutayisire@ui.com');

  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero ya telefone *+250 Uyu' }).getByPlaceholder('781234567').fill('780238250');
  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero y\'umuntu wa hafi *+250' }).getByPlaceholder('781234567').fill('788888888');
  await page.locator('#formly_50_conference-list_EVENT_NAME_1 span').first().click();
  await page.getByRole('option', { name: '2nd Rwanda STI Conference' }).click();

  await page.locator('#formly_50_multi-select_RESEARCH_OBJECTIVES_6').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Biotekinoloji' }).click();

  await page.locator('#formly_50_custom-select_REGISTRATION_TYPE_9 span').first().click();
  await page.getByRole('option', { name: 'Intumwa z’inganda / Ibigo' }).click();

  await page.locator('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.locator('#formly_50_custom-select_APPLICANT_COMPANY_ROLE_17 span').first().click();

  await page.getByRole('option', { name: 'Ushinzwe gutegura' }).click();

  await page.getByPlaceholder('Garagaza ibibujijwe / alerigi').fill('tryuyi');
  await page.getByPlaceholder('Geragaza kugaragaza amakuru').fill('drftgyjuk');

  // const submit = new SubmitPage(page)
  // await submit.Submit('0788888888', 'random@example.com');

  await page.close();
});

//Citizen
test('Scenario 2', async ({ page }) => {
  const Login = new LoginPage(page)
   await Login.login('0711111111', 'Test@123', 'IRADUKUNDA Christian');

  await page.getByText('Kwiyandikisha kwitabira inama').first().click();
  await page.click('#apply_btn');

  await page.locator('#formly_28_custom-select_TITLE_0 span').first().click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByPlaceholder('Shyiramo izina').fill('Teta');
  await page.getByPlaceholder('Shyiramo andi mazina').fill('Dory');

  await page.locator('#formly_28_profession_APPLICANT_OCCUPATION_5 span').first().click();
  await page.getByRole('option', { name: 'Inzobere mu by\'ubwubatsi' }).click();

  await page.locator('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByPlaceholder('Shyiramo Ikigo ubarizwamo').fill('nthgshx');

  await page.locator('#formly_28_country_APPLICANT_COUNTRY_OF_RESIDENCE_14 span').first().click();
  await page.getByRole('option', { name: 'Alijeriya' }).click();

  await page.locator('#formly_28_country_APPLICANT_NATIONALITY_17 span').first().click();
  await page.getByRole('option', { name: 'Afurika y\'Epfo' }).click();

  await page.getByPlaceholder('Shyiramo imeyili').fill('d.rutayisire@ui.com');

  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero ya telefone *+250 Uyu' }).getByPlaceholder('781234567').fill('780238250');
  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero y\'umuntu wa hafi *+250' }).getByPlaceholder('781234567').fill('788888888');
  await page.locator('#formly_50_conference-list_EVENT_NAME_1 span').first().click();
  await page.getByRole('option', { name: '2nd Rwanda STI Conference' }).click();
  await page.locator('#formly_50_multi-select_RESEARCH_OBJECTIVES_6').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Biotekinoloji' }).click();

  await page.locator('#formly_50_custom-select_REGISTRATION_TYPE_9 span').first().click();
  await page.getByRole('option', { name: 'Intumwa z’inganda / Ibigo' }).click();

  await page.locator('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.locator('#formly_50_custom-select_APPLICANT_COMPANY_ROLE_17 span').first().click();

  await page.getByRole('option', { name: 'Ushinzwe gutegura' }).click();

  await page.getByPlaceholder('Garagaza ibibujijwe / alerigi').fill('tryuyi');
  await page.getByPlaceholder('Geragaza kugaragaza amakuru').fill('drftgyjuk');

  // const submit = new SubmitPage(page)
  // await submit.Submit('0788888888', 'random@example.com');

  await page.close();
});

//Agent
test('Scenario 3', async ({ page }) => {
  const Login = new LoginPage(page)
   await Login.agentlogin('0711111111', 'Test@123', 'IRADUKUNDA Christian');

  await page.getByText('Kwiyandikisha kwitabira inama').first().click();
  await page.click('#apply_btn');

  await page.locator('#formly_28_custom-select_TITLE_0 span').first().click();
  await page.getByRole('option', { name: 'Ms.' }).click();
  await page.getByPlaceholder('Shyiramo izina').fill('Teta');
  await page.getByPlaceholder('Shyiramo andi mazina').fill('Dory');

  await page.locator('#formly_28_profession_APPLICANT_OCCUPATION_5 span').first().click();
  await page.getByRole('option', { name: 'Inzobere mu by\'ubwubatsi' }).click();

  await page.locator('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByPlaceholder('Shyiramo Ikigo ubarizwamo').fill('nthgshx');

  await page.locator('#formly_28_country_APPLICANT_COUNTRY_OF_RESIDENCE_14 span').first().click();
  await page.getByRole('option', { name: 'Alijeriya' }).click();

  await page.locator('#formly_28_country_APPLICANT_NATIONALITY_17 span').first().click();
  await page.getByRole('option', { name: 'Afurika y\'Epfo' }).click();

  await page.getByPlaceholder('Shyiramo imeyili').fill('d.rutayisire@ui.com');

  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero ya telefone *+250 Uyu' }).getByPlaceholder('781234567').fill('780238250');
  await page.locator('app-intl-phone-number').filter({ hasText: 'Nomero y\'umuntu wa hafi *+250' }).getByPlaceholder('781234567').fill('788888888');
  await page.locator('#formly_50_conference-list_EVENT_NAME_1 span').first().click();
  await page.getByRole('option', { name: '2nd Rwanda STI Conference' }).click();
  await page.locator('#formly_50_multi-select_RESEARCH_OBJECTIVES_6').getByRole('textbox').click();
  await page.getByRole('option', { name: 'Biotekinoloji' }).click();

  await page.locator('#formly_50_custom-select_REGISTRATION_TYPE_9 span').first().click();
  await page.getByRole('option', { name: 'Intumwa z’inganda / Ibigo' }).click();

  await page.locator('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.locator('#formly_50_custom-select_APPLICANT_COMPANY_ROLE_17 span').first().click();

  await page.getByRole('option', { name: 'Ushinzwe gutegura' }).click();

  await page.getByPlaceholder('Garagaza ibibujijwe / alerigi').fill('tryuyi');
  await page.getByPlaceholder('Geragaza kugaragaza amakuru').fill('drftgyjuk');

  // const submit = new SubmitPage(page)
  // await submit.Submit('0788888888', 'random@example.com');

  await page.close();
});