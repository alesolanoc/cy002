
describe('Navigate between pages', () => {


    it('Cature screenshot',() => {
        cy.visit('https://demo.opencart.com/')
        cy.screenshot('homePage')
        cy.wait(5000)
        cy.xpath('//img[@title="Your Store"]').screenshot('logo')

        //automatically capture screenshot when test fail the assertion
        cy.xpath('//a[normalize-space()="Cameras"]').click()
        cy.xpath('//h2[normalize-space()="Cameras"]').should('have.text','Camerasss')
        // add in terminal npx cypress run --spec cypress\e2e\CaptureScreenshotsAndVideos.cy.js
    })
})