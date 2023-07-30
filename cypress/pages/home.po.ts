import { CommonAction } from './common.po';

export class HomePage extends CommonAction {

  verifyBuyProxyButtonVisible() {
    cy.get('div.card-header a').contains("Buy proxies").should('be.visible');
    return this;
  }

}