import App from '../../src/App'
describe('CodeMan006.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<App/>)
    cy.get('button').should('have.contain','0')
    cy.get('button').click()
    cy.get('button').should('have.text','count is 1')
    cy.get('button').dblclick() 
    cy.get('button').should('have.text','count is 3')
    cy.get('[href="https://vitejs.dev"] > .logo').should('be.visible')
    cy.get('[href="https://react.dev"] > .logo').click()
    cy.wait(5000)

  })
})