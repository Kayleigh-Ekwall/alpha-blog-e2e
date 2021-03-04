describe("Signup/Login/Logout Test", () => {
  before(() => {
    cy.resetDatabase()
  })

  it("Signup", () => {
    cy.visit('/signup')
    cy.get('input[id=user_username]').type('tester')
    cy.get('input[type=email]').type('tester@gmail.com')
    cy.get('input[id=user_password]').type('tester123')
    cy.get('input[type=submit]').click()
    cy.contains('Welcome to the Blog')
  })

  it("Login", () => {
    cy.visit('/login')
    cy.get('input[type=email]').type('tester@gmail.com')
    cy.get('input[id=session_password]').type('tester123')
    cy.get('input[type=submit]').click()
    cy.contains('Login successful')
  })

  it("Logout", () => {
    cy.login('tester@gmail.com', 'tester123')
    cy.get('.nav-link')
    .contains('Log Out')
    .click()
    cy.contains('Logged out successfully')
  })

})