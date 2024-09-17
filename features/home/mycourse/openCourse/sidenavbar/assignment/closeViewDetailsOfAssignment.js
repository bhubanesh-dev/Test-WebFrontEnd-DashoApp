import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function closeViewDetailsOfAssignment(driver) {
  describe("close view details of assignment", function () {
    this.timeout(20000); // Extend Mocha test timeout to 20 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should close view assignment dashboard", async function () {
      // Wait for the button element to be located
      await driver.sleep(2000);
      const closeButton = await driver.wait(
        until.elementLocated(
          By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/button")
        ),
        10000 // Wait up to 10 seconds to locate the element
      );

      // Force the click using JavaScript if other element obstructs it
      await driver.executeScript("arguments[0].click();", closeButton);
    });
  });
}
