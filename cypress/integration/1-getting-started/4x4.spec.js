/// <reference types="cypress" />

describe('react-tutorial app', () => {
  beforeEach(() => {
    // running with 'yarn start' on localhost
    // cy.visit('http://localhost:9999');
    // running on GitHub Actions
    cy.visit(Cypress.env('HOST'));
  });

  it('displays 4x4', () => {
    // 4行
    cy.get('.game-board .board-row').should('have.length', 4);
    // 16マス
    cy.get('.game-board .board-row .square').should('have.length', 16);
    // 4列
    cy.get('.game-board .board-row:first-child .square').should('have.length', 4);
  });
})

describe('player', () => {
  it('first player is X', () => {
    // 初期表示ではXの手番
    cy.get('.game-info .game-status').contains('X');
  });
  it('second player is O', () => {
    // 1度マスがクリックされた後はクリックではOの手番
    cy.get('button.square').first().click();
    cy.get('.game-info .game-status').contains('O');
  });
});