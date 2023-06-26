import CodeMan004 from '../../src/CodeMan004'
describe('CodeMan004.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan004/>)
    cy.get('p').should('have.text','This websites contains the great CS tutorial.')
  })
})