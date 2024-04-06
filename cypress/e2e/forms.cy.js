describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/Testing Forms/i);

    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    cy.get("@subscribe-input").type("test@gmail.com");
    cy.contains(/Successfully subbed: test@gmail.com!/i).should("not.exist");

    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: test@gmail.com!/i).should("exist");

    cy.wait(3000);

    cy.contains(/Successfully subbed: test@gmail.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("test@code.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: test@code.io!/i).should("exist");

    cy.wait(3000);

    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
