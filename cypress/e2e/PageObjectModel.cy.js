import Login from "C:/Users/aleja/OneDrive/Documentos/Cypress projects/cy002/cypress/PageObjects/LoginPage.js"
describe('Page Object Model', () => {

    it('get data from feature.json file',() => {
        const ln = new Login();
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangejson').then((data)=>{
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.setClickSubmit()
         /*   cy.get("input[placeholder='Username']").type(data.username)
            cy.get('input[placeholder="Password"]').type(data.password)
            cy.xpath('(//button[normalize-space()="Login"])[1]').click()*/
            cy.get(":nth-child(2) > .oxd-main-menu-item").click()
            ln.setExpectedValue(data.expected)
          //  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",data.expected)
        })
    })
})