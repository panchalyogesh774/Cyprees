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
            cy.get('.contextual > .icon').click()
            cy.get('#project_name').click()
            cy.get('#project_name').type('Test-Project')
            cy.get('#project_description').click()
            cy.get('#project_description').type('This is my testing project.')
            cy.get('#project_homepage').click()
            cy.get('#project_is_public').click()
            cy.get('#project_is_public').click()
            // cy.get('#project_parent_id').select('Learnhub')
            cy.get('#project_inherit_members').click()
            cy.get('#project_inherit_members').click()
            cy.get('#project_modules > :nth-child(2)').click()
            cy.get('#project_modules > :nth-child(2)').click()
            cy.get('[name="commit"]').click()
            cy.get(':nth-child(3) > .projects').click()
            
            
            
                    
        })

})