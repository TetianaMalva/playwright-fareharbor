import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { LandingPage } from '../landingPage/landingPage';
import { CookiesBannerPage } from '../cookiesBanner/cookiesBannerPage';

test.describe('Login Page', () => {

  let loginPage: LoginPage;
  let landingPage: LandingPage;
  let cookiesBannerPage: CookiesBannerPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    landingPage = new LandingPage(page);
    cookiesBannerPage = new CookiesBannerPage(page);
    await loginPage.navigate("/");
    await acceptCookies();
  });

  test('Login page should have required elements', async () => {
    await landingPage.clickLogin()
    await expect(loginPage.name).toBeVisible();
  });

  test.afterEach(async () => {
    loginPage.close()
  });

  async function acceptCookies() {
    await expect(cookiesBannerPage.banner).toBeVisible();
    await cookiesBannerPage.acceptBtn.click();
    await expect(cookiesBannerPage.banner).toBeHidden();
  }

});
