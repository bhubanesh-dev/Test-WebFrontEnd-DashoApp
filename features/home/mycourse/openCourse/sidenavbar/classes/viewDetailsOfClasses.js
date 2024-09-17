import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function viewDetailsOfClasses(driver) {
  describe("open class tab", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should open details of a class ", async function () {
      // Wait for the button element to be located
      await driver.sleep(1000);
      const Button = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[2]/button[2]"
          )
        ),
        10000 // Wait up to 20 seconds to locate the element
      );

      // Ensure the button is visible and clickable
      await driver.wait(until.elementIsVisible(Button), 10000);

      // Click the button to open the discussion dashboard
      await Button.click();
    });
  });
}
