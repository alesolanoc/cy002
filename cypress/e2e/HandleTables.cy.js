describe('Handle Tables', () => {
    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.xpath('//input[@id="input-username"]').type('demo')
        cy.xpath('//input[@id="input-password"]').type('demo')
        cy.get('button[type="submit"]').click()
        cy.get('.btn-close').click()
    //    cy.xpath('(//i[@class="fas fa-bars"])[1]').click()
        cy.xpath('//a[@class="parent collapsed"][normalize-space()="Customers"]').click()
        cy.get('li[id="menu-customer"] li:nth-child(1) a:nth-child(1)').click()
    })
    it.skip('Check number of rows and columns', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')     //count number of rows
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7')     //count number of columns
   })
   it.skip('Read data from all table', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
            .each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col,index,$cols)=>{
                        cy.log($col.text())
                    })
            })
        })     //count number of rows
    })
    it('Pagination in table', () => {
        //find total number of pages
        cy.xpath('//div[@class="col-sm-6 text-end"]').then((e)=>{
            let myPage = e.text()
            cy.log(myPage)
            let totalPages = myPage.substring(myPage.indexOf("(")+1,myPage.indexOf("Pages")-1);
            cy.log(totalPages)
        })
        let totalPages = 5
        for(let p=1;p<=totalPages;p++){
            if(totalPages>1){
                cy.log("Active Page: "+p)
                cy.get('ul[class="pagination"]>li:nth-child('+p+')').click()
                cy.wait(3000)
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)')
                            .then((e)=>{
                                cy.log(e.text())        //get email
                            })
                    })
                })     //count number of rows
            }
        }
    })
})