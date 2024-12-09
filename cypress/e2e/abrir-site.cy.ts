describe('abertura do site', () => {
  it('site abre', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('body').should('be.visible')
  })

  it('titulo está correto', () => {
    cy.visit('http://localhost:3000')
    cy.title().should('eq', 'Desbravador - Github Explorer')
  })
})