/**
 * E2E Teest, Cypress
 */

describe('Form validation test', () => {
  beforeEach(() => {
    cy.visit('/contact'); // relative path
  });

  it('Submits the form and displays a success message', () => {
    // Example: Test for successful form submission
    cy.get('[data-testid="nameField"]').type('John Doe');
    cy.get('[data-testid="emailField"]').type('john@example.com');
    cy.get('[data-testid="messageField"]').type('This is a test message that is sufficiently long.');
    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-testid=submitMessage]').should('contain', 'Message submitted successfully!');
  });

});

describe('Button State Test', () => {
  it('Checks if the submit button is disabled', () => {
    // Visit the page where your form is located
    cy.visit('/contact');

    // Check if the submit button is disabled
    cy.get('.button[data-testid="submitButton"]').should('be.disabled');
  });

  it('checks if the submit button becomes clickable after form validation', () => {
    // Visit the page where your form is located
    cy.visit('/contact');

    // Fill in the form fields correctly to pass validation
// Example of enabling the button by fulfilling form requirements
    cy.get('input[data-testid="nameField"]').type('Jane Doe');
    cy.get('input[data-testid="emailField"]').type('jane@example.com');
    cy.get('textarea[data-testid="messageField"]').type('Hello, this is a test message.');

// Now attempt to click the button, expecting it to be enabled
    cy.get('.button[data-testid="submitButton"]').should('not.be.disabled').click();

  });
});
