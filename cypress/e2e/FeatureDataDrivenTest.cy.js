describe('feature json file data driven test', () => {
    
    
        it('get data from feature.json file',() => {
            cy.fixture('orangejson2').then((data)=>{
                data.forEach((userdata) => {
                    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                    cy.get("input[placeholder='Username']").type(userdata.username);
                    cy.get("input[placeholder='Password']").type(userdata.password);
                    cy.xpath('(//button[normalize-space()="Login"])[1]').click()
                    if (userdata.username=="Admin" && userdata.password=="admin123"){
                        cy.wait(5000)
                        cy.get(":nth-child(2) > .oxd-main-menu-item").click()
                        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",userdata.expected)
                        cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
                        cy.xpath('//a[normalize-space()="Logout"]').click()
                    }
                    else{
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should("have.text",userdata.expected)
                    }
                });
            })
    })
})