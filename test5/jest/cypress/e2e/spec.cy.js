// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('login / logout flow specification', () => {

  it('Log in to the system with a valid user by visiting the "/login" route', () => {
    cy.visit("/login")
    .get('input[name="user"]').type("test")
    .get('input[name="password"]').type("pass123").type("{enter}")
    .url().should('include', "/dashboard");

    cy.get('#navbarDropdown').contains('test');
  });

});