import CodeMan005 from '../../src/CodeMan005'
describe('CodeMan005.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan005/>)
    cy.get(':nth-child(3) > li').should('have.text','Ajay')
  })
})