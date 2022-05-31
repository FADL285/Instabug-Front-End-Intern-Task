describe("Login View Testing", () => {
  it("Redirects to login page to access welcome page", () => {
    // Navigate to home page that redirect to login page
    cy.visit("/");
    // Check that redirection success
    expect(cy.get("[data-cy='form']")).to.exist;
  });

  // Scenario 1
  it("Invalid credentials must be entered (Email & Password) and error messages appear", () => {
    //  Enter an email address that doesn’t exist in the login list and any pass
    cy.login("fadl@admin.local", "F-a-12345");
    // Validate that the error message ‘you email and/or password are incorrect’ shows
    cy.get("[data-cy=alert]").should(
      "have.text",
      "Your email and/or password are incorrect."
    );
  });

  // Scenario 2:
  it("Invalid Password must be entered and error messages appear ", () => {
    // reload the page
    cy.visit("/login");
    //  Enter an email address that exist in the login list and invalid pass
    cy.login("mohamed@instabug.com", "F-a-12345");
    // d. Validate that the error message ‘you email and/or password are incorrect’ shows
    cy.get("[data-cy=alert]").should(
      "have.text",
      "Your email and/or password are incorrect."
    );
  });

  //   Scenario 4:
  it("should show error message when enter invalid email address", () => {
    // Clear Form fields
    cy.clearForm();
    cy.get("[data-cy=form] #email")
      .type("fadl")
      .blur()
      .should("have.class", "error");
    cy.get("[data-cy=form] #email + .hint-error").should("be.visible");
  });

  //   Scenario 3:
  it("should will redirect to the welcome page after successfully login", () => {
    cy.clearForm();
    cy.login("mohamed@instabug.com", "A12345678");
    expect(cy.get("[data-cy=logout]")).to.exist;
  });
});
