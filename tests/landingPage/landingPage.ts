import { BasePage } from '../BasePage';

export class LandingPage extends BasePage {
  
  private loginLink = this.page.getByRole('link', { name: 'Log in' })

  async getTitle() {
    return await super.page.title();
  }

  async clickLogin() {
    this.loginLink.click();
  }

}
