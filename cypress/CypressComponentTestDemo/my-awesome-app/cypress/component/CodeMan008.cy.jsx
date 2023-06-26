import CodeMan008 from '../../src/CodeMan008'
describe('CodeMan008.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan008/>)

    cy.get('button').trigger('mouseover').click()
    cy.get('button').should('be.visible')
    cy.get('input').type('sdfsfdsdf{enter}')
  })
})