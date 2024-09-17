import {By,until} from 'selenium-webdriver'


import assert from "assert";

export default async function viewDetailsOfAssignment(driver) {
  describe("view  assignment details ", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should open details of a Assignemt ", async function () {
      // Wait for the button element to be located
      await driver.sleep(2000);
      const Button = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[6]/div[3]/button"
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
