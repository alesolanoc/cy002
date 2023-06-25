
describe('Navigate between pages', () => {


    it('Navigate pages',() => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq',"Your Store");
        cy.xpath('//a[normalize-space()="Cameras"]').click()
        cy.xpath('//h2[normalize-space()="Cameras"]').should('have.text','Cameras')
        cy.go('back')   // go to home page
        cy.title().should('eq',"Your Store");
        cy.go('forward')   // go to camera page
        cy.xpath('//h2[normalize-space()="Cameras"]').should('have.text','Cameras')
        cy.go(-1)   // go to home page
        cy.title().should('eq',"Your Store");
        cy.go(1)   // go to camera page
        cy.xpath('//h2[normalize-space()="Cameras"]').should('have.text','Cameras')
        cy.reload()
        cy.xpath('//h2[normalize-space()="Cameras"]').should('have.text','Cameras')
        cy.go(-1)   // go to home page
        cy.title().should('eq',"Your Store");
        cy.reload()
        cy.title().should('eq',"Your Store");
    })
})