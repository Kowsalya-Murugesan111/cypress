import Login from "../pageObject/LoginPage"

describe('saucedemo', () => {

it('login', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.fixture('example').then((data)=>{
        const ln = new Login();
     
     
     
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.login()
        ln.verifyLogin()
        ln.myTimesheet()

    })

})
});



