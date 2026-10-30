const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the SauceDemo login page', () => {
  cy.visit('/');
});

When(
  'I log in with username {string} and password {string}',
  (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }
);

Then('I should see the products page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('contain', 'Products');
});

Then('I should see a login error', () => {
  cy.get('[data-test="error"]').should('be.visible');
});

When('I add the {string} to the cart', (productName) => {
  const slug = productName.toLowerCase().replace(/\s+/g, '-');
  cy.get(`[data-test="add-to-cart-${slug}"]`).click();
});

Then('the cart badge should show {string}', (count) => {
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', count);
});

When('I open the shopping cart', () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

Then('I should see {string} in the cart', (productName) => {
  cy.get('[data-test="inventory-item-name"]').should('contain', productName);
});

When('I start checkout', () => {
  cy.get('[data-test="checkout"]').click();
});

When(
  'I enter checkout information {string} {string} {string}',
  (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  }
);

When('I finish the order', () => {
  cy.get('[data-test="finish"]').click();
});

Then('I should see the order confirmation', () => {
  cy.get('[data-test="complete-header"]').should(
    'contain',
    'Thank you for your order!'
  );
});
