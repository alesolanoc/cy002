
describe('feature json files', () => {

    it('get data from feature.json file',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangejson').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get('input[placeholder="Password"]').type(data.password)
            cy.xpath('(//button[normalize-space()="Login"])[1]').click()
            cy.get(":nth-child(2) > .oxd-main-menu-item").click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",data.expected)
        })
    })
})