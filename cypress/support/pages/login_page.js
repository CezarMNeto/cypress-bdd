// 4 - Criar as ações da page

/// <reference types="cypress" />

export default {
    btnLogin() {
        cy.get('#btnLogin')
            .click();
    },

    checkErrorMessage(message) {
        cy.get('.invalid_input')
            .should('have.text', message);
    },

    fillEmail(email) {
        cy.get('#user')
            .type(email);
    },

    fillPassword(senha) {
        cy.get('#password')
            .type(senha);
    },

    checkSuccessMessage(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)

    }

}