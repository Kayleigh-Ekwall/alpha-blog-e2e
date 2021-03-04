describe('Create New Article', () => {
	before(() => {
		cy.resetDatabase();

		cy.factory('user', {
			username: 'tester',
			email: 'tester@gmail.com',
			password: 'tester123'
		});

		cy.login('tester@gmail.com', 'tester123');
	});

	beforeEach(() => {
		cy.visit('/articles/new');
		Cypress.Cookies.preserveOnce('_alpha_blog_session');
	});

	it('Cancel creating new article, return to articles index', () => {
		cy.get('a[href*="/articles"]').contains('Cancel and return to articles listing').click();
	});

	it('Enter article title only', () => {
		cy.get('#article_title').type('Article title');
		cy.get('input[type=submit]').click();
		cy.contains("Description can't be blank");
	});

	it('Enter article description only', () => {
		cy.get('#article_description').type('Article Description');
		cy.get('input[type=submit]').click();
		cy.contains("Title can't be blank");
	});

	it('Enter needed fields, click submit', () => {
		cy.get('#article_title').type('Article title');
    cy.get('#article_description').type('Article Description');
		cy.get('input[type=submit]').click();
    cy.contains('Article was created successfully.')
  });
});
