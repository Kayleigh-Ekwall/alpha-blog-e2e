// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("resetDatabase", () => {
  cy.request('DELETE', '/cypress/cleanup').as('cleanup')
})

//creates test data using factory bot
//name field is the factory that is in the rails app
//attributes is all the stuff you want to give it (lined out in the factory rb file)

Cypress.Commands.add("factory", (name, attributes) => {
  cy.request('POST', '/cypress/factories', {
    name: name,
     attributes: attributes || {}
  }).as('test data')
})

Cypress.Commands.add('signup', (username, email, password) => {
  cy.request('POST', '/users', {
    username: username,
    email: email,
    password: password
  })
})

Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', '/login', {
    email: email,
    password: password
  })

  cy.reload()
})

