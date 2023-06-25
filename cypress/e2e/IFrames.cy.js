import 'cypress-iframe'

describe('Handle IFrames', () => {
    it.skip('approach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe=cy.xpath('//iframe[@id="mce_0_ifr"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
        iframe.clear().type("holaaaa {control+a}");
        cy.get('[aria-label="Bold"]').click()

   })
   it.skip('approach 2 using a custom comand', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.getIframe('//iframe[@id="mce_0_ifr"]').clear().type("holaaaa {control+a}");
    cy.get('[aria-label="Bold"]').click()
    })
    it('approach 3 using a cypress plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr');    //will load the frame passing the ID
        cy.iframe('#mce_0_ifr').clear().type("holaaaa {control+a}");
    })
})