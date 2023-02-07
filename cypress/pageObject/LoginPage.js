class Login
{
 
    setUserName(username){
    cy.get("input[placeholder='Username']").type(username)
 }

   setPassword(password){
   cy.get("input[placeholder='Password']").type(password)
}

   login(login){
      cy.get("button[type='submit']").click()
   }

   verifyLogin(verifyLogin){
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain", "Dashboard")
   }

   myTimesheet(){
      cy.get("button[title='My Timesheet']").click()
   }
}
export default Login
