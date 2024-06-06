import { test, expect } from '@playwright/test';
import { CookiesBannerPage } from './cookiesBannerPage';

test.describe('Accept Cookies', () => {
  let cookiesBannerPage: CookiesBannerPage;

  test.beforeEach(async ({ page }) => {
    cookiesBannerPage = new CookiesBannerPage(page);
    await cookiesBannerPage.navigate("/");
  });

  test('Verify cookies panel is not visible after accepting', async () => {   
    
    await expect(cookiesBannerPage.banner).toBeVisible();
    await cookiesBannerPage.acceptBtn.click();
    await expect(cookiesBannerPage.banner).toBeHidden();
    
  });

  test.afterEach(async () => {
    cookiesBannerPage.close();
  });

});
