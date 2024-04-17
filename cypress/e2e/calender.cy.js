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
        cy.get('.calendar').click()
        cy.get('#filters > .icon').click()
        cy.get('#filters > .icon').click()
        cy.get('#cb_status_id').click()
        cy.get('#cb_status_id').click()
        cy.get('#month').select('March')
        cy.get('#year').select('2024')
        cy.get('.icon-checked').click()
        cy.get('.today > :nth-child(2)').click()
        cy.get('.icon-reload').click()    
                    
        })

})