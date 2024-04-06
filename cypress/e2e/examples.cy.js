describe("Variouse examples", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("multi-page testing", () => {
    // Click on the "Why Cypress?" navigation link
    cy.getDataTest("nav-why-cypress").click();
    // Assert that the resulting page path is "/"
    cy.location("pathname").should("equal", "/");

    // Click on the "Overview" navigation link
    cy.getDataTest("nav-overview").click();
    // Assert that the resulting page path is "/overview"
    cy.location("pathname").should("equal", "/overview");

    // Click on the "Fundamentals" navigation link
    cy.getDataTest("nav-fundamentals").click();
    // Assert that the resulting page path is "/fundamentals"
    cy.location("pathname").should("equal", "/fundamentals");

    // Click on the "Forms" navigation link
    cy.getDataTest("nav-forms").click();
    // Assert that the resulting page path is "/forms"
    cy.location("pathname").should("equal", "/forms");

    // Click on the "Examples" navigation link
    cy.getDataTest("nav-examples").click();
    // Assert that the resulting page path is "/examples"
    cy.location("pathname").should("equal", "/examples");

    // Click on the "Component" navigation link
    cy.getDataTest("nav-component").click();
    // Assert that the resulting page path is "/component"
    cy.location("pathname").should("equal", "/component");

    // Click on the "Best Practices" navigation link
    cy.getDataTest("nav-best-practices").click();
    // Assert that the resulting page path is "/best-practices"
    cy.location("pathname").should("equal", "/best-practices");
  });

  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("nav-examples").click();
    cy.getDataTest("post-button").click();
  });

  it.only("grudges", () => {
    cy.getDataTest("nav-examples").click();
    cy.contains("Add Some Grudges");
    cy.getGrudgeLength(0);

    cy.getDataTest("grudge-input").type("Some Grudge");
    cy.getDataTest("add-grudge-button").click();
    cy.getGrudgeLength(1);

    cy.getDataTest("grudge-input").type("Some Grudge 2");
    cy.getDataTest("add-grudge-button").click();
    cy.getGrudgeLength(2);

    cy.getDataTest("remove-button-Some Grudge").click();
    cy.getGrudgeLength(1);

    cy.getDataTest("clear-grudge").click();
    cy.getGrudgeLength(0);
  });
});
