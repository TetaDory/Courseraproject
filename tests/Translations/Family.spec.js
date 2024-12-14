import { test, expect, beforeEach, afterEach } from "@playwright/test";
import { LoginPage } from '../../pages/login';
import { SubmitPage } from '../../pages/submit'
import { VerificationPage } from '../../pages/idverification';

test.beforeEach(async ({ page }) => {
  await page.goto('/',{waitUntil: "commit"});
});

//Make sure page is in kinyarwanda

test('Scenario 1: Service names', async ({ page }) => {
  //Family
  const CertificateOfBeingSinglek = page.getByText("Icyemezo cy'uko uri ingaragu").first();
  await expect(CertificateOfBeingSinglek).toBeVisible();

  await page.getByText('Icyemezo cy\'uko uri ingaragu').first().click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await expect(await page.getByText('Icyemezo cy\'uko uri ingaragu').first()).toBeVisible();
  await expect(await page.getByRole('heading', { name: 'Icyemezo cy\'uko uri ingaragu' })).toBeVisible();
  await expect(await page.getByText('Ibyerekeye iyi serivisi')).toBeVisible();
  await expect(await page.locator('p').filter({ hasText: 'Icyemezo cy\'uko Umuntu ari Ingaragu gitangwa n\'ubuyobozi cyikerekana ko ari ingaragu. Icyi cyemezo gishobora gukoreshwa mu gusaba serivisi zinyuranye nko kwiyandikisha kugirango ushyingirwe, gusaba inguzanyo muri banki, gushaka ubwishingizi, n\'ibindi...Dosiye isaba yoherezwa mu buyobozi bw’inzego z’ibanze ku murenge kugirango isuzumwe. Icyi cyemezo gifite agaciro k\'amezi atatu.' })).toBeVisible();
  await expect(await page.getByText('Igihe dosiye imara : Umunsi')).toBeVisible();
  await expect(await page.getByText('Igiciro : RWF')).toBeVisible();
  await expect(await page.getByText('Yatanzwe na :')).toBeVisible();
  await expect(await page.getByText('MINALOC')).toBeVisible();
  await page.locator('#close_btn line').nth(1).click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));

  const DivorceServicesK = await page.getByText('Serivisi z\'Ubutane').first();
  await expect(DivorceServicesK).toBeVisible();

  await page.getByText('Serivisi z\'Ubutane').first().click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await expect(await page.getByText('Serivisi z\'Ubutane').nth(2)).toBeVisible();
  await expect(await page.getByRole('heading', { name: 'Hitamo serivisi muri izi' })).toBeVisible();
  await page.getByRole('heading', { name: 'Serivisi z\'Ubutane' }).locator('span').first().click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await page.getByRole('option', { name: 'Icyemezo cy\'ubutane' }).click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await expect(await page.getByText('Ibyerekeye iyi serivisi')).toBeVisible();
  await expect(await page.locator('p').filter({ hasText: 'Icyemezo cy\'uwatandukanye n\'uwo bashakanye gihabwa abanyarwanda bamaze gusesa amasezerano yo gushyingirwa. Icyi cyemezo gitangwa na serivisi y\'rangamimerere cyikemeza ko ugihawe yatandukanye n\'uwo bashakanye nyuma y\'uko byemejwe n\'urukiko. Gitangirwa ku murenge, abagisaba berekana inyandiko y\'urubanza rwemeza ko batandukanye.' })).toBeVisible();
  await expect(await page.getByText('Igiciro : RWF')).toBeVisible();
  await expect(await page.getByText('Igihe dosiye imara : Umunsi')).toBeVisible();
  await expect(await page.getByText('Yatanzwe na :')).toBeVisible();
  await page.getByRole('heading', { name: 'Icyemezo cy\'ubutane' }).getByRole('img').click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));

  const AuthenticationForAnOrphanStatusK = await page.getByText('Kwemeza ko umuntu ari imfubyi').first();
  await expect(AuthenticationForAnOrphanStatusK).toBeVisible();

  await page.getByText('Kwemeza ko umuntu ari imfubyi').first().click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await expect(await page.getByText('Kwemeza ko umuntu ari imfubyi').first()).toBeVisible();
  await expect(await page.getByRole('heading', { name: 'Kwemeza ko umuntu ari imfubyi' })).toBeVisible();
  await expect(await page.getByText('Ibyerekeye iyi serivisi')).toBeVisible();
  await expect(await page.locator('p').filter({ hasText: 'Iyi serivisi iha abaturage uburyo bw\'igenzura ryemewe cyangwa kwemeza ku mugaragaro imiterere y\'ubupfubyi.' })).toBeVisible();
  await expect(await page.getByText('Igihe dosiye imara : Umunsi')).toBeVisible();
  await expect(await page.getByText('Yatanzwe na :')).toBeVisible();
  await expect(await page.getByText('Igiciro: Ntiyishyurwa')).toBeVisible();
  await expect(await page.getByText('Imigereka isabwa')).toBeVisible();
  await expect(await page.getByText('Ntushobora gusaba iyi servisi niba udafite konti ku ui')).toBeVisible();
  await expect(await page.getByText('Icyemezo cy\'urupfu rw\'umubyeyi cyangwa icyemezo cy\'urukiko.')).toBeVisible();
  await page.locator('#close_btn line').nth(1).click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));

  const CertificateofNeedyK = await page.getByText('Icyemezo cy\'Utishoboye').first();
  await expect(CertificateofNeedyK).toBeVisible();

  await page.getByText('Icyemezo cy\'Utishoboye').first().click();
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
  await expect(await page.getByRole('heading', { name: 'Icyemezo cy\'Utishoboye Warokotse Jenoside yakorewe Abatutsi mu 1994' })).toBeVisible();
  await expect(await page.getByText('Ibyerekeye iyi serivisi')).toBeVisible();
  await expect(await page.locator('p').filter({ hasText: 'Iyi serivisi itanga icyemezo gihabwa utishoboye warokotse jenoside yakorewe abatutsi mu 1994, kigakoreshwa nk\'inyandiko iherekeza dossier isabwa kugirango ahabwe inkunga itangwa na Minisiteri y\'Ubumwe bw\'Abanyarwanda n\'Inshingano Mboneragihugu.' })).toBeVisible();
  await expect(await page.getByText('Igihe dosiye imara : Umunsi')).toBeVisible();
  await expect(await page.getByText('Yatanzwe na :')).toBeVisible();
  await expect(await page.getByText('Igiciro: Ntiyishyurwa')).toBeVisible();
  await expect(await page.getByText('Ntushobora gusaba iyi servisi niba udafite konti ku ui')).toBeVisible();
  await page.locator('#close_btn line').nth(1).click();  
  await new Promise((resolve) => setTimeout(resolve, 1 * 1000));

  const GuardianshipRecordK = await page.getByText('Inyandiko y\'ubwishingire').nth(1);
  await expect(GuardianshipRecordK).toBeVisible();

  const GenderFamilyPromotionMoUsK = await page.getByText('Amasezerano y\'ubufatanye mu').first();
  await expect(GenderFamilyPromotionMoUsK).toBeVisible();

  const LetterforPersonswithDisabilitiesK = await page.getByText('Ibaruwa ifasha abantu bafite').first();
  await expect(LetterforPersonswithDisabilitiesK).toBeVisible();

  const CertificateofSuccessionK = await page.getByText('Icyemezo cy\'izungura').first();
  await expect(CertificateofSuccessionK).toBeVisible();

  const CertificateofCohabitationK = await page.getByText('Icyemezo cy\'imibanire y\'').first();
  await expect(CertificateofCohabitationK).toBeVisible();

  const CertificateforWidowK = await page.getByText('Icyemezo cy\'ubupfakazi').first();
  await expect(CertificateforWidowK).toBeVisible();

  const CertificateofResidenceK = await page.getByText('Icyemezo cy\'uko utuye').first();
  await expect(CertificateofResidenceK).toBeVisible();

  const CertificateofGenocideSurvivorsK = await page.getByText('Icyemezo cy\'uwarokotse').first();
  await expect(CertificateofGenocideSurvivorsK).toBeVisible();

  const BirthServicesK = await page.getByText('Serivisi z\'amavuko').first();
  await expect(BirthServicesK).toBeVisible();

  const MarriageServicesK = await page.getByText('Serivisi z\'ishyingirwa').first();
  await expect(MarriageServicesK).toBeVisible();

  const DeathServicesK = await page.getByText('Serivisi zihabwa uwitabye').first();
  await expect(DeathServicesK).toBeVisible();

  const AdoptionRecordK = await page.getByText('Inyandiko yo kubera umubyeyi').first();
  await expect(AdoptionRecordK).toBeVisible();

  const RecordofRecognitionK = await page.getByText('Inyandiko yo kwemera umwana').first();
  await expect(RecordofRecognitionK).toBeVisible();
});

// test('Test', async ({ page }) => {

// });