import { CommonAction } from './common.po';
import user from '../fixtures/account.json'

export class LoginPage extends CommonAction {

  loginAdminPage(value: string) {
    let email: string = "";
    let password: string = "";

    switch (value) {
      case "admin":
        email = user.admin.email;
        password = user.admin.password;
        break;
      case "staff":
        // code block
        break;
      case "reseller":
        // code block
        break;
      default:
        cy.log("Please check account type");
    }
    cy.log("Login to Admin page by role " + value);

    cy.get("input#email").type(email);
    cy.get("input#password").type(password);
    cy.get("button[type='submit']").click();

  }

}