describe("Todo Application", () => {
      before(() => {
            cy.visit("http://localhost:5173"); // Visit the page
      });

      it("should handle a complete todo workflow", () => {
            // Add a new todo with the "+" button
            cy.get('input[placeholder="Enter New Todo"]').type("New Task");
            cy.get("#add").click(); // Targeting the "+" button by its ID
            cy.contains("New Task").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type("New Task");
            cy.get("#add").click();
            cy.contains("New Task").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type("New Task 1");
            cy.get("#add").click();
            cy.contains("New Task 1").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type("New Task 2");
            cy.get("#add").click();
            cy.contains("New Task 2").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type("New Task 3");
            cy.get("#add").click();
            cy.contains("New Task 3").should("exist");

            // Add todo by pressing Enter
            cy.get('input[placeholder="Enter New Todo"]').type(
                  "Task with Enter{enter}"
            ); // Type and press Enter
            cy.contains("Task with Enter").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type(
                  "Task with Enter 1{enter}"
            );
            cy.contains("Task with Enter 1").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type(
                  "Task with Enter 2{enter}"
            );
            cy.contains("Task with Enter 2").should("exist");

            cy.get('input[placeholder="Enter New Todo"]').type(
                  "Task with Enter 3{enter}"
            );
            cy.contains("Task with Enter 3").should("exist");

            // Edit the todo
            cy.contains("New Task 1").parent().find("#edit2").click(); // Targeting the edit SVG by its ID
            cy.get('input[placeholder="Enter edited todo"]').type(
                  "Updated Task"
            );
            cy.get("#edit2").click();
            cy.contains("Updated Task").should("exist"); //check updated task exist or not

            cy.contains("New Task 2").parent().find("#edit3").click();
            cy.get('input[placeholder="Enter edited todo"]').type(
                  "Updated Task 2"
            );
            cy.get("#edit3").click();
            cy.contains("Updated Task 2").should("exist");

            // Check the checkbox to mark todo as completed
            cy.contains("New Task")
                  .parent()
                  .find('input[type="checkbox"]')
                  .check(); // Mark as completed
            cy.contains("New Task")
                  .parent()
                  .find('input[type="checkbox"]')
                  .should("be.checked"); //check todo is checked or not

            cy.contains("Task with Enter 2")
                  .parent()
                  .find('input[type="checkbox"]')
                  .check();
            cy.contains("Task with Enter 2")
                  .parent()
                  .find('input[type="checkbox"]')
                  .should("be.checked");

            cy.contains("New Task 3")
                  .parent()
                  .find('input[type="checkbox"]')
                  .check();
            cy.contains("New Task 3")
                  .parent()
                  .find('input[type="checkbox"]')
                  .should("be.checked");

            // Uncheck the checkbox
            cy.contains("Task with Enter 2")
                  .parent()
                  .find('input[type="checkbox"]')
                  .uncheck(); // Mark as incomplete
            cy.contains("Task with Enter 2")
                  .parent()
                  .find('input[type="checkbox"]')
                  .should("not.be.checked"); //check todo is checked or not

            // Delete the todo
            cy.contains("Task with Enter").parent().find("#delete5").click(); // Targeting the delete SVG by its ID
            cy.get("#delete5").should("not.exist"); //check todo not exist

            cy.contains("Updated Task 2").parent().find("#delete3").click();
            cy.get("#delete3").should("not.exist");
      });
});
