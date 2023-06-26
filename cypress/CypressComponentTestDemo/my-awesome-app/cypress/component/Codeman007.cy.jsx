import CodeMan007 from '../../src/CodeMan007'
describe('CodeMan007.cy.jsx', () => {
  it('playground', () => {
    cy.mount(<CodeMan007/>)
    cy.get('table')
    .each(($row,index,$rows)=>{
        cy.wrap($row).within(()=>{
            cy.get('td').each(($col,index,$cols)=>{
                cy.log($col.text())
            })
        })
    })   
  })
})