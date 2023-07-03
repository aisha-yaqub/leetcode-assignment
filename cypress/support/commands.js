// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/> 


Cypress.Commands.add('clickOnCross', (text) => {
    cy.get('label').contains(text).parents('.view').find('button').invoke('show').click();
})

Cypress.Commands.add('clickDifficultyDropDown', () => {
    cy.get('#headlessui-menu-button-\\:Rj5j9d5t6\\:').click();
})

Cypress.Commands.add('crossDifficultyTag', () => {
    cy.get('.m-1 svg').click();
})