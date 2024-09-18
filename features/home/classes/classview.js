import { By, until } from "selenium-webdriver";

export default async function testClassView(driver) {
  describe("Class View Functionality Test", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("Driver not set");
      }
    });

    it("should view and manage classes", async function () {
      try {
        // Wait and click on the "Classes" button
        const classesButton = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[2]/div/div[2]/div[2]/button"
            )
          ),
          10000
        );
        await driver.wait(until.elementIsVisible(classesButton), 10000);
        await classesButton.click();

        // Click on the "Day View" dropdown button
        const dayViewDropdown = await driver.findElement(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/button"
          )
        );
        await dayViewDropdown.click();

        // Wait briefly for the dropdown animation
        await driver.sleep(1000);

        // Click on the dropdown again to switch back to "Week View"
        await dayViewDropdown.click();
        await driver.sleep(1000);
        const dayViewOption = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/button[1]"
            )
          ),
          10000
        );
        await dayViewOption.click();
        await driver.sleep(1000);

        // Click on the dropdown to select "All View"
        await dayViewDropdown.click();
        const allViewOption = await driver.wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/button[2]"
            )
          ),
          10000
        );
        await allViewOption.click();
        await driver.sleep(1000);

        
      } catch (error) {
        console.error("Error in managing class view:", error);
        throw error;
      }
    });

    after(async function () {
      // Placeholder for any cleanup actions if needed
      console.log("Post-class view actions completed.");
    });
  });
}
