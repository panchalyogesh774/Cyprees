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
        cy.get('.activity').click()
        cy.get('#activity_scope_form > :nth-child(3)').click()
        cy.get('#activity_scope_form > :nth-child(3)').type('2024-02-27')
        cy.get('#user_id').select('Redmine Admin')
        cy.get('#show_wiki_edits').click()
        cy.get('#show_wiki_edits').click()
        cy.get('.button-small').click()
        cy.get('.button-small').click()
        cy.get('.next > a').click()

            
            // cy.get('#from').click()
            // cy.get('#user_id').select('Deepak Rawat')
            // cy.get('.button-small').click()
            // cy.get('.previous > a').click()
            // cy.get('.previous > a').click()
                    
        })

})