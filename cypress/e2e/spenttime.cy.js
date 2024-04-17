describe('test',() => {
    it('Login test',() =>{
        cy.visit('http://localhost:3100/')
        cy.get('.login').click()
        cy.get('#username').click()
        cy.get('#username').type('yogesh_01@fosteringlinux.com')
        cy.get('#password').click()
        cy.get('#password').type('Yogesh@123')
        cy.get('#login-submit').click()
        cy.get(':nth-child(3) > .projects').click()
        cy.get('.time-entries').click()
        cy.get('#filters > .icon').click()
        cy.get('#filters > .icon').click()
        cy.get('#filters > .icon')
        cy.get('.icon-checked').click()    
                    
        })

})