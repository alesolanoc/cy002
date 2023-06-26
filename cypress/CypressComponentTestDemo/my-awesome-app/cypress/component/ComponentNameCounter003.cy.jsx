import Counter from '../../src/counter'
const counterSelector = '[data-cy="counter"]';
const incrementSelector = '[aria-label="increment"]';
const decrementSelector = '[aria-label="decrement"]';

describe('ComponentNameCounter003.cy.jsx', () => {
  it('press 2 times increase', () => {
    cy.mount(<Counter />)
    cy.get(incrementSelector).click()
    cy.get(incrementSelector).click()
    cy.get(counterSelector).should('have.text','2')
  })
  it('press 1 time decreseae', () => {
    cy.mount(<Counter />)
    cy.get(decrementSelector).click()
    cy.get(counterSelector).should('have.text','-1')
  })
})