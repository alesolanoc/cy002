describe('Type of Alerts',() => {
    it('JS Alert 1',() => {
        // javascript alert: it will have some text and an OK button, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Alert"]').click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.xpath('//p[@id="result"]').should('have.text',"You successfully clicked an alert")
    })
    it('JS Alert 2',() => {
        // javascript confirm alert: it will have some text and OK and candel button, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Confirm"]').click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.xpath('//p[@id="result"]').should('have.text',"You clicked: Ok")
    })
       it('JS Alert 3',() => {
        // javascript confirm alert: it will have some text and OK and candel button press OK, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Confirm"]').click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.xpath('//p[@id="result"]').should('have.text',"You clicked: Ok")
    })
    it('JS Alert 4',() => {
        // javascript confirm alert: it will have some text and OK and candel button press cancel, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Confirm"]').click()
        cy.on('window:confirm',() => false)
        cy.xpath('//p[@id="result"]').should('have.text',"You clicked: Cancel")
    })
    it('JS Alert 5',() => {
        // javascript confirm alert: it will have an input value and accept and candel button press accept, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Prompt"]').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.xpath('//p[@id="result"]').should('have.text','You entered: welcome')
    })
    it('JS Alert 6',() => {
        // javascript confirm alert: it will have an input value and accept and candel button press cancel, the alert is not displayed when running cypress but cypress handle it
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath('//button[normalize-space()="Click for JS Prompt"]').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').callsFake(() => null);
        })
        cy.xpath('//p[@id="result"]').should('have.text','You entered: null')
    })
})