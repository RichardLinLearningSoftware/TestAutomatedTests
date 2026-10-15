/// <reference types="cypress" />

context('Test transacties', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })
    it('Geld overmaken met negatief balance', () => {
        cy.contains('Melvin').should('have.class', 'login__account').click()
        cy.visit('http://localhost:3000/transfer')
        cy.contains('Naar rekening').children().should('have.attr', 'name', 'toaccount').select('Sara Ravestein')
        cy.contains('Bedrag').children().children().get('.transfer__currency').should('have.attr', 'name', 'currency').select('€')
        cy.contains('Bedrag').children().children().get('.amount-input').should('have.attr', 'name', 'amount').type(2168.64)
        cy.contains('Omschrijving').children().should('have.attr', 'name', 'description').type("a")
        cy.get('.form-row button').should('have.text', 'Overboeken').click()
        cy.visit('http://localhost:3000/transfer')
        cy.contains('Naar rekening').children().should('have.attr', 'name', 'toaccount').select('Sara Ravestein')
        cy.contains('Bedrag').children().children().get('.transfer__currency').should('have.attr', 'name', 'currency').select('€')
        cy.contains('Bedrag').children().children().get('.amount-input').should('have.attr', 'name', 'amount').type(100)
        cy.contains('Omschrijving').children().should('have.attr', 'name', 'description').type("a")
        cy.get('.form-row button').should('have.text', 'Overboeken').click()
        cy.get('.alert').should('have.text', 'Gevald acount heeft niet genoeg bedrag.')
    })
})