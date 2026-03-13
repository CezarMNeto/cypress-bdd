// 3 - Criar as ações da page

/// <reference types="cypress" />

export default {
    accessLogin() {
        cy.visit("/")
            .get('#top_header')

        cy.get('.fa-user1')
            .click();
    },

    accessRegister() {
        cy.visit("/")
            .get('#top_header')

        cy.get('.fa-lock')
            .click();
    }
}