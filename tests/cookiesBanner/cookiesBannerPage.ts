import { BasePage } from '../BasePage';

export class CookiesBannerPage extends BasePage {

  private _banner = super.page.getByLabel('Cookie banner');

  private _acceptBtn = this.banner.getByRole('button', { name: 'Accept' });

  public get banner() {
    return this._banner;
  }

  public get acceptBtn() {
    return this._acceptBtn;
  }

}
