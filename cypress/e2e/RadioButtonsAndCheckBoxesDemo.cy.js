describe('RadioAndCheckBoxxes', () => {
    it('Check Radio Buttons checkes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.xpath('//input[@id="female"]').should('be.visible')
        cy.xpath('//input[@id="male"]').should('be.visible')
        cy.xpath('//input[@id="female"]').check().should('be.checked')
        cy.xpath('//input[@id="male"]').should('not.be.checked')
        cy.xpath('//input[@id="male"]').check().should('be.checked')
        cy.xpath('//input[@id="female"]').should('not.be.checked')
    })
    it('Check Radio Buttons enabled', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.xpath('//input[@id="female"]').should('be.enabled')
        cy.xpath('//input[@id="male"]').should('be.enabled')
        cy.xpath('//input[@id="other"]').should('not.be.enabled')
    })
    it('radio Radio Buttons select', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.xpath('//input[@id="monday"]').check().should('be.checked')
        cy.xpath('//input[@id="monday"]').should('be.enabled')
        cy.xpath('//input[@id="monday"]').uncheck().should('not.be.checked')
        cy.get('input.form-check-input[type*="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type*="checkbox"]').last().check().should('be.checked')
    })
    it('Drop downs', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.xpath('//select[@class="custom-select"]').select('Italy').contains("Italy")
    })
    it('Drop downs1', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.xpath('//span[@id="select2-billing_country-container"]').click()
        cy.xpath('//input[@role="combobox"]').type('Bol').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Bolivia')

    })
    it('Drop downs2', () => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
        cy.xpath('//input[@placeholder="Buscar en Wikipedia"]').type('Delhi')
        cy.xpath('//div[@class="cdx-menu cdx-menu--has-footer"]').contains('Delhi Hills').click()
    })
    it('Drop downs3 select option form dynamic drop down', () => {
        cy.visit('https://www.google.com')
        cy.xpath('//textarea[@id="APjFqb"]').type('cypress automation')
        cy.get('div.wM6W7d>span').should('have.length',12)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
            cy.log($list)
            if($el.text() == "cypress automation tool")
                cy.wrap($el).click()
        })
        cy.xpath('//textarea[@id="APjFqb"]').should('have.value','cypress automation tool')
    })

})