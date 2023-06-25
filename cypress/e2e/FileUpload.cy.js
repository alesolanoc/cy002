//https://www.youtube.com/watch?v=2sLtdJAkGvU&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=14

import 'cypress-file-upload'

describe('Upload Files', () => {
    it.skip('upload a file as normal 1', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.xpath('//input[@id="file-upload"]').attachFile('new.txt')    //upload file from fixture
        cy.wait(2000)
        cy.xpath('//input[@id="file-submit"]').click()
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text','File Uploaded!')
   })
   it.skip('upload a file as normal  and rename it 1', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.xpath('//input[@id="file-upload"]').attachFile({filePath:'new.txt', filename:'renamed.txt'})    //upload file from fixture
    cy.wait(2000)
    cy.xpath('//input[@id="file-submit"]').click()
    cy.wait(5000)
    cy.get('div[class="example"] h3').should('have.text','File Uploaded!')
})
it.skip('upload a file with drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('new.txt',{subjectType:'drag-n-drop'})    //upload file 
    cy.wait(5000)
    cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] div[class="dz-details"] span').contains('new.txt')
})
it.skip('upload multiple files', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').attachFile(["new.txt","db.json"])    //upload file 
    cy.wait(5000)
    cy.get('ul[id="fileList"] li').contains('new.txt')
    cy.get('ul[id="fileList"] li').contains('db.json')
})

})
