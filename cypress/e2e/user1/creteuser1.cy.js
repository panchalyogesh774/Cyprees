describe ('test' ,() => {
    it('create new user' , () => {
        cy.visit('http://localhost:3100/')
        cy.get('.login').click()
        cy.get('#username').click()
        cy.get('#username').type('admin')
        cy.get('#password').click()
        cy.get('#password').type('Redmine@123')
        cy.get('#login-submit').click()
        cy.get('.administration').click()
        cy.get('.administration').click()
        cy.get(':nth-child(2) > .icon').click()
        cy.get('.icon-add').click()
        cy.get('#user_login').click()
        cy.get('#user_login').type('user1@fosteringlinux.com')
        cy.get('#user_firstname').click()
        cy.get('#user_firstname').type('User')  
        cy.get('#user_lastname').click()
        cy.get('#user_lastname').type('1')
        cy.get('#user_mail').click()
        cy.get('#user_mail').type('user1@fosteringlinux.com')
        cy.get('#user_password').click()
        cy.get('#user_password').type('user1@123')
        cy.get('#user_password_confirmation').click()
        cy.get('#user_password_confirmation').type('user1@123')
        cy.get('[name="commit"]').click()
    })

    it('Add in project' , () => {
        cy.visit('http://localhost:3100/')
        cy.get('.login').click()
        cy.get('#username').click()
        cy.get('#username').type('admin')
        cy.get('#password').click()
        cy.get('#password').type('Redmine@123')
        cy.get('#login-submit').click()
        cy.get('.administration').click()
        cy.get(':nth-child(3) > .icon').click()
        cy.get('#group-7 > .name > a').click()
        cy.get('#tab-users').click()
        cy.get('#tab-content-users > p > .icon').click()
        cy.get('label > input').click()
        cy.get('.buttons > input').click()

    })
})