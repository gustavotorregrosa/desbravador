describe('abertura do site', () => {

  it('verifica se a pagina usuários top está OK', () => {
      cy.visit('http://localhost:3000')  
      cy.contains('button', 'Usuários TOP').should('be.visible').click()
      cy.wait(2000)
      cy.contains('th', 'BrianTheCoder').should('be.visible')

    })

    it('verifica se a pagina usuários top está nos leva para a descrição do usuário', () => {
      cy.visit('http://localhost:3000')  
      cy.contains('button', 'Usuários TOP').should('be.visible').click()
      cy.wait(2000)
      cy.contains('th', 'BrianTheCoder').should('be.visible').click()
      cy.wait(2000)
      cy.contains('span', 'wbsmith83@gmail.com').should('be.visible')

    })
})
