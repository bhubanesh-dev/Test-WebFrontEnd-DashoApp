import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function addAdmin(driver) {
  describe("add a admin in people", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should add a admin", async function () {
      // click on add admin
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div/button[3]"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(1000);
      // search name to add
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/div[3]/input"
            )
          ),
          10000
        )
        .sendKeys("vibhav");
      //  click on add button
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/div[4]/div[2]/button"
            )
          ),
          10000
        )
        .click();
      // click on close tab button
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/div[1]/div"
            )
          ),
          10000
        )
        .click();
    });
  });
}
