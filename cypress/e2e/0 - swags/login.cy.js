/// <reference types="cypress" />

context('Logins', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login válido (Standard User)', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('be.visible');
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('[data-test="primary-header"] div.app_logo').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.get('#login_button_container div.error-message-container').should('be.exist');
  });

//   it('Login inválido (Locked User)', () => {
    
//   });

})