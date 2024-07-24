describe('login', () => {
  beforeEach(() => cy.visit('/'));

  it('should login', () => {
    cy.login('user@mail.com', `123456`);
    // should redirect to home
    cy.url().should('include', '/home');
  });
});
