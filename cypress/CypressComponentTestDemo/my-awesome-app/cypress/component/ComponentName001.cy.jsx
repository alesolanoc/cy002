import Demo from '../../src/DemoComponent'

describe('ComponentName001.cy.jsx', () => {
  const dateNow = new Date().toLocaleDateString()
  it('Default Message', () => {
    cy.mount(<Demo/>)
    cy.get('#message').should('have.text','Hello Browserstack! Good Morning')
    cy.get('#date').should('have.text','Today\'s date is: '+ dateNow)
  })
  it('Good Evening Message', () => {
    cy.mount(<Demo greetings='Good Evening'/>)
    cy.get('#message').should('have.text','Hello Browserstack! Good Evening')
    cy.get('#date').should('have.text','Today\'s date is: '+ dateNow)
  })
})