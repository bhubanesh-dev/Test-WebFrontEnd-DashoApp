import {By,until} from 'selenium-webdriver'
import assert from "assert";

export default async function deleteAssignmentFile(driver) {
  describe("delete a assignment file ", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should delete a assignment file ", async function () {
      // Wait for the button element to be located
      await driver.sleep(1000);
      const Button = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[4]/table/tbody/tr/td[4]/div/button"
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
