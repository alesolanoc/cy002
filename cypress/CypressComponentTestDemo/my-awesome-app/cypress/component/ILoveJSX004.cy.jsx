import App001 from '../../src/App001'
describe('App001.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<App001/>)
    cy.get('div[class="App001"] h1').should('have.text','Hello React.')
    cy.get('div[class="App001"] h2').should('have.text','Start editing to see some magic happen!')
  })
})
