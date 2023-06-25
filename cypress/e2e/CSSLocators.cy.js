//https://www.youtube.com/watch?v=1XHGJcBZI_0&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=4

describe('CSSLocator', () => {
    it('test1', () => {
        
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('maita').type('{enter}')   // locator by id
    //    cy.get('gNO89b').click()   // locator by name
        cy.get('.O3S9Rb').contains('Imágenes')   //assertion  locator by class
    })
})