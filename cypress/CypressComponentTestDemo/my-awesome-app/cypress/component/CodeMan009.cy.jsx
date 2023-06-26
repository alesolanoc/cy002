import CodeMan009 from '../../src/CodeMan009'
describe('CodeMan009.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan009/>)
    cy.get('h1').should('be.visible')
    cy.get('button').click()
    cy.get('h1').should('have.text','Its a best ReactJS tutorial')
  })
})