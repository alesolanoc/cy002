import CodeMan010 from '../../src/CodeMan010'
describe('CodeMan010.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan010/>)
    cy.get(':nth-child(2) > input').type('alejo')
    cy.get(':nth-child(3) > input').type('solano')
    cy.get('[type="submit"]').click()
    cy.on('window:alert',(t) => {
        expect(t).to.contains('have entered')
    })
  })
})