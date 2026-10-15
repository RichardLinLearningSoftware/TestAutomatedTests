/// <reference types="cypress" />

context('Test transacties', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('Login logout', () => {
        cy.contains('Melvin').should('have.class', 'login__account').click()
        cy.get('button').should('have.text', 'Uitloggen').click()
        cy.contains('Sara').should('have.class', 'login__account').click()
    })
})