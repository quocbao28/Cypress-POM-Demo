import './commands';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-xpath';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-mochawesome-reporter/register';


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})