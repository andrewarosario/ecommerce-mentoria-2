describe('login page', () => {
  beforeEach(() => cy.visit('/'));

  it('should login', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('user@mail.com', '123456');

    // should redirect to home
    cy.url().should('include', '/home');
  });
});
