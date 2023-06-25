class Login {
    setUserName(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password){
        cy.get('input[placeholder="Password"]').type(password)
    }

    setClickSubmit(){
        cy.xpath('(//button[normalize-space()="Login"])[1]').click()
    }

    setExpectedValue(expectedValue){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",expectedValue)
    }
}

export default Login;