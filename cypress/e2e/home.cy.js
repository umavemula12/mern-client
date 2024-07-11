//client/cypress/e2e/home.cy.js
describe('Home Page test',()=>{
    it('Check The Input field',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderella')
        cy.get('button.bg-blue').should('be.visible')
        cy.get('button.bg-blue').click()
        cy.contains('Welcome, Cinderella')

        cy.get('input').should('have.value','Cinderella')
    })
})