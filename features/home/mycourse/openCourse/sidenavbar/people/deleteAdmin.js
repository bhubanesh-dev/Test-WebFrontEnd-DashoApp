import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteAdmin(driver) {
  describe("delete a admin in people", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should delete a admin", async function () {
      // click on delete button for admin
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div/div/button"
            )
          ),
          10000
        )
        .click();
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              " /html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div/div/div[3]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
