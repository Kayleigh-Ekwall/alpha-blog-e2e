describe ("Navigation Test", () => {
  before(() => {
    cy.resetDatabase()
  })

  beforeEach(() => {
    cy.visit('/')
  })
  
  it("Visit the signup page through nav", () => {
    cy.get('.nav-item')
    .contains('Signup')
    .click()

    cy.url().should('include', '/signup')
  })

  it("Visit the signup page through button", () => {
    cy.get('.btn')
    .contains('Sign Up')
    .click()

    cy.url().should('include', '/signup')
  })

  it("Visits the login page", () => {
    cy.get('.nav-item')
    .contains('Login')
    .click()

    cy.wait(500)

    cy.url().should('include', '/login')
  })

  it("Visits the articles index", () => {
    cy.get('.nav-item')
    .contains('Articles')
    .click()

    cy.get('.dropdown-menu')
    .contains('View articles')
    .click()

    cy.url().should('include', '/articles')
  })

  it("Visits the create new article page", () => {
    cy.factory('user', {username: 'jane', email: 'jane@email.com', password: 'janespassword123'})

    cy.login('jane@email.com','janespassword123')

    cy.visit('/articles/new')

    cy.url().should('include', '/articles/new')
  })

  it("Visit the bloggers/users index", () => {
    cy.get('.nav-item')
    .contains('Bloggers')
    .click()

    cy.url().should('include', '/users')
  })
})
