describe('Counter', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('has the correct title', () => {
        cy.title().should('equal', 'UnitTest');
    });

    it('increments the count', () => {
        cy.get('[data-testid="count"]').should('have.text', '0');
        cy.get('[data-testid="increment-button"]').click();
        cy.get('[data-testid="count"]').should('have.text', '1');
    });

    it('decrements the count', () => {
        cy.get('[data-testid="decrement-button"]').click();
        cy.get('[data-testid="count"]').should('have.text', '-1');
    });

    it('resets the count', () => {
        cy.get('[data-testid="reset-input"]').type('123');
        cy.get('[data-testid="reset-button"]').click();
        cy.get('[data-testid="count"]').should('have.text', '123');
    });
});