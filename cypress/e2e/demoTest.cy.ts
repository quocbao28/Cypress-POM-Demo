import { LoginPage } from '../pages/login.po';
import { HomePage } from '../pages/home.po';


describe('Demo test', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {

    loginPage.openUrl("");
  })

  it('Verify user can login by Admin role', () => {
    loginPage.loginAdminPage("admin");
    homePage.verifyBuyProxyButtonVisible();
  });

});