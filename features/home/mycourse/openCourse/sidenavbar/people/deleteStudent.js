import { By, until } from "selenium-webdriver";
import assert from "assert";

export default async function deleteStudent(driver) {
  describe("delete a student  in people", function () {
    this.timeout(30000);
    before(function () {
      if (!driver) {
        throw new Error("driver not set");
      }
    });
    it("should delete a teacher", async function () {
      // click on delete student button
      await driver.sleep(1000);
      await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/html/body/div/div/div/div[2]/div/div/div/div[7]/div[2]/div/div/div/div[1]/button"
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
              "/html/body/div/div/div/div[2]/div/div/div/div[7]/div[2]/div/div/div/div[3]/div/div/button[2]"
            )
          ),
          10000
        )
        .click();
    });
  });
}
