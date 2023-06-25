describe('XPathLocators', () => {
    it('test2', () => {
        cy.visit('https://www.google.com/')
        cy.xpath('(//textarea[@id="APjFqb"])[1]').type('maita').type('{enter}')
        cy.xpath('(//div[contains(text(),"Imágenes")])[1]').contains('Imágenes')
   })
})