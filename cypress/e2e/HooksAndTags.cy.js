//  before
//  after
//  beforeeach
//  aftereach



describe('hooks and tags', () => {
    before(() => {
        cy.log("executed before")
    })
    after(() => {
        cy.log("executed after")
    })
    beforeEach(() => {
        cy.log("executed before each")
    })
    afterEach(() => {
        cy.log("executed after each")
    })
    it('it 1',() => {
        cy.log("it 1")
    })   
    it('it 2',() => {
        cy.log("it 2")
    }) 
})