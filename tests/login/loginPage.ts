import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  
  private _name = super.page.getByPlaceholder('shortname');
  
  public get name() {
    return this._name;
  }

}
