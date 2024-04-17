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
        cy.get('.issues').click()
        cy.get('.icon-add').click()
        cy.get('#issue_subject').click()
        cy.get('#issue_subject').type('Testing')
        cy.get('#issue_description').click()
        cy.get('#issue_description').type('Automation testing')
        cy.get('#issue_status_id').select('new')
        cy.get('#issue_priority_id').select('p1')
        cy.get('#issue_start_date').click()
        cy.get('#issue_start_date').type('2024-02-28')
        cy.get('#issue_assigned_to_id')
        cy.get('.assign-to-me-link').click()
        cy.get('#issue_due_date').click()
        cy.get('#issue_due_date').type('2024-02-29')
        cy.get('#issue_estimated_hours').click()
        cy.get('#issue_done_ratio')
        cy.get('[name="commit"]').click()
        cy.get('#content > :nth-child(2) > .icon-edit').click()
        cy.get('#issue_notes').click()
        cy.get('#issue_notes').type('Done Successfully')
        cy.get('#issue-form > [type="submit"]').click();


                    
        })

})