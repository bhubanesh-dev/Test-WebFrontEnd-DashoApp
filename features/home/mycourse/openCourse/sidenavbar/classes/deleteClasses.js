import { By, until, Select } from "selenium-webdriver";
// Import Select class
import assert from "assert";

export default async function deleteClasses(driver) {
  describe("edit Class", function () {
    this.timeout(60000); // Set a timeout to 60 seconds

    before(async function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });

    it("should delete class",async function () {
      // Click on 3 dot button to open edit button
      await driver.sleep(5000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div[2]/button"
            )
          ),
          10000
        )
        .click();
      
      // Click on delete button
      await driver.sleep(200);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div[2]/div[2]/div/button[2]"
            )
          ),
          10000
        )
        .click();

        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/div/div/div[2]/div/div/div[3]/div/div[1]/div[2]/div[2]/div/div/div/div/button[2]")),10000).click();

    });
  });
}
