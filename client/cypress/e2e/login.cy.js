// client/cypress/e2e/login.cy.js
describe('Login Flow', () => {
  it('logs in successfully', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button').click();
    cy.url().should('include', '/dashboard');
  });
});
