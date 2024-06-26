describe("Fundamentals Test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains the correct header text", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Accordion works correctly", () => {
    cy.contains(/Testing Fundamentals/i);
    cy.contains(/Your tests will exist in a describe block./i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block./i).should(
      "not.be.visible"
    );
  });
});
