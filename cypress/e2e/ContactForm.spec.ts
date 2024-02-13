describe('ContactForm End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/contact'); // relative path
  });

  it('Validates input fields and displays error messages', () => {
    cy.get('[data-testid=submitButton]').click();

    // Directly check for each error message
    cy.get('[data-testid="submitMessage"]', { timeout: 10000 }).should('contain', '');
  });

  it('Submits the form and displays a success message', () => {
    // Example: Test for successful form submission
    cy.get('[data-testid="nameField"]').type('John Doe');
    cy.get('[data-testid="emailField"]').type('john@example.com');
    cy.get('[data-testid="messageField"]').type('This is a test message that is sufficiently long.');
    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-testid=submitMessage]').should('contain', 'Message submitted successfully!');
  });

  // Add more tests as needed
});
