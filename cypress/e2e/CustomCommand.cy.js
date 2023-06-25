describe('Custom commands', () => {
    
    
    it.skip('click on link using custom command',() => {
        cy.visit('https://demo.nopcommerce.com/')
        //direct access without using custom command
        //cy.get('div[class="item-grid"] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)').click()
        //cy.get('div[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch')

        //  using custom command instead above
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get('div[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    it.only('click on link',() => {
        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink("APPLE MACBOOK PRO 13-INCH");
        cy.get('div[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    // custom command for login
    it.skip('Custom command for login',() => {
        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink("Log in");
        cy.wait(3000)
        cy.loginapp('alejandro.solano.38@gmail.com','Diegofabian6!')
    })
})