import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addStudentGradeInViewDetailsOfAssignment(driver) {
  describe("add student grade in  a assignment file ", function () {
    this.timeout(60000); // Extend Mocha test timeout to 60 seconds

    before(function () {
      if (!driver) {
        throw new Error("Failed to initialize WebDriver after driver setup");
      }
    });

    it("should add student grade", async function () {
      // Wait for the button element to be located
      await driver.sleep(2000);
      const addGradeButton = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[6]/div/table/tbody/tr[1]/td[4]/button"
          )
        ),
        10000 // Wait up to 20 seconds to locate the element
      );

      // Ensure the button is visible and clickable
      await driver.sleep(1000);
      await driver.wait(until.elementIsVisible(addGradeButton), 10000);

      // Click the button to open the discussion dashboard
      await addGradeButton.click();
      await driver.sleep(3000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[6]/div[2]/div/div/div[3]/input"
            )
          ),
          10000
        )
        .sendKeys("A+");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[6]/div[2]/div/div/div[4]/textarea"
            )
          ),
          10000
        )
        .sendKeys("good job");
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div/div[6]/div[2]/div/div/div[5]/button"
            )
          ),
          10000
        )
        .click();
        await driver.sleep(3000);
    });
  });
}
