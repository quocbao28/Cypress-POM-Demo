import './commands';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-xpath';
// eslint-disable-next-line import/no-extraneous-dependencies
import addContext from 'mochawesome/addContext'


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.on("test:after:run", (test, runnable) => {

  let videoName = Cypress.spec.name
  videoName = videoName.replace('/.js.*', '.js')
  const videoUrl = 'videos/' + videoName + '.mp4'

  addContext({ test }, videoUrl)
});