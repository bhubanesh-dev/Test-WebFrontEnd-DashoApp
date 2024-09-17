import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function openClassDashboard(driver) {
  describe("open class tab", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should open class view dashboard", async function () {
      // Wait for the button element to be located
      const discussionButton = await driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div/div/div/div[1]/button[4]")
        ),
        10000 // Wait up to 20 seconds to locate the element
      );

      // Ensure the button is visible and clickable
      await driver.wait(until.elementIsVisible(discussionButton), 10000);

      // Click the button to open the discussion dashboard
      await discussionButton.click();
    });
  });
}
