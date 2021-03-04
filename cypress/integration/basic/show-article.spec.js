describe('Show page for article', () => {
	before(() => {
		cy.resetDatabase();

		cy.factory('user', {
			username: 'tester',
			email: 'tester@gmail.com',
			password: 'tester123'
		});

		cy.login('tester@gmail.com', 'tester123');

		cy.create_article('Article title', 'Article description');

		cy.visit('/articles');

    /* 
      TODO:
      This whole thing below is a convoluted way to extract the href
      out of a button so we can save it for later to check if the
      app navigated to the correct place.
      I feel like there is and should be an easier way to grab an article id
      to ensure I go to the right place.
      This breaks the isolation of the test because we start on the article index
      then move to the show page. This needs to be moved around.
      I should probably make a fixture with a fake article and just check to see 
      if the information for the user, title, and description matches up and not check the url.
      This part could probably go to the article index page instead to make sure we successfully
      navigate to the correct article show page.
      TT _ TT this took hours to get right...
    */
   
		cy.get('a[href*="articles/"]')
    .contains('View')
    .invoke('attr', 'href').then((href) => {
			const article_path = href;
			cy.wrap(article_path).as('article_path');
		});

		cy.get('a[href*="articles/"]').contains('View').click();

		cy.get('@article_path').then((article_path) => {
			cy.url().should('include', article_path);
		});
	});

	beforeEach(() => {
		Cypress.Cookies.preserveOnce('_alpha_blog_session');
	});

	it("User can go to article's show page", () => {});
});
