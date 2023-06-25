//https://www.youtube.com/watch?v=TgLRQhw3GDM&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=10

describe('Handle tabs', () => {
    it.skip('Approach 1 after click a link then open a new window', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.get('div[class="example"] h3').should('have.text',"New Window")
        cy.wait(5000)
        cy.go('back')
        cy.get('div[class="example"] h3').should('have.text',"Opening a new window")
    })
    it('Approach 2 after click a link then new window in current windows', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((e)=>{
            let url=e.prop('href');
            cy.visit(url)
            cy.log(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.get('div[class="example"] h3').should('have.text',"New Window")
        cy.wait(5000)
        cy.go('back')
        cy.get('div[class="example"] h3').should('have.text',"Opening a new window")
    })
})