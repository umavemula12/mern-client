//this is where will write e2e test

describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        //visit('url) to visit a url
        cy.contains('Welcome');
        //if a test is present in the document
        cy.contains('Register');
        cy.contains('Login');
    });
})