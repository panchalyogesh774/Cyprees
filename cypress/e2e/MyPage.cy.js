describe('test',() => {
    it('Homepage test', () => {
        cy.visit('http://localhost:3100/')
        cy.get('.login').click()
        cy.get('#username').click()
        cy.get('#username').type('yogesh_01@fosteringlinux.com')
        cy.get('#password').click()
        cy.get('#password').type('Yogesh@123')
        cy.get('#login-submit').click()
        cy.get('.my-page').click()
        // cy.get('#block-select').select('Documents')
        // cy.get('#block-documents > .contextual > .icon-close').click()
        cy.get(':nth-child(2) > .icon-only').click()
        cy.get('p > a').click()
        cy.get(':nth-child(2) > .icon-only').click()
        cy.get('p > input').click()

    })
})