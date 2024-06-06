import { test, expect } from '@playwright/test';
import { LandingPage } from './landingPage';

test.describe('Landing Page', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.navigate("/");
  });

  test('Should display correct page title', async () => {
    const title = await landingPage.getTitle();
    expect(title).toContain('FareHarbor');
  });

  test.afterEach(async () => {
    landingPage.close()
  });

});
