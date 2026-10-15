/// <reference types="cypress" />

context('Test transacties', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('naam veranderen naar ;', () => {
        cy.contains('Melvin').should('have.class', 'login__account').click()
        cy.visit('http://localhost:3000/settings')
        cy.get('.accountName-input').should('have.attr', 'name', 'accountName').clear().should('have.value', '')
        cy.get('.accountName-input').should('have.attr', 'name', 'accountName').type(';').should('have.value', ';')
        cy.get('.form-row button').should('have.text', 'Opslaan').click()
        cy.get('.alert').should('have.text', 'het is gefaald naam mag alleen letters, nummers, underscore en spaties bevatten')
        cy.visit('http://localhost:3000')
        cy.get('.accounts__account-name').should('have.text', 'Rekening van Melvin')
    })
})