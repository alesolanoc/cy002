

// https://www.youtube.com/watch?v=z3IoHcqWxZg&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=5
describe('CSSLocator', () => {
    it('Implicit assertion', () => {
        
        // should   and
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.co')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm').and('contain','hrm').and('not.contain','sdf')
        cy.title().should('contain','Orange').and('eq','OrangeHRM')
        cy.get('.orangehrm-login-error').should('be.visible').and('exist')
        cy.xpath('//p[normalize-space()="Username : Admin"]').should('be.visible').and('exist')
        cy.xpath('//p[normalize-space()]').should('contain','Admin')
    })
    it('explicit assertion', () => {
        
        // should   and
        let expName = "xyz";
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@placeholder="Username"]').type("Admin")
        cy.xpath('//input[@placeholder="Password"]').type("admin123")
        cy.xpath('(//button[normalize-space()="Login"])[1]').click()
        cy.xpath('(//p[@class="oxd-userdropdown-name"])[1]').then( (x)=>{
            let actName=x.text()
            //BDD style
//            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)
            //TDD style
  //          assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
    })
})