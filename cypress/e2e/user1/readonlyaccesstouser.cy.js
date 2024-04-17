describe ('test' ,() => {
    it('Add in project' , () => {
        cy.visit('http://localhost:3100/')
        cy.get('.login').click()
        cy.get('#username').click()
        cy.get('#username').type('admin')
        cy.get('#password').click()
        cy.get('#password').type('Redmine@123')
        cy.get('#login-submit').click()
        cy.get('.administration').click()
        cy.get(':nth-child(7) > .icon').click()
        cy.get('.tabs > ul > :nth-child(2) > a').click()

    })
})