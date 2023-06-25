describe('feature json files', () => {

let userdata;
before(() => {
    cy.fixture('orangejson').then((data)=>{
        userdata=data;
    })
})


    it('get data from feature.json file',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get('input[placeholder="Password"]').type(userdata.password)
            cy.xpath('(//button[normalize-space()="Login"])[1]').click()
            cy.get(":nth-child(2) > .oxd-main-menu-item").click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",userdata.expected)
        
    })
})
